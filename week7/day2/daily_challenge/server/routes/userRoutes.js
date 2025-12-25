const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { 
  validateRegistration, 
  validateLogin, 
  validateUserId, 
  validateUpdate 
} = require('../middleware/validation');

// POST /register - Register a new user (with validation)
router.post('/register', validateRegistration, UserController.register);

// POST /login - Login user (with validation)
router.post('/login', validateLogin, UserController.login);

// GET /users - Get all users
router.get('/users', UserController.getAllUsers);

// GET /users/:id - Get user by ID (with ID validation)
router.get('/users/:id', validateUserId, UserController.getUserById);

// PUT /users/:id - Update user by ID (with validation)
router.put('/users/:id', validateUserId, validateUpdate, UserController.updateUser);

module.exports = router;