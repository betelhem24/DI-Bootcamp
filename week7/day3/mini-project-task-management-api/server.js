const express = require('express');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/tasks', taskRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Task Management API',
    endpoints: {
      'GET /tasks': 'Get all tasks',
      'GET /tasks/:id': 'Get task by ID',
      'POST /tasks': 'Create a new task',
      'PUT /tasks/:id': 'Update task by ID',
      'DELETE /tasks/:id': 'Delete task by ID'
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!', message: err.message });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
  console.log(`📝 API Documentation: http://localhost:${PORT}`);
});