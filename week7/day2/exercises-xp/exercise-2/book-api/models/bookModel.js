const db = require('../config/db');

class BookModel {
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

    static async getBookById(id) {
        try {
            return await db('books').where({ id }).first();
        } catch (error) {
            throw new Error(`Error fetching book: ${error.message}`);
        }
    }

    static async createBook(title, author, publishedYear) {
        try {
            const sanitizedTitle = title.trim().substring(0, 255);
            const sanitizedAuthor = author.trim().substring(0, 255);
            const year = parseInt(publishedYear);

            const [newBook] = await db('books')
                .insert({ title: sanitizedTitle, author: sanitizedAuthor, publishedyear: year })
                .returning('*');

            return newBook;
        } catch (error) {
            throw new Error(`Error creating book: ${error.message}`);
        }
    }

    static async updateBook(id, title, author, publishedYear) {
        try {
            const sanitizedTitle = title.trim().substring(0, 255);
            const sanitizedAuthor = author.trim().substring(0, 255);
            const year = parseInt(publishedYear);

            const [updatedBook] = await db('books')
                .where({ id })
                .update({ title: sanitizedTitle, author: sanitizedAuthor, publishedyear: year })
                .returning('*');

            return updatedBook;
        } catch (error) {
            throw new Error(`Error updating book: ${error.message}`);
        }
    }

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
