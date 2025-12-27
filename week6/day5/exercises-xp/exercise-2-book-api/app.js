// Exercise 2: Book API - app.js

const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic data array containing book objects
let books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 }
];

// Read all - GET /api/books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// Read - GET /api/books/:bookId
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// Create - POST /api/books
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  
  // Validate required fields
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Title, author, and publishedYear are required' });
  }
  
  // Create new book with incremented ID
  const newBook = {
    id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
    title,
    author,
    publishedYear
  };
  
  // Add to books array
  books.push(newBook);
  
  // Return the new book with 201 status
  res.status(201).json(newBook);
});

// Set up the server to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Book API server is running on http://localhost:${PORT}`);
});