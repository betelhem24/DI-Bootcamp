const express = require('express');
const router = express.Router();
const { readTasks, writeTasks } = require('../utils/fileHandler');
const { validateTask } = require('../middleware/validation');

// GET /tasks - Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve tasks',
      message: error.message
    });
  }
});

// GET /tasks/:id - Get task by ID
router.get('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    
    if (!task) {
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }
    
    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to retrieve task',
      message: error.message
    });
  }
});

// POST /tasks - Create new task
router.post('/', validateTask, async (req, res) => {
  try {
    const tasks = await readTasks();
    
    // Create new task with auto-increment ID
    const newTask = {
      id: tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title: req.body.title,
      description: req.body.description || '',
      status: req.body.status || 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    tasks.push(newTask);
    await writeTasks(tasks);
    
    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: newTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to create task',
      message: error.message
    });
  }
});

// PUT /tasks/:id - Update task by ID
router.put('/:id', validateTask, async (req, res) => {
  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    
    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }
    
    // Update task
    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title: req.body.title,
      description: req.body.description || tasks[taskIndex].description,
      status: req.body.status || tasks[taskIndex].status,
      updatedAt: new Date().toISOString()
    };
    
    await writeTasks(tasks);
    
    res.json({
      success: true,
      message: 'Task updated successfully',
      data: tasks[taskIndex]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to update task',
      message: error.message
    });
  }
});

// DELETE /tasks/:id - Delete task by ID
router.delete('/:id', async (req, res) => {
  try {
    const tasks = await readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    
    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Task not found'
      });
    }
    
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    await writeTasks(tasks);
    
    res.json({
      success: true,
      message: 'Task deleted successfully',
      data: deletedTask
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to delete task',
      message: error.message
    });
  }
});

module.exports = router;