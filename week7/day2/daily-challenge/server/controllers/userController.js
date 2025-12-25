const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

class UserController {
  // Register a new user
  static async register(req, res) {
    try {
      const { email, username, password, first_name, last_name } = req.body;

      // Check if username already exists
      const usernameExists = await UserModel.checkUsernameExists(username);
      if (usernameExists) {
        return res.status(400).json({ error: 'Username already exists' });
      }

      // Check if email already exists
      const emailExists = await UserModel.checkEmailExists(email);
      if (emailExists) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      // Hash password using SALT_ROUNDS from environment variable
      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      // Create user using transaction
      const newUser = await UserModel.createUser(
        { email, username, first_name, last_name },
        hashedPassword
      );

      res.status(201).json({
        message: 'User registered successfully',
        user: newUser
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Login user
  static async login(req, res) {
    try {
      const { username, password } = req.body;

      // Get user with password for verification
      const user = await UserModel.getUserByUsername(username);

      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      // Verify password exists
      if (!user.password) {
        return res.status(500).json({ error: 'Password data not found' });
      }

      // Compare passwords using bcrypt
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      // Remove password from response for security
      delete user.password;

      res.status(200).json({
        message: 'Login successful',
        user: user
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Get all users
  static async getAllUsers(req, res) {
    try {
      const users = await UserModel.getAllUsers();
      res.status(200).json({ 
        message: 'Users retrieved successfully',
        count: users.length,
        users 
      });
    } catch (error) {
      console.error('Get all users error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Get user by ID
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.getUserById(id);

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json({ 
        message: 'User retrieved successfully',
        user 
      });
    } catch (error) {
      console.error('Get user by ID error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }

  // Update user by ID
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { email, username, first_name, last_name } = req.body;

      // Check if user exists
      const existingUser = await UserModel.getUserById(id);
      if (!existingUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Prepare update data
      const updateData = {};
      if (email) updateData.email = email;
      if (username) updateData.username = username;
      if (first_name) updateData.first_name = first_name;
      if (last_name) updateData.last_name = last_name;

      // Check if new username already exists (if username is being updated)
      if (username && username !== existingUser.username) {
        const usernameExists = await UserModel.checkUsernameExists(username);
        if (usernameExists) {
          return res.status(400).json({ error: 'Username already exists' });
        }
      }

      // Check if new email already exists (if email is being updated)
      if (email && email !== existingUser.email) {
        const emailExists = await UserModel.checkEmailExists(email);
        if (emailExists) {
          return res.status(400).json({ error: 'Email already exists' });
        }
      }

      // Update user
      const updatedUser = await UserModel.updateUser(id, updateData);

      res.status(200).json({
        message: 'User updated successfully',
        user: updatedUser
      });
    } catch (error) {
      console.error('Update user error:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  }
}

module.exports = UserController;