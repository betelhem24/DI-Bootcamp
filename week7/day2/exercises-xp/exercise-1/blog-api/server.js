const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', postRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Blog API' });
});

// 404 handler - must be after all other routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});