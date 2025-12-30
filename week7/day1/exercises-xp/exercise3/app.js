const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});