const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        // Mock query - assumes users table exists
        // const newUser = await db.query(
        //   'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username, email',
        //   [username, email, hashedPassword]
        // );
        // res.json(newUser.rows[0]);
        res.json({ message: 'User registered (Mock DB)' }); // Mocking pending DB setup
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    // Login Logic
    res.json({ accessToken: 'mock_token' });
};

exports.refresh = (req, res) => {
    // Refresh Logic
    res.json({ accessToken: 'new_mock_token' });
};

exports.logout = (req, res) => {
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out' });
};
