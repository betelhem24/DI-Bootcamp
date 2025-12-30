require('dotenv').config();
const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Root route
app.get('/', (req, res) => {
    res.json({ 
        message: 'Welcome to Blog API',
        endpoints: {
            'GET /api/posts': 'Get all posts',
            'GET /api/posts/:id': 'Get post by ID',
            'POST /api/posts': 'Create new post',
            'PUT /api/posts/:id': 'Update post',
            'DELETE /api/posts/:id': 'Delete post'
        }
    });
});

// API Routes
app.use('/api', postRoutes);

// 404 handler - must be after all other routes
app.use((req, res) => {
    res.status(404).json({ 
        error: 'Route not found',
        path: req.path,
        method: req.method
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('❌ Server Error:', err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📚 Blog API is ready to accept requests`);
});

module.exports = app;