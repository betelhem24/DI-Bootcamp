const PostModel = require('../models/postModel');

class PostController {
    static async getAllPosts(req, res) {
        try {
            const posts = await PostModel.getAllPosts();
            res.json(posts);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getPostById(req, res) {
        const { id } = req.params;
        if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

        try {
            const post = await PostModel.getPostById(id);
            if (!post) return res.status(404).json({ error: 'Post not found' });
            res.json(post);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async createPost(req, res) {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content required' });
        }

        try {
            const post = await PostModel.createPost(title, content);
            res.status(201).json(post);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async updatePost(req, res) {
        const { id } = req.params;
        const { title, content } = req.body;

        if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

        try {
            const post = await PostModel.updatePost(id, title, content);
            if (!post) return res.status(404).json({ error: 'Post not found' });
            res.json(post);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deletePost(req, res) {
        const { id } = req.params;
        if (isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

        try {
            const post = await PostModel.deletePost(id);
            if (!post) return res.status(404).json({ error: 'Post not found' });
            res.json({ message: 'Post deleted', post });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

module.exports = PostController;
