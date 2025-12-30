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

// API routes
app.use('/api', postRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        error: 'Internal server error'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

module.exports = app;
