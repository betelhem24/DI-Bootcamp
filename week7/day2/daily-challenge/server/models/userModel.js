const db = require('../config/db');

class UserModel {
  // Get all users
  static async getAllUsers() {
    try {
      const users = await db('users').select('id', 'email', 'username', 'first_name', 'last_name');
      return users;
    } catch (error) {
      throw error;
    }
  }

  // Get user by ID
  static async getUserById(id) {
    try {
      const user = await db('users')
        .select('id', 'email', 'username', 'first_name', 'last_name')
        .where({ id })
        .first();
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Get user by username
  static async getUserByUsername(username) {
    try {
      const user = await db('users')
        .select('users.id', 'users.email', 'users.username', 'users.first_name', 'users.last_name', 'hashpwd.password')
        .leftJoin('hashpwd', 'users.username', 'hashpwd.username')
        .where('users.username', username)
        .first();
      return user;
    } catch (error) {
      throw error;
    }
  }

  // Check if username exists
  static async checkUsernameExists(username) {
    try {
      const user = await db('users').where({ username }).first();
      return !!user;
    } catch (error) {
      throw error;
    }
  }

  // Check if email exists
  static async checkEmailExists(email) {
    try {
      const user = await db('users').where({ email }).first();
      return !!user;
    } catch (error) {
      throw error;
    }
  }

  // Create new user with transaction
  static async createUser(userData, hashedPassword) {
    const trx = await db.transaction();
    try {
      // Insert into users table
      const [user] = await trx('users')
        .insert({
          email: userData.email,
          username: userData.username,
          first_name: userData.first_name,
          last_name: userData.last_name
        })
        .returning(['id', 'email', 'username', 'first_name', 'last_name']);

      // Insert into hashpwd table
      await trx('hashpwd').insert({
        username: userData.username,
        password: hashedPassword
      });

      // Commit transaction
      await trx.commit();
      return user;
    } catch (error) {
      // Rollback transaction on error
      await trx.rollback();
      throw error;
    }
  }

  // Update user by ID
  static async updateUser(id, updateData) {
    try {
      const [updatedUser] = await db('users')
        .where({ id })
        .update(updateData)
        .returning(['id', 'email', 'username', 'first_name', 'last_name']);
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserModel;