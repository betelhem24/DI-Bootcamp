const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`📥 ${new Date().toISOString()}`);
  console.log(`${req.method} ${req.path}`);
  console.log(`Body:`, req.body);
  console.log('='.repeat(50));
  next();
});

// Routes
app.use('/', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ 
    message: 'User Management API is running!',
    version: '1.0.0',
    endpoints: {
      register: 'POST /register',
      login: 'POST /login',
      getAllUsers: 'GET /users',
      getUserById: 'GET /users/:id',
      updateUser: 'PUT /users/:id'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// ENHANCED Global error handling middleware - SHOWS ALL ERRORS
app.use((err, req, res, next) => {
  console.error('\n❌ ERROR CAUGHT:');
  console.error('Message:', err.message);
  console.error('Stack:', err.stack);
  console.error('Full Error:', err);
  
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    stack: err.stack, // SHOWS FULL ERROR STACK
    details: err
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`🌐 API available at http://localhost:${PORT}`);
  console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('='.repeat(50));
  
  // Test database connection
  const db = require('./config/db');
  db.raw('SELECT 1')
    .then(() => {
      console.log('✅ Database connection successful');
    })
    .catch(err => {
      console.error('❌ Database connection failed:', err.message);
    });
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down gracefully...');
  process.exit(0);
});