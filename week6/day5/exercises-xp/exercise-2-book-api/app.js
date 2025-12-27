const express = require('express');
const app = express();

app.use(express.json());

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
  
  // Validate bookId is a positive integer
  if (isNaN(bookId) || bookId <= 0) {
    return res.status(400).json({ message: 'Invalid book ID' });
  }
  
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
  
  // Validate data types
  if (typeof title !== 'string' || typeof author !== 'string') {
    return res.status(400).json({ message: 'Title and author must be strings' });
  }
  
  if (typeof publishedYear !== 'number' || !Number.isInteger(publishedYear)) {
    return res.status(400).json({ message: 'PublishedYear must be an integer' });
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

// Update - PUT /api/books/:bookId
app.put('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const { title, author, publishedYear } = req.body;
  
  // Validate bookId is a positive integer
  if (isNaN(bookId) || bookId <= 0) {
    return res.status(400).json({ message: 'Invalid book ID' });
  }
  
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  // Validate and update title if provided
  if (title !== undefined) {
    if (typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ message: 'Title must be a non-empty string' });
    }
    books[bookIndex].title = title;
  }
  
  // Validate and update author if provided
  if (author !== undefined) {
    if (typeof author !== 'string' || author.trim() === '') {
      return res.status(400).json({ message: 'Author must be a non-empty string' });
    }
    books[bookIndex].author = author;
  }
  
  // Validate and update publishedYear if provided
  if (publishedYear !== undefined) {
    if (typeof publishedYear !== 'number' || !Number.isInteger(publishedYear)) {
      return res.status(400).json({ message: 'PublishedYear must be an integer' });
    }
    books[bookIndex].publishedYear = publishedYear;
  }
  
  // Return 200 OK (not 201) because we're updating, not creating
  res.status(200).json(books[bookIndex]);
});

// Delete - DELETE /api/books/:bookId
app.delete('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  
  // Validate bookId is a positive integer
  if (isNaN(bookId) || bookId <= 0) {
    return res.status(400).json({ message: 'Invalid book ID' });
  }
  
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  const deletedBook = books.splice(bookIndex, 1);
  res.status(200).json({ 
    message: 'Book deleted successfully', 
    book: deletedBook[0] 
  });
});

// Error handling middleware for invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// General error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ message: 'Internal server error' });
});

// Set up the server to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Book API server is running on http://localhost:${PORT}`);
});