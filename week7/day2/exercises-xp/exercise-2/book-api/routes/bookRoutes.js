const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

// GET all books
router.get('/books', BookController.getAllBooks);

// GET book by ID
router.get('/books/:bookId', BookController.getBookById);

// POST create new book
router.post('/books', BookController.createBook);

// PUT update book
router.put('/books/:bookId', BookController.updateBook);

// DELETE book
router.delete('/books/:bookId', BookController.deleteBook);

module.exports = router;