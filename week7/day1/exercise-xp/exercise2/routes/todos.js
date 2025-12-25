// routes/todos.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];
let nextId = 1;

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { title, completed } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const newTodo = {
    id: nextId++,
    title,
    completed: completed || false
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  
  if (title !== undefined) {
    todos[todoIndex].title = title;
  }
  if (completed !== undefined) {
    todos[todoIndex].completed = completed;
  }
  
  res.json(todos[todoIndex]);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  
  const deletedTodo = todos.splice(todoIndex, 1);
  res.json({ message: 'To-do item deleted', todo: deletedTodo[0] });
});

module.exports = router;