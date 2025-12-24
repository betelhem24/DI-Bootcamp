/**
 * TASK ROUTES - Complete CRUD Implementation
 * 
 * This file implements all required routes for the Task Management API:
 * - GET /tasks - Retrieve all tasks from JSON file
 * - GET /tasks/:id - Retrieve specific task by ID from JSON file
 * - POST /tasks - Create new task and store in JSON file
 * - PUT /tasks/:id - Update task by ID in JSON file
 * - DELETE /tasks/:id - Delete task by ID from JSON file
 * 
 * All operations include:
 * - Error handling for file read/write operations
 * - Input validation
 * - Proper HTTP status codes
 * - Consistent JSON responses
 */

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { readTasks, writeTasks } = require('../utils/fileHandler');
const { validateTask } = require('../middleware/validation');

// Helper function for consistent success responses
const sendSuccess = (res, statusCode, message, data = null) => {
  const response = {
    success: true,
    message
  };
  
  if (data !== null) {
    response.data = data;
    if (Array.isArray(data)) {
      response.count = data.length;
    }
  }
  
  res.status(statusCode).json(response);
};

// Helper function for consistent error responses
const sendError = (res, statusCode, error, message) => {
  res.status(statusCode).json({
    success: false,
    error,
    message
  });
};

/**
 * GET /tasks
 * Retrieve all tasks from the JSON file
 * 
 * Response: 200 OK with array of tasks
 * Error: 500 Internal Server Error if file read fails
 */
router.get('/', async (req, res) => {
  try {
    console.log('📖 Reading all tasks from JSON file...');
    const tasks = await readTasks();
    console.log(`✅ Successfully retrieved ${tasks.length} tasks`);
    
    sendSuccess(res, 200, 'Tasks retrieved successfully', tasks);
  } catch (error) {
    console.error('❌ Error retrieving tasks:', error.message);
    sendError(res, 500, 'Failed to retrieve tasks', error.message);
  }
});

/**
 * GET /tasks/:id
 * Retrieve a specific task by ID from the JSON file
 * 
 * Params: id - Task identifier (UUID)
 * Response: 200 OK with task object
 * Error: 404 Not Found if task doesn't exist
 * Error: 500 Internal Server Error if file read fails
 */
router.get('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log(`📖 Reading task with ID: ${taskId}...`);
    
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === taskId);
    
    if (!task) {
      console.log(`❌ Task not found: ${taskId}`);
      return sendError(res, 404, 'Task not found', `No task exists with ID: ${taskId}`);
    }
    
    console.log(`✅ Task found: ${task.title}`);
    sendSuccess(res, 200, 'Task retrieved successfully', task);
  } catch (error) {
    console.error('❌ Error retrieving task:', error.message);
    sendError(res, 500, 'Failed to retrieve task', error.message);
  }
});

/**
 * POST /tasks
 * Create a new task and store it in the JSON file
 * 
 * Body: { title, description?, status? }
 * Validation: title is required and validated by middleware
 * Response: 201 Created with new task object
 * Error: 400 Bad Request if validation fails
 * Error: 500 Internal Server Error if file write fails
 */
router.post('/', validateTask, async (req, res) => {
  try {
    console.log('📝 Creating new task...');
    const tasks = await readTasks();
    
    // Create new task with UUID and timestamps
    const newTask = {
      id: uuidv4(), // Generate unique UUID instead of auto-increment
      title: req.body.title.trim(),
      description: req.body.description ? req.body.description.trim() : '',
      status: req.body.status || 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    await writeTasks(tasks);
    
    console.log(`✅ Task created successfully: ${newTask.title} (ID: ${newTask.id})`);
    sendSuccess(res, 201, 'Task created successfully', newTask);
  } catch (error) {
    console.error('❌ Error creating task:', error.message);
    sendError(res, 500, 'Failed to create task', error.message);
  }
});

/**
 * PUT /tasks/:id
 * Update an existing task by ID in the JSON file
 * 
 * Params: id - Task identifier (UUID)
 * Body: { title, description?, status? }
 * Validation: title is required and validated by middleware
 * Response: 200 OK with updated task object
 * Error: 404 Not Found if task doesn't exist
 * Error: 400 Bad Request if validation fails
 * Error: 500 Internal Server Error if file write fails
 */
router.put('/:id', validateTask, async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log(`📝 Updating task with ID: ${taskId}...`);
    
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
      console.log(`❌ Task not found: ${taskId}`);
      return sendError(res, 404, 'Task not found', `No task exists with ID: ${taskId}`);
    }
    
    // Update task while preserving original ID and createdAt
    tasks[taskIndex] = {
      id: tasks[taskIndex].id, // Keep original ID
      title: req.body.title.trim(),
      description: req.body.description ? req.body.description.trim() : tasks[taskIndex].description,
      status: req.body.status || tasks[taskIndex].status,
      createdAt: tasks[taskIndex].createdAt, // Keep original creation time
      updatedAt: new Date().toISOString() // Update modification time
    };
    
    await writeTasks(tasks);
    
    console.log(`✅ Task updated successfully: ${tasks[taskIndex].title}`);
    sendSuccess(res, 200, 'Task updated successfully', tasks[taskIndex]);
  } catch (error) {
    console.error('❌ Error updating task:', error.message);
    sendError(res, 500, 'Failed to update task', error.message);
  }
});

/**
 * DELETE /tasks/:id
 * Delete a task by ID from the JSON file
 * 
 * Params: id - Task identifier (UUID)
 * Response: 200 OK with deleted task object
 * Error: 404 Not Found if task doesn't exist
 * Error: 500 Internal Server Error if file write fails
 */
router.delete('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;
    console.log(`🗑️  Deleting task with ID: ${taskId}...`);
    
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) {
      console.log(`❌ Task not found: ${taskId}`);
      return sendError(res, 404, 'Task not found', `No task exists with ID: ${taskId}`);
    }
    
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    await writeTasks(tasks);
    
    console.log(`✅ Task deleted successfully: ${deletedTask.title}`);
    sendSuccess(res, 200, 'Task deleted successfully', deletedTask);
  } catch (error) {
    console.error('❌ Error deleting task:', error.message);
    sendError(res, 500, 'Failed to delete task', error.message);
  }
});

module.exports = router;