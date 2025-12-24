const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController');

// GET all posts
router.get('/posts', PostController.getAllPosts);

// GET post by ID
router.get('/posts/:id', PostController.getPostById);

// POST create new post
router.post('/posts', PostController.createPost);

// PUT update post
router.put('/posts/:id', PostController.updatePost);

// DELETE post
router.delete('/posts/:id', PostController.deletePost);

module.exports = router;