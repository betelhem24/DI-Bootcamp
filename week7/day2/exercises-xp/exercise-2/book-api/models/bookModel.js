const db = require('../config/db');

class BookModel {
    // Get all books with pagination support
    static async getAllBooks(limit = 100, offset = 0) {
        try {
            return await db('books')
                .select('*')
                .orderBy('id', 'asc')
                .limit(limit)
                .offset(offset);
        } catch (error) {
            throw new Error(`Error fetching books: ${error.message}`);
        }
    }

    // Get book by ID
    static async getBookById(id) {
        try {
            const book = await db('books').where({ id }).first();
            return book;
        } catch (error) {
            throw new Error(`Error fetching book: ${error.message}`);
        }
    }

    // Create new book
    static async createBook(title, author, publishedYear) {
        try {
            // Validate input
            if (!title || title.trim() === '') {
                throw new Error('Title is required and cannot be empty');
            }
            if (!author || author.trim() === '') {
                throw new Error('Author is required and cannot be empty');
            }
            if (!publishedYear || isNaN(publishedYear)) {
                throw new Error('Published year must be a valid number');
            }

            const year = parseInt(publishedYear);
            if (year < 0 || year > new Date().getFullYear() + 1) {
                throw new Error('Published year is invalid');
            }

            // Sanitize input
            const sanitizedTitle = title.trim().substring(0, 255);
            const sanitizedAuthor = author.trim().substring(0, 255);

            const [newBook] = await db('books')
                .insert({ 
                    title: sanitizedTitle, 
                    author: sanitizedAuthor, 
                    publishedyear: year 
                })
                .returning('*');
            
            return newBook;
        } catch (error) {
            throw new Error(`Error creating book: ${error.message}`);
        }
    }

    // Update book
    static async updateBook(id, title, author, publishedYear) {
        try {
            // Validate input
            if (!title || title.trim() === '') {
                throw new Error('Title is required and cannot be empty');
            }
            if (!author || author.trim() === '') {
                throw new Error('Author is required and cannot be empty');
            }
            if (!publishedYear || isNaN(publishedYear)) {
                throw new Error('Published year must be a valid number');
            }

            const year = parseInt(publishedYear);
            if (year < 0 || year > new Date().getFullYear() + 1) {
                throw new Error('Published year is invalid');
            }

            // Sanitize input
            const sanitizedTitle = title.trim().substring(0, 255);
            const sanitizedAuthor = author.trim().substring(0, 255);

            const [updatedBook] = await db('books')
                .where({ id })
                .update({ 
                    title: sanitizedTitle, 
                    author: sanitizedAuthor, 
                    publishedyear: year 
                })
                .returning('*');
            
            return updatedBook;
        } catch (error) {
            throw new Error(`Error updating book: ${error.message}`);
        }
    }

    // Delete book
    static async deleteBook(id) {
        try {
            const [deletedBook] = await db('books')
                .where({ id })
                .delete()
                .returning('*');
            
            return deletedBook;
        } catch (error) {
            throw new Error(`Error deleting book: ${error.message}`);
        }
    }
}

module.exports = BookModel;