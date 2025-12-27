const express = require('express');
const app = express();

app.use(express.json());

let books = [
  { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publishedYear: 1925 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 }
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);
  
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Title, author, and publishedYear are required' });
  }
  
  if (typeof title !== 'string' || typeof author !== 'string' || typeof publishedYear !== 'number') {
    return res.status(400).json({ message: 'Invalid data types' });
  }
  
  const newBook = {
    id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
    title,
    author,
    publishedYear
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});

app.put('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const { title, author, publishedYear } = req.body;
  
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({ message: 'Book not found' });
  }
  
  if (title !== undefined) books[bookIndex].title = title;
  if (author !== undefined) books[bookIndex].author = author;
  if (publishedYear !== undefined) books[bookIndex].publishedYear = publishedYear;
  
  res.status(200).json(books[bookIndex]);
});

app.delete('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
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

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Book API server is running on http://localhost:${PORT}`);
});