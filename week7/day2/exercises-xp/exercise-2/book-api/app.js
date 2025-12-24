const express = require('express');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', bookRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Book API' });
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