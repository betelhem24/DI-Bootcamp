const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const todosRouter = require('./routes/todos');

app.use('/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});