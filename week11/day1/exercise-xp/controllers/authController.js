const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = require('../db/users'); // Mock DB

const SECRET_KEY = process.env.JWT_SECRET || 'mysecretkey';
const REFRESH_SECRET_KEY = process.env.JWT_REFRESH_SECRET || 'myrefreshsecretkey';

// Register User
exports.register = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = { id: Date.now(), username, password: hashedPassword };
        users.push(newUser);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

// Login User
exports.login = async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate Tokens
    const accessToken = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id, username: user.username }, REFRESH_SECRET_KEY, { expiresIn: '7d' });

    // Set Refresh Token as generic HTTP-only cookie
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        // secure: true, // specific for HTTPS
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    res.json({ accessToken });
};

// Logout User
exports.logout = (req, res) => {
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out successfully' });
};

// Refresh Token
exports.refreshToken = (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Access Denied. No refresh token provided.' });
    }

    try {
        const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY);
        const accessToken = jwt.sign({ id: decoded.id, username: decoded.username }, SECRET_KEY, { expiresIn: '15m' });
        res.json({ accessToken });
    } catch (error) {
        return res.status(400).json({ message: 'Invalid refresh token.' });
    }
};
