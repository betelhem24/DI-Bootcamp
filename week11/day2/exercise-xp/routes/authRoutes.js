const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middleware/authMiddleware');

// Register User
router.post('/register', authController.register);

// Login User
router.post('/login', authController.login);

// Logout User
router.get('/logout', authController.logout);

// Refresh Token
router.get('/refresh', authController.refreshToken);

// Protected Route Example
router.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
