-- -- Exercise 2: dvdrental Database
-- -- Make sure you've imported the dvdrental.tar file first!

-- -- Question 1: Select all columns from the "customer" table
-- SELECT * 
-- FROM customer;

-- -- Question 2: Display names (first_name, last_name) using alias "full_name"
-- SELECT first_name || ' ' || last_name AS full_name 
-- FROM customer;

-- -- Question 3: Get all create_date from customer table (no duplicates)
-- SELECT DISTINCT create_date 
-- FROM customer;

-- -- Question 4: Get all customer details in descending order by first name
-- SELECT * 
-- FROM customer 
-- ORDER BY first_name DESC;

-- -- Question 5: Get film ID, title, description, year of release and rental rate in ascending order by rental rate
-- SELECT film_id, title, description, release_year, rental_rate 
-- FROM film 
-- ORDER BY rental_rate ASC;

-- -- Question 6: Get address and phone number of all customers living in Texas district
-- SELECT address, phone 
-- FROM address 
-- WHERE district = 'Texas';

-- -- Question 7: Retrieve all movie details where movie id is either 15 or 150
-- SELECT * 
-- FROM film 
-- WHERE film_id IN (15, 150);

-- -- Question 8: Check if your favorite movie exists (replace 'The Matrix' with your favorite movie)
-- SELECT film_id, title, description, length, rental_rate 
-- FROM film 
-- WHERE title = 'The Matrix';

-- -- Question 9: Get movies starting with the first two letters of your favorite movie (example: 'Th')
-- SELECT film_id, title, description, length, rental_rate 
-- FROM film 
-- WHERE title LIKE 'Th%';

-- -- Question 10: Find the 10 cheapest movies
-- SELECT * 
-- FROM film 
-- ORDER BY rental_rate ASC 
-- LIMIT 10;

-- -- Question 11: Find the next 10 cheapest movies
-- SELECT * 
-- FROM film 
-- ORDER BY rental_rate ASC 
-- LIMIT 10 OFFSET 10;

-- -- Question 11 Bonus: Without using LIMIT
-- SELECT * 
-- FROM film 
-- WHERE rental_rate > (
--     SELECT DISTINCT rental_rate 
--     FROM film 
--     ORDER BY rental_rate ASC 
--     LIMIT 1 OFFSET 9
-- )
-- ORDER BY rental_rate ASC 
-- FETCH FIRST 10 ROWS ONLY;

-- -- Question 12: Join customer and payment tables
-- SELECT c.first_name, c.last_name, p.amount, p.payment_date 
-- FROM customer c 
-- INNER JOIN payment p ON c.customer_id = p.customer_id 
-- ORDER BY c.customer_id;

-- -- Question 13: Get all movies not in inventory
-- SELECT f.film_id, f.title 
-- FROM film f 
-- LEFT JOIN inventory i ON f.film_id = i.film_id 
-- WHERE i.film_id IS NULL;

-- -- Question 14: Find which city is in which country
-- SELECT ci.city, co.country 
-- FROM city ci 
-- INNER JOIN country co ON ci.country_id = co.country_id;

-- -- Question 15 Bonus: Get customer details with payment info ordered by staff id
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id 
FROM customer c 
INNER JOIN payment p ON c.customer_id = p.customer_id 
ORDER BY p.staff_id;