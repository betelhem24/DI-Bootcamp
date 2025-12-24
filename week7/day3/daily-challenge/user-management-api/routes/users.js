const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');

const USERS_FILE = path.join(__dirname, '../data/users.json');
const SALT_ROUNDS = 10;

// Helper function to read users from file with error handling
async function readUsers() {
    try {
        const data = await fs.readFile(USERS_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File doesn't exist, create it with empty array
            await fs.writeFile(USERS_FILE, JSON.stringify([], null, 2), 'utf8');
            return [];
        }
        throw new Error(`Error reading users file: ${error.message}`);
    }
}

// Helper function to write users to file with error handling
async function writeUsers(users) {
    try {
        await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
        throw new Error(`Error writing to users file: ${error.message}`);
    }
}

// Input validation helper
function validateRegistrationInput(data) {
    const { name, lastName, email, username, password } = data;
    const errors = [];

    if (!name || name.trim().length === 0) {
        errors.push('Name is required');
    }
    if (!lastName || lastName.trim().length === 0) {
        errors.push('Last name is required');
    }
    if (!email || email.trim().length === 0) {
        errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push('Invalid email format');
    }
    if (!username || username.trim().length < 3) {
        errors.push('Username must be at least 3 characters');
    }
    if (!password || password.length < 6) {
        errors.push('Password must be at least 6 characters');
    }

    return errors;
}

// POST /register - Register a new user with bcrypt hashing
router.post('/register', async (req, res) => {
    try {
        const { name, lastName, email, username, password } = req.body;

        // Validate input
        const validationErrors = validateRegistrationInput(req.body);
        if (validationErrors.length > 0) {
            return res.status(400).json({ 
                message: validationErrors.join(', ')
            });
        }

        // Read existing users
        const users = await readUsers();

        // Check if username already exists
        const usernameExists = users.find(user => 
            user.username.toLowerCase() === username.toLowerCase()
        );
        if (usernameExists) {
            return res.status(400).json({ 
                message: 'Username already exists'
            });
        }

        // Check if email already exists
        const emailExists = users.find(user => 
            user.email.toLowerCase() === email.toLowerCase()
        );
        if (emailExists) {
            return res.status(400).json({ 
                message: 'Email already exists'
            });
        }

        // Hash password using bcrypt
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        // Create new user with hashed password
        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
            name: name.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            username: username.trim(),
            password: hashedPassword, // Store hashed password
            createdAt: new Date().toISOString()
        };

        // Add user to array
        users.push(newUser);

        // Write to file
        await writeUsers(users);

        // Return success response (without password)
        const { password: _, ...userWithoutPassword } = newUser;
        res.status(201).json({
            message: `User ${username} registered successfully`,
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ 
            message: 'Error registering user',
            error: error.message 
        });
    }
});

// POST /login - Login user with bcrypt password comparison
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate input
        if (!username || username.trim().length === 0) {
            return res.status(400).json({ 
                message: 'Username is required' 
            });
        }
        if (!password || password.length === 0) {
            return res.status(400).json({ 
                message: 'Password is required' 
            });
        }

        // Read users
        const users = await readUsers();

        // Find user by username
        const user = users.find(u => 
            u.username.toLowerCase() === username.toLowerCase()
        );

        if (!user) {
            return res.status(401).json({ 
                message: 'Invalid username or password' 
            });
        }

        // Compare password using bcrypt
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(401).json({ 
                message: 'Invalid username or password' 
            });
        }

        // Login successful
        const { password: _, ...userWithoutPassword } = user;
        res.status(200).json({
            message: `Hi ${user.name}, welcome back!`,
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            message: 'Error logging in',
            error: error.message 
        });
    }
});

// GET /users - Get all users (without passwords)
router.get('/users', async (req, res) => {
    try {
        const users = await readUsers();
        
        // Remove passwords from response
        const usersWithoutPasswords = users.map(({ password, ...user }) => user);
        
        res.status(200).json({
            count: usersWithoutPasswords.length,
            users: usersWithoutPasswords
        });
    } catch (error) {
        console.error('Error reading users:', error);
        res.status(500).json({ 
            message: 'Error retrieving users',
            error: error.message 
        });
    }
});

// GET /users/:id - Get user by ID (without password)
router.get('/users/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        
        if (isNaN(userId)) {
            return res.status(400).json({ 
                message: 'Invalid user ID' 
            });
        }

        const users = await readUsers();
        const user = users.find(u => u.id === userId);
        
        if (!user) {
            return res.status(404).json({ 
                message: 'User not found' 
            });
        }

        // Remove password from response
        const { password, ...userWithoutPassword } = user;
        res.status(200).json(userWithoutPassword);
        
    } catch (error) {
        console.error('Error reading user:', error);
        res.status(500).json({ 
            message: 'Error retrieving user',
            error: error.message 
        });
    }
});

// PUT /users/:id - Update user by ID with optional password hashing
router.put('/users/:id', async (req, res) => {
    try {
        const userId = parseInt(req.params.id);
        
        if (isNaN(userId)) {
            return res.status(400).json({ 
                message: 'Invalid user ID' 
            });
        }

        const { name, lastName, email, username, password } = req.body;
        
        // Check if at least one field is provided
        if (!name && !lastName && !email && !username && !password) {
            return res.status(400).json({ 
                message: 'At least one field must be provided for update' 
            });
        }

        const users = await readUsers();
        const userIndex = users.findIndex(u => u.id === userId);
        
        if (userIndex === -1) {
            return res.status(404).json({ 
                message: 'User not found' 
            });
        }

        // Validate email format if provided
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ 
                message: 'Invalid email format' 
            });
        }

        // Check if new username is taken by another user
        if (username && username !== users[userIndex].username) {
            const usernameExists = users.find(u => 
                u.username.toLowerCase() === username.toLowerCase() && u.id !== userId
            );
            if (usernameExists) {
                return res.status(400).json({ 
                    message: 'Username already exists' 
                });
            }
        }

        // Check if new email is taken by another user
        if (email && email !== users[userIndex].email) {
            const emailExists = users.find(u => 
                u.email.toLowerCase() === email.toLowerCase() && u.id !== userId
            );
            if (emailExists) {
                return res.status(400).json({ 
                    message: 'Email already exists' 
                });
            }
        }

        // Update user fields
        if (name) users[userIndex].name = name.trim();
        if (lastName) users[userIndex].lastName = lastName.trim();
        if (email) users[userIndex].email = email.trim().toLowerCase();
        if (username) users[userIndex].username = username.trim();
        
        // Hash new password if provided using bcrypt
        if (password) {
            if (password.length < 6) {
                return res.status(400).json({ 
                    message: 'Password must be at least 6 characters' 
                });
            }
            users[userIndex].password = await bcrypt.hash(password, SALT_ROUNDS);
        }
        
        users[userIndex].updatedAt = new Date().toISOString();

        await writeUsers(users);

        // Remove password from response
        const { password: _, ...userWithoutPassword } = users[userIndex];
        res.status(200).json({
            message: 'User updated successfully',
            user: userWithoutPassword
        });
        
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ 
            message: 'Error updating user',
            error: error.message 
        });
    }
});

module.exports = router;