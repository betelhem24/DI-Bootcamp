-- Create database
CREATE DATABASE blog_db;

-- Connect to database
\c blog_db;

-- Create posts table
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO posts (title, content) VALUES
('First Blog Post', 'This is the content of my first blog post about technology.'),
('Learning Node.js', 'Today I learned about Express.js and RESTful APIs.'),
('Database Tutorial', 'PostgreSQL is a powerful relational database system.');