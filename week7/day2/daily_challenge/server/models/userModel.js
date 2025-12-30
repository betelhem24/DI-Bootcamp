class UserModel {
  // Get all users with pagination
  static async getAllUsers(offset = 0, limit = 10) {
    try {
      const users = await db('users')
        .select('id', 'email', 'username', 'first_name', 'last_name')
        .offset(offset)
        .limit(limit);
      return users;
    } catch (error) {
      throw error;
    }
  }

  // Get user by ID
  static async getUserById(id) {
    try {
      return await db('users')
        .select('id', 'email', 'username', 'first_name', 'last_name')
        .where({ id })
        .first();
    } catch (error) {
      throw error;
    }
  }

  // Get user by username with password
  static async getUserByUsername(username) {
    try {
      return await db('users')
        .select('users.id', 'users.email', 'users.username', 'users.first_name', 'users.last_name', 'hashpwd.password')
        .leftJoin('hashpwd', 'users.id', 'hashpwd.user_id')
        .where('users.username', username)
        .first();
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
      const [user] = await trx('users')
        .insert({
          email: userData.email,
          username: userData.username,
          first_name: userData.first_name,
          last_name: userData.last_name
        })
        .returning(['id', 'email', 'username', 'first_name', 'last_name']);

      await trx('hashpwd').insert({
        user_id: user.id,
        username: userData.username,
        password: hashedPassword
      });

      await trx.commit();
      return user;
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  }

  // Update user
  static async updateUser(id, updateData) {
    try {
      if (!Object.keys(updateData).length) return null;
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
