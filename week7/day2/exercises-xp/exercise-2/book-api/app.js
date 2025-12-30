require('dotenv').config();
const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

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
        message: 'Welcome to Book API',
        endpoints: {
            'GET /api/books': 'Get all books',
            'GET /api/books/:bookId': 'Get book by ID',
            'POST /api/books': 'Create new book',
            'PUT /api/books/:bookId': 'Update book',
            'DELETE /api/books/:bookId': 'Delete book'
        }
    });
});

// API Routes
app.use('/api', bookRoutes);

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
    console.log(`📚 Book API is ready to accept requests`);
});

module.exports = app;