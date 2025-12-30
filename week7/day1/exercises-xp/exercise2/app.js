// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import the todos router
const todosRouter = require('./routes/todos');

// Mount the todos router
app.use('/todos', todosRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});