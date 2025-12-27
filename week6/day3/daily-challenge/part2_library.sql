-- -- ===================================
-- -- PART II: Library Management System
-- -- ===================================

-- -- Drop tables if they exist (for clean runs)
-- DROP TABLE IF EXISTS library CASCADE;
-- DROP TABLE IF EXISTS student CASCADE;
-- DROP TABLE IF EXISTS book CASCADE;

-- -- 1. Create Book table
-- CREATE TABLE book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     author VARCHAR(100) NOT NULL
-- );

-- -- 2. Insert books
-- INSERT INTO book (title, author)
-- VALUES 
--     ('Alice In Wonderland', 'Lewis Carroll'),
--     ('Harry Potter', 'J.K Rowling'),
--     ('To kill a mockingbird', 'Harper Lee');

-- -- 3. Create Student table with age constraint
-- CREATE TABLE student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL UNIQUE,
--     age INTEGER CHECK (age <= 15)
-- );

-- -- 4. Insert students
-- INSERT INTO student (name, age)
-- VALUES 
--     ('John', 12),
--     ('Lera', 11),
--     ('Patrick', 10),
--     ('Bob', 14);

-- -- 5. Create Library junction table (Many-to-Many relationship)
-- CREATE TABLE library (
--     book_fk_id INTEGER,
--     student_fk_id INTEGER,
--     borrowed_date DATE,
--     PRIMARY KEY (book_fk_id, student_fk_id),
--     FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (student_fk_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
-- );

-- -- 6. Add records to junction table using subqueries

-- -- John borrowed Alice In Wonderland on 15/02/2022
-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM student WHERE name = 'John'),
--     '2022-02-15'
-- );

-- -- Bob borrowed To kill a mockingbird on 03/03/2021
-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
--     (SELECT student_id FROM student WHERE name = 'Bob'),
--     '2021-03-03'
-- );

-- -- Lera borrowed Alice In Wonderland on 23/05/2021
-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM student WHERE name = 'Lera'),
--     '2021-05-23'
-- );

-- -- Bob borrowed Harry Potter on 12/08/2021
-- INSERT INTO library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM book WHERE title = 'Harry Potter'),
--     (SELECT student_id FROM student WHERE name = 'Bob'),
--     '2021-08-12'
-- );

-- -- 7. Display the data

-- -- Query 1: Select all columns from the junction table
-- SELECT * FROM library;

-- -- Query 2: Select the name of the student and the title of the borrowed books
-- SELECT s.name, b.title, l.borrowed_date
-- FROM library l
-- INNER JOIN student s ON l.student_fk_id = s.student_id
-- INNER JOIN book b ON l.book_fk_id = b.book_id
-- ORDER BY s.name;

-- -- Query 3: Select the average age of children who borrowed Alice in Wonderland
-- SELECT AVG(s.age) as average_age
-- FROM library l
-- INNER JOIN student s ON l.student_fk_id = s.student_id
-- INNER JOIN book b ON l.book_fk_id = b.book_id
-- WHERE b.title = 'Alice In Wonderland';

-- -- Query 4: Demonstrate CASCADE DELETE
-- -- First, let's see what's in the library table
-- SELECT 'Before deletion:' as status;
-- SELECT * FROM library;

-- -- Delete a student (Bob)
-- DELETE FROM student WHERE name = 'Bob';

-- -- Check the junction table after deletion
-- SELECT 'After deleting Bob:' as status;
-- SELECT * FROM library;

-- -- What happened? Bob's records in the library table were automatically deleted
-- -- due to the ON DELETE CASCADE constraint!