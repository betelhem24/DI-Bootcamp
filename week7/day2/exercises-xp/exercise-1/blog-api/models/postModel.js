const pool = require('../config/db');

class PostModel {
    // Get all posts
    static async getAllPosts() {
        const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        return result.rows;
    }

    // Get post by ID
    static async getPostById(id) {
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        return result.rows[0];
    }

    // Create new post
    static async createPost(title, content) {
        const result = await pool.query(
            'INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *',
            [title, content]
        );
        return result.rows[0];
    }

    // Update post
    static async updatePost(id, title, content) {
        const result = await pool.query(
            'UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *',
            [title, content, id]
        );
        return result.rows[0];
    }

    // Delete post
    static async deletePost(id) {
        const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = PostModel;