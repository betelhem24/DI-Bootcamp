const BookModel = require('../models/bookModel');

class BookController {
    static async getAllBooks(req, res) {
        try {
            const limit = parseInt(req.query.limit) || 100;
            const offset = parseInt(req.query.offset) || 0;
            const books = await BookModel.getAllBooks(limit, offset);
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error.message });
        }
    }

    static async getBookById(req, res) {
        try {
            const { bookId } = req.params;
            if (!bookId || isNaN(bookId)) return res.status(400).json({ error: 'Invalid book ID' });

            const book = await BookModel.getBookById(bookId);
            if (!book) return res.status(404).json({ error: 'Book not found' });

            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error.message });
        }
    }

    static async createBook(req, res) {
        try {
            const { title, author, publishedYear } = req.body;
            if (!title || !author || !publishedYear) 
                return res.status(400).json({ error: 'Title, author, and publishedYear are required' });

            const newBook = await BookModel.createBook(title, author, publishedYear);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error.message });
        }
    }

    static async updateBook(req, res) {
        try {
            const { bookId } = req.params;
            const { title, author, publishedYear } = req.body;

            if (!bookId || isNaN(bookId)) return res.status(400).json({ error: 'Invalid book ID' });
            if (!title || !author || !publishedYear) 
                return res.status(400).json({ error: 'Title, author, and publishedYear are required' });

            const updatedBook = await BookModel.updateBook(bookId, title, author, publishedYear);
            if (!updatedBook) return res.status(404).json({ error: 'Book not found' });

            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error.message });
        }
    }

    static async deleteBook(req, res) {
        try {
            const { bookId } = req.params;
            if (!bookId || isNaN(bookId)) return res.status(400).json({ error: 'Invalid book ID' });

            const deletedBook = await BookModel.deleteBook(bookId);
            if (!deletedBook) return res.status(404).json({ error: 'Book not found' });

            res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error', message: error.message });
        }
    }
}

module.exports = BookController;
