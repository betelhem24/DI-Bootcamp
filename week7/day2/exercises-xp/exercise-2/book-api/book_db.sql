CREATE DATABASE book_db;
\c book_db;

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    publishedyear INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO books (title, author, publishedyear) VALUES
('To Kill a Mockingbird', 'Harper Lee', 1960),
('1984', 'George Orwell', 1949),
('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
('Pride and Prejudice', 'Jane Austen', 1813),
('The Catcher in the Rye', 'J.D. Salinger', 1951);
