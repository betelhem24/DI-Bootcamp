-- -- Exercise 1: DVD Rental

-- -- Question 1: Get a list of all the languages, from the language table.
-- SELECT * FROM language;

-- -- Question 2: Get a list of all films joined with their languages
-- -- Select: film title, description, and language name
-- SELECT 
--     film.title, 
--     film.description, 
--     language.name AS language_name
-- FROM film
-- INNER JOIN language ON film.language_id = language.language_id;

-- -- Question 3: Get all languages, even if there are no films in those languages
-- -- Select: film title, description, and language name
-- SELECT 
--     film.title, 
--     film.description, 
--     language.name AS language_name
-- FROM language
-- LEFT JOIN film ON language.language_id = film.language_id;

-- -- Question 4: Create a new table called new_film with columns: id, name
-- CREATE TABLE new_film (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL
-- );

-- -- Add some new films to the table
-- INSERT INTO new_film (name) VALUES
-- ('The Matrix Resurrections'),
-- ('Dune Part Two'),
-- ('Inception 2'),
-- ('Avatar 3');

-- -- Question 5: Create customer_review table with DELETE CASCADE constraint
-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INTEGER NOT NULL,
--     language_id INTEGER NOT NULL,
--     title VARCHAR(255) NOT NULL,
--     score INTEGER CHECK (score >= 1 AND score <= 10),
--     review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
--     FOREIGN KEY (language_id) REFERENCES language(language_id)
-- );

-- -- Question 6: Add 2 movie reviews linked to valid objects
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
-- (1, 1, 'Amazing Visual Effects', 9, 'The Matrix Resurrections brings back the iconic series with stunning visuals and deep philosophical questions.'),
-- (2, 1, 'Epic Sci-Fi Masterpiece', 10, 'Dune Part Two is a cinematic achievement that surpasses all expectations.');

-- -- Question 7: Delete a film that has a review
-- -- First, let's check what reviews exist
-- SELECT * FROM customer_review;

-- -- Now delete a film that has a review
-- DELETE FROM new_film WHERE id = 1;

-- -- Check what happened to the customer_review table
-- -- The review for film_id = 1 should be automatically deleted due to ON DELETE CASCADE
-- SELECT * FROM customer_review;