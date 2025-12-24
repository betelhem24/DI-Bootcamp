const PostModel = require('../models/postModel');

class PostController {
    // Get all posts
    static async getAllPosts(req, res) {
        try {
            const posts = await PostModel.getAllPosts();
            res.status(200).json(posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Get post by ID
    static async getPostById(req, res) {
        try {
            const { id } = req.params;
            const post = await PostModel.getPostById(id);
            
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
            
            res.status(200).json(post);
        } catch (error) {
            console.error('Error fetching post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Create new post
    static async createPost(req, res) {
        try {
            const { title, content } = req.body;
            
            if (!title || !content) {
                return res.status(400).json({ error: 'Title and content are required' });
            }
            
            const newPost = await PostModel.createPost(title, content);
            res.status(201).json(newPost);
        } catch (error) {
            console.error('Error creating post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Update post
    static async updatePost(req, res) {
        try {
            const { id } = req.params;
            const { title, content } = req.body;
            
            if (!title || !content) {
                return res.status(400).json({ error: 'Title and content are required' });
            }
            
            const updatedPost = await PostModel.updatePost(id, title, content);
            
            if (!updatedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }
            
            res.status(200).json(updatedPost);
        } catch (error) {
            console.error('Error updating post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Delete post
    static async deletePost(req, res) {
        try {
            const { id } = req.params;
            const deletedPost = await PostModel.deletePost(id);
            
            if (!deletedPost) {
                return res.status(404).json({ error: 'Post not found' });
            }
            
            res.status(200).json({ message: 'Post deleted successfully', post: deletedPost });
        } catch (error) {
            console.error('Error deleting post:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = PostController;