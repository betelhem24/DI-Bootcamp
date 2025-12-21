--HOW TO CREATE A TABLE

-- CREATE TABLE actors(
-- actors_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(100) NOT NULL,
-- birth_date DATE NOT NULL,
-- number_oscars SMALLINT
-- )

-- SELECT * FROM actors

-- INSERT INTO actors (first_name, last_name, birth_date, number_oscars)
-- VALUES ('Matt', 'Damon', '08/10/1970', 5)



-- INSERT INTO actors (first_name, last_name, birth_date, oscars)
-- VALUES 
-- ('George', 'Clooney', '06/05/1961', 2);



-- DIFFERENT WAYS OF RETRIEVING THE DATA
-- SELECT * FROM actors


-- SELECT first_name, number_oscars FROM actors

-- SELECT * FROM actors WHERE number_oscars >2
-- 
-- SELECT * FROM actors WHERE (number_oscars = 3 AND first_name = 'Brad') AND last_name = 'Pitt'

-- SELECT * FROM actors WHERE number_oscars IS NULL

-- SELECT first_name FROM actors WHERE last_name LIKE '%y'

-- SELECT first_name FROM actors WHERE last_name ILIKE 'da%'

-- SELECT * FROM actors WHERE number_oscars = 3 LIMIT 1

-- SELECT first_name FROM actors ORDER BY first_name DESC



--DELETE A RECORD
-- DELETE FROM actors WHERE actors_id = 6;

-- SELECT * FROM actors

-- ALTER TABLE actors RENAME COLUMN number_oscars TO oscars
