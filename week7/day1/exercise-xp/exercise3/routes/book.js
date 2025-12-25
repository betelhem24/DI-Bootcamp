// routes/books.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
const books = [];
let nextId = 1;

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// Add a new book
router.post('/', (req, res) => {
  const { title, author, publishedYear } = req.body;
  
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }
  
  const newBook = {
    id: nextId++,
    title,
    author,
    publishedYear: publishedYear || null
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;
  
  const bookIndex = books.findIndex(book => book.id === parseInt(id));
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  if (title !== undefined) {
    books[bookIndex].title = title;
  }
  if (author !== undefined) {
    books[bookIndex].author = author;
  }
  if (publishedYear !== undefined) {
    books[bookIndex].publishedYear = publishedYear;
  }
  
  res.json(books[bookIndex]);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const bookIndex = books.findIndex(book => book.id === parseInt(id));
  
  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  
  const deletedBook = books.splice(bookIndex, 1);
  res.json({ message: 'Book deleted successfully', book: deletedBook[0] });
});

module.exports = router;