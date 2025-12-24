const BookModel = require('../models/bookModel');

class BookController {
    // Get all books
    static async getAllBooks(req, res) {
        try {
            const books = await BookModel.getAllBooks();
            res.status(200).json(books);
        } catch (error) {
            console.error('Error fetching books:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Get book by ID
    static async getBookById(req, res) {
        try {
            const { bookId } = req.params;
            const book = await BookModel.getBookById(bookId);
            
            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }
            
            res.status(200).json(book);
        } catch (error) {
            console.error('Error fetching book:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Create new book
    static async createBook(req, res) {
        try {
            const { title, author, publishedYear } = req.body;
            
            if (!title || !author || !publishedYear) {
                return res.status(400).json({ 
                    error: 'Title, author, and publishedYear are required' 
                });
            }
            
            const newBook = await BookModel.createBook(title, author, publishedYear);
            res.status(201).json(newBook);
        } catch (error) {
            console.error('Error creating book:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Update book
    static async updateBook(req, res) {
        try {
            const { bookId } = req.params;
            const { title, author, publishedYear } = req.body;
            
            if (!title || !author || !publishedYear) {
                return res.status(400).json({ 
                    error: 'Title, author, and publishedYear are required' 
                });
            }
            
            const updatedBook = await BookModel.updateBook(bookId, title, author, publishedYear);
            
            if (!updatedBook) {
                return res.status(404).json({ error: 'Book not found' });
            }
            
            res.status(200).json(updatedBook);
        } catch (error) {
            console.error('Error updating book:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Delete book
    static async deleteBook(req, res) {
        try {
            const { bookId } = req.params;
            const deletedBook = await BookModel.deleteBook(bookId);
            
            if (!deletedBook) {
                return res.status(404).json({ error: 'Book not found' });
            }
            
            res.status(200).json({ 
                message: 'Book deleted successfully', 
                book: deletedBook 
            });
        } catch (error) {
            console.error('Error deleting book:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = BookController;