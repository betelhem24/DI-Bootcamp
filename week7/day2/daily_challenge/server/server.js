const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;
const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';

class UserController {
  // Register new user
  static async register(req, res) {
    try {
      const { email, username, password, first_name, last_name } = req.body;

      // Check if username/email exists
      if (await UserModel.checkUsernameExists(username)) return res.status(400).json({ error: 'Username already exists' });
      if (await UserModel.checkEmailExists(email)) return res.status(400).json({ error: 'Email already exists' });

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

      const newUser = await UserModel.createUser({ email, username, first_name, last_name }, hashedPassword);

      res.status(201).json({
        message: 'User registered successfully',
        user: newUser
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Login user
  static async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await UserModel.getUserByUsername(username);

      if (!user || !user.password) return res.status(401).json({ error: 'Invalid username or password' });

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(401).json({ error: 'Invalid username or password' });

      // Generate JWT
      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

      delete user.password;

      res.status(200).json({
        message: 'Login successful',
        user,
        token
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Get all users (with pagination)
  static async getAllUsers(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const users = await UserModel.getAllUsers(offset, limit); // pass pagination params
      res.status(200).json({
        message: 'Users retrieved successfully',
        page,
        limit,
        count: users.length,
        users
      });
    } catch (error) {
      console.error('Get all users error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Get user by ID
  static async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.getUserById(id);
      if (!user) return res.status(404).json({ error: 'User not found' });

      res.status(200).json({ message: 'User retrieved successfully', user });
    } catch (error) {
      console.error('Get user by ID error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Update user
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { email, username, first_name, last_name } = req.body;

      const existingUser = await UserModel.getUserById(id);
      if (!existingUser) return res.status(404).json({ error: 'User not found' });

      // Check for duplicates
      if (username && username !== existingUser.username && await UserModel.checkUsernameExists(username)) {
        return res.status(400).json({ error: 'Username already exists' });
      }
      if (email && email !== existingUser.email && await UserModel.checkEmailExists(email)) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      const updateData = {};
      if (email) updateData.email = email;
      if (username) updateData.username = username;
      if (first_name) updateData.first_name = first_name;
      if (last_name) updateData.last_name = last_name;

      const updatedUser = await UserModel.updateUser(id, updateData);

      res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      console.error('Update user error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = UserController;
