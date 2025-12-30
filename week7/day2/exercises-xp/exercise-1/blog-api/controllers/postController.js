const PostModel = require('../models/postModel');

class PostController {
    // Get all posts
    static async getAllPosts(req, res) {
        try {
            console.log('📖 Fetching all posts...');
            const posts = await PostModel.getAllPosts();
            console.log(`✅ Retrieved ${posts.length} posts`);
            res.status(200).json(posts);
        } catch (error) {
            console.error('❌ Error fetching posts:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }

    // Get post by ID
    static async getPostById(req, res) {
        try {
            const { id } = req.params;
            
            // Validate ID
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: 'Invalid post ID' });
            }

            console.log(`📖 Fetching post with ID: ${id}`);
            const post = await PostModel.getPostById(id);
            
            if (!post) {
                console.log(`❌ Post with ID ${id} not found`);
                return res.status(404).json({ error: 'Post not found' });
            }
            
            console.log(`✅ Retrieved post: ${post.title}`);
            res.status(200).json(post);
        } catch (error) {
            console.error('❌ Error fetching post:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }

    // Create new post
    static async createPost(req, res) {
        try {
            const { title, content } = req.body;
            
            // Validate required fields
            if (!title || !content) {
                return res.status(400).json({ 
                    error: 'Title and content are required' 
                });
            }

            // Additional validation
            if (title.trim() === '' || content.trim() === '') {
                return res.status(400).json({ 
                    error: 'Title and content cannot be empty' 
                });
            }

            console.log(`📝 Creating new post: ${title}`);
            const newPost = await PostModel.createPost(title, content);
            console.log(`✅ Post created with ID: ${newPost.id}`);
            
            res.status(201).json(newPost);
        } catch (error) {
            console.error('❌ Error creating post:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }

    // Update post
    static async updatePost(req, res) {
        try {
            const { id } = req.params;
            const { title, content } = req.body;
            
            // Validate ID
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: 'Invalid post ID' });
            }

            // Validate required fields
            if (!title || !content) {
                return res.status(400).json({ 
                    error: 'Title and content are required' 
                });
            }

            // Additional validation
            if (title.trim() === '' || content.trim() === '') {
                return res.status(400).json({ 
                    error: 'Title and content cannot be empty' 
                });
            }

            console.log(`✏️ Updating post with ID: ${id}`);
            const updatedPost = await PostModel.updatePost(id, title, content);
            
            if (!updatedPost) {
                console.log(`❌ Post with ID ${id} not found`);
                return res.status(404).json({ error: 'Post not found' });
            }
            
            console.log(`✅ Post updated: ${updatedPost.title}`);
            res.status(200).json(updatedPost);
        } catch (error) {
            console.error('❌ Error updating post:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }

    // Delete post
    static async deletePost(req, res) {
        try {
            const { id } = req.params;
            
            // Validate ID
            if (!id || isNaN(id)) {
                return res.status(400).json({ error: 'Invalid post ID' });
            }

            console.log(`🗑️ Deleting post with ID: ${id}`);
            const deletedPost = await PostModel.deletePost(id);
            
            if (!deletedPost) {
                console.log(`❌ Post with ID ${id} not found`);
                return res.status(404).json({ error: 'Post not found' });
            }
            
            console.log(`✅ Post deleted: ${deletedPost.title}`);
            res.status(200).json({ 
                message: 'Post deleted successfully', 
                post: deletedPost 
            });
        } catch (error) {
            console.error('❌ Error deleting post:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }
}

module.exports = PostController;