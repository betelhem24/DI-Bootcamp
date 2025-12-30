const db = require('../config/db');

class PostModel {
    // Get all posts
    static async getAllPosts() {
        try {
            return await db('posts').select('*').orderBy('created_at', 'desc');
        } catch (error) {
            throw new Error(`Error fetching posts: ${error.message}`);
        }
    }

    // Get post by ID
    static async getPostById(id) {
        try {
            const post = await db('posts').where({ id }).first();
            return post;
        } catch (error) {
            throw new Error(`Error fetching post: ${error.message}`);
        }
    }

    // Create new post
    static async createPost(title, content) {
        try {
            // Validate input
            if (!title || title.trim() === '') {
                throw new Error('Title is required and cannot be empty');
            }
            if (!content || content.trim() === '') {
                throw new Error('Content is required and cannot be empty');
            }

            // Sanitize input
            const sanitizedTitle = title.trim().substring(0, 255);
            const sanitizedContent = content.trim();

            const [newPost] = await db('posts')
                .insert({ title: sanitizedTitle, content: sanitizedContent })
                .returning('*');
            
            return newPost;
        } catch (error) {
            throw new Error(`Error creating post: ${error.message}`);
        }
    }

    // Update post
    static async updatePost(id, title, content) {
        try {
            // Validate input
            if (!title || title.trim() === '') {
                throw new Error('Title is required and cannot be empty');
            }
            if (!content || content.trim() === '') {
                throw new Error('Content is required and cannot be empty');
            }

            // Sanitize input
            const sanitizedTitle = title.trim().substring(0, 255);
            const sanitizedContent = content.trim();

            const [updatedPost] = await db('posts')
                .where({ id })
                .update({ title: sanitizedTitle, content: sanitizedContent })
                .returning('*');
            
            return updatedPost;
        } catch (error) {
            throw new Error(`Error updating post: ${error.message}`);
        }
    }

    // Delete post
    static async deletePost(id) {
        try {
            const [deletedPost] = await db('posts')
                .where({ id })
                .delete()
                .returning('*');
            
            return deletedPost;
        } catch (error) {
            throw new Error(`Error deleting post: ${error.message}`);
        }
    }
}

module.exports = PostModel;