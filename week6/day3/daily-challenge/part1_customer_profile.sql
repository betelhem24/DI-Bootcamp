-- -- ===================================
-- -- PART I: Customer and Customer Profile
-- -- ===================================

-- -- Drop tables if they exist (for clean runs)
-- DROP TABLE IF EXISTS customer_profile CASCADE;
-- DROP TABLE IF EXISTS customer CASCADE;

-- -- 1. Create Customer table
-- CREATE TABLE customer (
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL
-- );

-- -- Create Customer Profile table (One-to-One relationship)
-- CREATE TABLE customer_profile (
--     id SERIAL PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT false,
--     customer_id INTEGER UNIQUE NOT NULL,
--     FOREIGN KEY (customer_id) REFERENCES customer(id) ON DELETE CASCADE
-- );

-- -- 2. Insert customers
-- INSERT INTO customer (first_name, last_name) 
-- VALUES 
--     ('John', 'Doe'),
--     ('Jerome', 'Lalu'),
--     ('Lea', 'Rive');

-- -- 3. Insert customer profiles using subqueries
-- -- John is logged in
-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES (
--     true, 
--     (SELECT id FROM customer WHERE first_name = 'John' AND last_name = 'Doe')
-- );

-- -- Jerome is not logged in
-- INSERT INTO customer_profile (isLoggedIn, customer_id)
-- VALUES (
--     false, 
--     (SELECT id FROM customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
-- );

-- -- 4. Display data using different types of JOINs

-- -- Query 1: The first_name of the LoggedIn customers
-- SELECT c.first_name
-- FROM customer c
-- INNER JOIN customer_profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = true;

-- -- Query 2: All customers first_name and isLoggedIn columns 
-- -- (even customers who don't have a profile)
-- SELECT c.first_name, cp.isLoggedIn
-- FROM customer c
-- LEFT JOIN customer_profile cp ON c.id = cp.customer_id;

-- -- Query 3: The number of customers that are not LoggedIn
-- SELECT COUNT(*) as not_logged_in_count
-- FROM customer c
-- LEFT JOIN customer_profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;