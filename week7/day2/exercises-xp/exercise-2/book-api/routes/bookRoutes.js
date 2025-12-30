const express = require('express');
const router = express.Router();
const BookController = require('../controllers/bookController');

// Routes for books
router.get('/books', BookController.getAllBooks);
router.get('/books/:bookId', BookController.getBookById);
router.post('/books', BookController.createBook);
router.put('/books/:bookId', BookController.updateBook);
router.delete('/books/:bookId', BookController.deleteBook);

module.exports = router;