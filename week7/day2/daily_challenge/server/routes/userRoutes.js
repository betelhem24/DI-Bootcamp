const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const { 
  validateRegistration, 
  validateLogin, 
  validateUserId, 
  validateUpdate 
} = require('../middleware/validation');
const authenticate = require('../middleware/auth');

// Public routes
router.post('/register', validateRegistration, UserController.register);
router.post('/login', validateLogin, UserController.login);

// Protected routes
router.get('/users', authenticate, UserController.getAllUsers);
router.get('/users/:id', authenticate, validateUserId, UserController.getUserById);
router.put('/users/:id', authenticate, validateUserId, validateUpdate, UserController.updateUser);

module.exports = router;
