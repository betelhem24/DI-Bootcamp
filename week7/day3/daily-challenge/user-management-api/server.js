const express = require('express');
const path = require('path');
const fs = require('fs');
const usersRouter = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Create data directory and users.json file if they don't exist
const dataDir = path.join(__dirname, 'data');
const usersFile = path.join(dataDir, 'users.json');

// Initialize data directory and file
try {
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
        console.log('✓ Created data directory');
    }
    
    if (!fs.existsSync(usersFile)) {
        fs.writeFileSync(usersFile, '[]', 'utf8');
        console.log('✓ Created users.json file');
    }
} catch (error) {
    console.error('Error initializing data directory:', error);
    process.exit(1);
}

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api', usersRouter);

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// 404 Error handler - must be after all routes
app.use((req, res) => {
    res.status(404).json({ 
        message: 'Route not found',
        requestedUrl: req.originalUrl 
    });
});

// Global error handler - must be last
app.use((err, req, res, next) => {
    console.error('Server Error:', err);
    
    // Don't expose internal error details in production
    const errorMessage = process.env.NODE_ENV === 'production' 
        ? 'Internal server error' 
        : err.message;
    
    res.status(err.status || 500).json({ 
        message: errorMessage,
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
    });
});

// Start server
app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('✓ Server is running successfully');
    console.log('='.repeat(50));
    console.log(`✓ Server URL: http://localhost:${PORT}`);
    console.log(`✓ Register page: http://localhost:${PORT}/register`);
    console.log(`✓ Login page: http://localhost:${PORT}/login`);
    console.log(`✓ API endpoint: http://localhost:${PORT}/api`);
    console.log('='.repeat(50));
});

module.exports = app;