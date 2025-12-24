const pool = require('../config/db');

class BookModel {
    // Get all books
    static async getAllBooks() {
        const result = await pool.query('SELECT * FROM books ORDER BY id');
        return result.rows;
    }

    // Get book by ID
    static async getBookById(id) {
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
        return result.rows[0];
    }

    // Create new book
    static async createBook(title, author, publishedYear) {
        const result = await pool.query(
            'INSERT INTO books (title, author, publishedyear) VALUES ($1, $2, $3) RETURNING *',
            [title, author, publishedYear]
        );
        return result.rows[0];
    }

    // Update book
    static async updateBook(id, title, author, publishedYear) {
        const result = await pool.query(
            'UPDATE books SET title = $1, author = $2, publishedyear = $3 WHERE id = $4 RETURNING *',
            [title, author, publishedYear, id]
        );
        return result.rows[0];
    }

    // Delete book
    static async deleteBook(id) {
        const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = BookModel;