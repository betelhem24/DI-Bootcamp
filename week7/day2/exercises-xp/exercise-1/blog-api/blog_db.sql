CREATE DATABASE blog_db;

\c blog_db;

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (title, content) VALUES
('First Blog Post', 'This is the content of my first blog post.'),
('Learning Node.js', 'Express and REST APIs are powerful.'),
('PostgreSQL Basics', 'PostgreSQL is a relational database.');
