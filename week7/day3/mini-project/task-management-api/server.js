/**
 * TASK MANAGEMENT API - Main Server File
 * 
 * This Express.js application implements a complete RESTful API for task management
 * with JSON file storage.
 * 
 * Features:
 * - GET /tasks - Retrieve all tasks
 * - GET /tasks/:id - Retrieve specific task by ID
 * - POST /tasks - Create new task
 * - PUT /tasks/:id - Update existing task
 * - DELETE /tasks/:id - Delete task
 * 
 * All task data is stored in data/tasks.json file
 */

const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies - Required for POST and PUT requests
app.use(express.json());

// Mount task routes at /tasks endpoint
// This includes all CRUD operations: GET, POST, PUT, DELETE
app.use('/tasks', taskRoutes);

// Root route - API documentation endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Task Management API',
    version: '1.0.0',
    description: 'RESTful API for managing tasks with JSON file storage',
    endpoints: {
      'GET /tasks': 'Retrieve all tasks from JSON file',
      'GET /tasks/:id': 'Retrieve a specific task by ID from JSON file',
      'POST /tasks': 'Create a new task and store in JSON file',
      'PUT /tasks/:id': 'Update an existing task by ID in JSON file',
      'DELETE /tasks/:id': 'Delete a task by ID from JSON file'
    },
    features: [
      'Complete CRUD operations',
      'JSON file-based storage (data/tasks.json)',
      'Input validation middleware',
      'Comprehensive error handling',
      'UUID-based unique identifiers',
      'Automatic timestamps (createdAt, updatedAt)'
    ]
  });
});

// 404 handler - Catches all undefined routes
app.use((req, res) => {
  res.status(404).json({ 
    success: false,
    error: 'Route not found',
    message: `Cannot ${req.method} ${req.path}`,
    availableEndpoints: {
      'GET /tasks': 'Get all tasks',
      'GET /tasks/:id': 'Get task by ID',
      'POST /tasks': 'Create task',
      'PUT /tasks/:id': 'Update task',
      'DELETE /tasks/:id': 'Delete task'
    }
  });
});

// Global error handler - Catches all errors from routes and middleware
app.use((err, req, res, next) => {
  console.error('Error occurred:', err.stack);
  res.status(err.status || 500).json({ 
    success: false,
    error: 'Internal server error',
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Start server
app.listen(PORT, () => {
  console.log('='.repeat(50));
  console.log('✅ Task Management API Server Started');
  console.log('='.repeat(50));
  console.log(`🌐 Server running on: http://localhost:${PORT}`);
  console.log(`📝 API Documentation: http://localhost:${PORT}`);
  console.log(`📁 Data storage: data/tasks.json`);
  console.log('='.repeat(50));
  console.log('Available Routes:');
  console.log('  GET    /tasks      - Get all tasks');
  console.log('  GET    /tasks/:id  - Get task by ID');
  console.log('  POST   /tasks      - Create new task');
  console.log('  PUT    /tasks/:id  - Update task');
  console.log('  DELETE /tasks/:id  - Delete task');
  console.log('='.repeat(50));
});

module.exports = app;