-- -- Exercise 1: Items and Customers
-- -- Database: public (created yesterday)

-- -- Question 1: All items, ordered by price (lowest to highest)
-- SELECT * 
-- FROM items 
-- ORDER BY price ASC;

-- -- Question 2: Items with a price above 80 (80 included), ordered by price (highest to lowest)
-- SELECT * 
-- FROM items 
-- WHERE price >= 80 
-- ORDER BY price DESC;

-- -- Question 3: The first 3 customers in alphabetical order of first name (A-Z) – exclude the primary key column
-- SELECT firstName, lastName
-- FROM customers
-- ORDER BY firstName ASC
-- LIMIT 3;


-- -- Question 4: All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT lastname
-- FROM customers
-- ORDER BY lastname DESC;

