-- -- Exercise 2: DVD Rental

-- -- Question 1: Use UPDATE to change the language of some films
-- -- First, let's see what languages are available
-- SELECT * FROM language;

-- -- Update some films to different languages (using valid language_id)
-- UPDATE film
-- SET language_id = 2
-- WHERE film_id IN (1, 2, 3);

-- UPDATE film
-- SET language_id = 3
-- WHERE film_id IN (4, 5);

-- -- Verify the changes
-- SELECT film_id, title, language_id FROM film WHERE film_id IN (1, 2, 3, 4, 5);

-- -- Question 2: Which foreign keys are defined for the customer table?
-- -- Check the foreign key constraints
-- SELECT
--     tc.constraint_name,
--     tc.table_name,
--     kcu.column_name,
--     ccu.table_name AS foreign_table_name,
--     ccu.column_name AS foreign_column_name
-- FROM information_schema.table_constraints AS tc
-- JOIN information_schema.key_column_usage AS kcu
--     ON tc.constraint_name = kcu.constraint_name
-- JOIN information_schema.constraint_column_usage AS ccu
--     ON ccu.constraint_name = tc.constraint_name
-- WHERE tc.table_name = 'customer' AND tc.constraint_type = 'FOREIGN KEY';

-- -- How this affects INSERT:
-- -- When inserting into customer table, we must ensure:
-- -- 1. address_id exists in the address table
-- -- 2. store_id exists in the store table
-- -- Example of a valid INSERT:
-- INSERT INTO customer (store_id, first_name, last_name, email, address_id, create_date)
-- VALUES (1, 'John', 'Doe', 'john.doe@example.com', 1, CURRENT_DATE);

-- -- Question 3: Drop the customer_review table
-- -- First check if the table exists and has dependencies
-- SELECT 
--     tc.constraint_name,
--     tc.table_name,
--     kcu.column_name,
--     ccu.table_name AS foreign_table_name
-- FROM information_schema.table_constraints AS tc
-- JOIN information_schema.key_column_usage AS kcu
--     ON tc.constraint_name = kcu.constraint_name
-- JOIN information_schema.constraint_column_usage AS ccu
--     ON ccu.constraint_name = tc.constraint_name
-- WHERE ccu.table_name = 'customer_review';

-- -- Drop the table (it's relatively easy since no other tables reference it)
-- DROP TABLE IF EXISTS customer_review;

-- -- Question 4: Find how many rentals are still outstanding
-- SELECT COUNT(*) AS outstanding_rentals
-- FROM rental
-- WHERE return_date IS NULL;

-- -- Question 5: Find the 30 most expensive movies which are outstanding
-- SELECT 
--     film.title,
--     film.replacement_cost,
--     rental.rental_id,
--     rental.rental_date
-- FROM rental
-- INNER JOIN inventory ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN film ON inventory.film_id = film.film_id
-- WHERE rental.return_date IS NULL
-- ORDER BY film.replacement_cost DESC
-- LIMIT 30;

-- -- Question 6: Help your friend find the 4 movies he wants to rent

-- -- Film 1: About a sumo wrestler, with actor Penelope Monroe
-- SELECT 
--     film.title,
--     film.description
-- FROM film
-- INNER JOIN film_actor ON film.film_id = film_actor.film_id
-- INNER JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE 
--     (film.description ILIKE '%sumo%' OR film.description ILIKE '%wrestler%')
--     AND actor.first_name = 'Penelope'
--     AND actor.last_name = 'Monroe';

-- -- Film 2: Short documentary (less than 1 hour), rated "R"
-- SELECT 
--     film.title,
--     film.length,
--     film.rating,
--     film.description
-- FROM film
-- WHERE 
--     film.length < 60
--     AND film.rating = 'R'
--     AND film.description ILIKE '%documentary%';

-- -- Film 3: Film that Matthew Mahan rented, paid over $4.00, 
-- -- returned between July 28 and August 1, 2005
-- SELECT DISTINCT
--     film.title,
--     payment.amount,
--     rental.return_date
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN payment ON rental.rental_id = payment.rental_id
-- INNER JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE 
--     customer.first_name = 'Matthew'
--     AND customer.last_name = 'Mahan'
--     AND payment.amount > 4.00
--     AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- -- Film 4: Matthew Mahan watched, has "boat" in title or description,
-- -- expensive replacement cost
-- SELECT DISTINCT
--     film.title,
--     film.description,
--     film.replacement_cost
-- FROM film
-- INNER JOIN inventory ON film.film_id = inventory.film_id
-- INNER JOIN rental ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE 
--     customer.first_name = 'Matthew'
--     AND customer.last_name = 'Mahan'
--     AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
-- ORDER BY film.replacement_cost DESC
-- LIMIT 5;