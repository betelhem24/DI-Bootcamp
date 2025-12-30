const BookModel = require('../models/bookModel');

class BookController {
    // Get all books
    static async getAllBooks(req, res) {
        try {
            // Pagination support
            const limit = parseInt(req.query.limit) || 100;
            const offset = parseInt(req.query.offset) || 0;

            console.log(`📚 Fetching books (limit: ${limit}, offset: ${offset})...`);
            const books = await BookModel.getAllBooks(limit, offset);
            console.log(`✅ Retrieved ${books.length} books`);
            
            res.status(200).json(books);
        } catch (error) {
            console.error('❌ Error fetching books:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }

    // Get book by ID
    static async getBookById(req, res) {
        try {
            const { bookId } = req.params;
            
            // Validate ID
            if (!bookId || isNaN(bookId)) {
                return res.status(400).json({ error: 'Invalid book ID' });
            }

            console.log(`📖 Fetching book with ID: ${bookId}`);
            const book = await BookModel.getBookById(bookId);
            
            if (!book) {
                console.log(`❌ Book with ID ${bookId} not found`);
                return res.status(404).json({ error: 'Book not found' });
            }
            
            console.log(`✅ Retrieved book: ${book.title}`);
            res.status(200).json(book);
        } catch (error) {
            console.error('❌ Error fetching book:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }

    // Create new book
    static async createBook(req, res) {
        try {
            const { title, author, publishedYear } = req.body;
            
            // Validate required fields
            if (!title || !author || !publishedYear) {
                return res.status(400).json({ 
                    error: 'Title, author, and publishedYear are required' 
                });
            }

            // Additional validation
            if (title.trim() === '' || author.trim() === '') {
                return res.status(400).json({ 
                    error: 'Title and author cannot be empty' 
                });
            }

            if (isNaN(publishedYear)) {
                return res.status(400).json({ 
                    error: 'publishedYear must be a valid number' 
                });
            }

            console.log(`📝 Creating new book: ${title}`);
            const newBook = await BookModel.createBook(title, author, publishedYear);
            console.log(`✅ Book created with ID: ${newBook.id}`);
            
            res.status(201).json(newBook);
        } catch (error) {
            console.error('❌ Error creating book:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }

    // Update book
    static async updateBook(req, res) {
        try {
            const { bookId } = req.params;
            const { title, author, publishedYear } = req.body;
            
            // Validate ID
            if (!bookId || isNaN(bookId)) {
                return res.status(400).json({ error: 'Invalid book ID' });
            }

            // Validate required fields
            if (!title || !author || !publishedYear) {
                return res.status(400).json({ 
                    error: 'Title, author, and publishedYear are required' 
                });
            }

            // Additional validation
            if (title.trim() === '' || author.trim() === '') {
                return res.status(400).json({ 
                    error: 'Title and author cannot be empty' 
                });
            }

            if (isNaN(publishedYear)) {
                return res.status(400).json({ 
                    error: 'publishedYear must be a valid number' 
                });
            }

            console.log(`✏️ Updating book with ID: ${bookId}`);
            const updatedBook = await BookModel.updateBook(bookId, title, author, publishedYear);
            
            if (!updatedBook) {
                console.log(`❌ Book with ID ${bookId} not found`);
                return res.status(404).json({ error: 'Book not found' });
            }
            
            console.log(`✅ Book updated: ${updatedBook.title}`);
            res.status(200).json(updatedBook);
        } catch (error) {
            console.error('❌ Error updating book:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }

    // Delete book
    static async deleteBook(req, res) {
        try {
            const { bookId } = req.params;
            
            // Validate ID
            if (!bookId || isNaN(bookId)) {
                return res.status(400).json({ error: 'Invalid book ID' });
            }

            console.log(`🗑️ Deleting book with ID: ${bookId}`);
            const deletedBook = await BookModel.deleteBook(bookId);
            
            if (!deletedBook) {
                console.log(`❌ Book with ID ${bookId} not found`);
                return res.status(404).json({ error: 'Book not found' });
            }
            
            console.log(`✅ Book deleted: ${deletedBook.title}`);
            res.status(200).json({ 
                message: 'Book deleted successfully', 
                book: deletedBook 
            });
        } catch (error) {
            console.error('❌ Error deleting book:', error.message);
            res.status(500).json({ 
                error: 'Internal server error', 
                message: error.message 
            });
        }
    }
}

module.exports = BookController;