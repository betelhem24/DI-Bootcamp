const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// POST /register - Register a new user
router.post('/register', UserController.register);

// POST /login - Login user
router.post('/login', UserController.login);

// GET /users - Get all users
router.get('/users', UserController.getAllUsers);

// GET /users/:id - Get user by ID
router.get('/users/:id', UserController.getUserById);

// PUT /users/:id - Update user by ID
router.put('/users/:id', UserController.updateUser);

module.exports = router;