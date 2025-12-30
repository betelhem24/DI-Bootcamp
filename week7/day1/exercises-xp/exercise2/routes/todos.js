const express = require('express');
const router = express.Router();

const todos = [];
let nextId = 1;

router.get('/', (req, res) => {
  res.json(todos);
});

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

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  
  const deletedTodo = todos.splice(todoIndex, 1);
  res.json({ message: 'To-do item deleted successfully', todo: deletedTodo[0] });
});

module.exports = router;