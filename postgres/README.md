PostgreSQL

* Tables
* Rows
* Columns

Relational database
- relations between tables

~psql (db with username should be created)

work with psql shell
\g terminates the command (yoohoo)
\l list all databases
\du list all user roles
\c connect to a different database
\? \h - help

work with DB
\dt list all tables
\d person (list schema for table)
\d (list tables and sequences)

// how to set DEFAULT?
// what is collation? (char?)
CREATE TABLE persons (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(60) NOT NULL,
	last_name VARCHAR(60) NOT NULL,
	gender VARCHAR(10) NOT NULL,
	date_of_birth DATE NOT NULL,
	email VARCHAR(150)
);

// multiple table deletions
DROP TABLE person, users;

// how to empty table? - ALTER TABLE

SELECT * FROM persons;
SELECT email FROM persons;

// ORDER BY
ASC 1 2 3 4 5 (is default)
DESC 5 4 3 2 1

ORDER BY - use 1 column at most
SELECT * FROM person ORDER BY email, id; - doesn’t work well;

// SELECT DISTINCT only different values (omit repetitions)
SELECT DISTINCT country_of_birth FROM persons ORDER BY country_of_birth ASC;

// BETWEEN CLAUSE
???

// WHERE CLAUSE
SELECT country_of_birth FROM person WHERE country_of_birth = 'Ukraine' AND gender = 'Male' ORDER BY country_of_birth;
SELECT * FROM person WHERE country_of_birth = 'Ukraine' AND gender = 'Male' AND email IS NOT NULL ORDER BY country_of_birth;

// OPERATORS
SELECT 1 = 1;
SELECT 1 = 2;
SELECT 1 > 2;
SELECT 1 < 2;
SELECT 1 <= 2;
SELECT 1 >= 2;
SELECT 1 <> 2;
SELECT 1 <> 2;

LIMIT is not a SQL standard
LIMIT 5;
LIMIT 10;

SELECT * FROM person OFFSET 5 LIMIT 5;
SELECT * FROM person OFFSET 5;

FETCH keyword
SELECT * FROM person OFFSET 5 FETCH FIRST 1 ROW ONLY; (SQL standard)

IN
SELECT * FROM person WHERE country_of_birth IN(‘France’, ‘Brazil’, ‘China’, ‘Mexico’, ‘Portugal’);
SELECT * FROM person WHERE country_of_birth IN('China', 'Brazil', 'France', 'Mexico', 'Nigeria', 'Portugal');

LIKE

SELECT * FROM person WHERE email LIKE ‘%@google.com';
SELECT * FROM person WHERE email LIKE ‘%@google.%’;
SELECT * FROM person WHERE email LIKE '______@%';

GROUP BY (group data based on column)
SELECT DISTINCT country_of_birth FROM person;
SELECT country_of_birth

GROUP BY HAVING (extra filter after you perform aggregation)
SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) > 40 ORDER BY count;
SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) < 150 ORDER BY count OFFSET 5 FETCH FIRST ROW ONLY;

// calculations
SELECT MAX(price) FROM cars;
SELECT MIN(price) FROM cars;
SELECT AVG(price) FROM cars;
SELECT ROUND(AVG(price)) FROM cars;

// MAX, MIN with GROUP BY
SELECT make, MIN(price) as minimum_price FROM cars GROUP BY make ORDER BY make;
SELECT make, model, MAX(price) as minimum_price FROM cars GROUP BY make, model ORDER BY make;

// SUM
SELECT make, SUM(price) FROM cars GROUP BY make ORDER BY sum DESC;
SELECT model, SUM(price) FROM cars GROUP BY model ORDER BY sum DESC;

SELECT 10 * 2 + 8;
SELECT 2 + 2;
SELECT 10^2;
SELECT 10/ 5;
SELECT 5!;
SELECT 5%2;

// Alias
as


SELECT
	make,
	model,
	year_of_manufacture,
	price as original_price,
	ROUND(price * 0.1, 2) as discount,
	ROUND((price - (price * 0.1)), 2) as "final_price $"
FROM cars
ORDER BY "final_price $" DESC
LIMIT 10;

// COALESCE
SELECT COALESCE(null, 1) AS number;
SELECT COALESCE(null, null, 1, 10) AS number;
SELECT COALESCE(email, 'Email is not provided') FROM person; (takes second as a non null value)

// NULLIF
The NULLIF() function returns NULL if two expressions are equal, otherwise it returns the first expression.
how to handle division by zero SELECT COALESCE(10 / NULLIF(0, 0), 0);
NULLIF(5, 9) => 5
NULLIF(9,9) => NULL

// NOW, DATE, TIME
SELECT NOW();
SELECT NOW()::TIME;
SELECT NOW()::DATE;

SELECT NOW() - INTERVAL ‘1 year’;
SELECT NOW() - INTERVAL ’10 year’;
SELECT NOW() - INTERVAL ’10 days’;
SELECT NOW() - INTERVAL ’10 months’;
SELECT (NOW() - INTERVAL '10 years')::DATE;
SELECT EXTRACT(CENTURY FROM NOW());

// EXTRACT and AGE
SELECT first_name, last_name, date_of_birth, country_of_birth, EXTRACT(YEAR FROM AGE(NOW(), date_of_birth)) as age FROM person;

// PRIMARY KEY (PK) - value which uniquely identifies any record in any table
- ID
- PASSPORT NUMBER

insert into person (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (1, 'Amelina', 'Mandel', 'amandel0@a8.net', 'Female', '1971-06-30', 'Indonesia');
ERROR:  duplicate key value violates unique constraint "person_pkey"
DETAIL:  Key (id)=(1) already exists.

we never manage value for PK

ALTER TABLE persons DROP CONSTRAINT persons_pkey;
SELECT * FROM persons WHERE id = 1;
ALTER TABLE person ADD PRIMARY KEY (id);
DELETE FROM persons WHERE id = 1;
ALTER TABLE person ADD PRIMARY KEY (id); - when you want to add a primary key, make sure value for that column is unique
DELETE FROM person WHERE id = 1001;

// ADDING CONSTRAINT;
ALTER TABLE person ADD CONSTRAINT unique_email_address UNIQUE (email);
ALTER TABLE person DROP CONSTRAINT unique_email_address;
short form ALTER TABLE person ADD UNIQUE(email);

insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Anton', 'Mandel', 'amandel0@a8.net', 'Female', '1971-06-30', 'Indonesia');
ERROR:  duplicate key value violates unique constraint "unique_email_address"
DETAIL:  Key (email)=(amandel0@a8.net) already exists.

// CHECK CONSTRAINT
SELECT DISTINCT gender FROM person;
ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK(gender = 'Female' OR gender = 'Male');

insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Anton', 'Mandel', 'amandel0@a8.com', 'Hello', '1971-06-30', 'Indonesia');
ERROR:  new row for relation "person" violates check constraint "gender_constraint"
DETAIL:  Failing row contains (1004, Anton, Mandel, amandel0@a8.com, Hello, 1971-06-30, Indonesia).

// DELETE
DELETE FROM person WHERE gender = 'Female' AND country_of_birth = 'Ukraine';

// UPDATE
UPDATE person SET first_name = 'Anton', last_name = 'Honcharuk' WHERE email = 'antonge92@gmail.com';
UPDATE person SET email = 'antonge92@gmail.com' WHERE id = 2;

// on conflict do nothing (ON CONFLICT)

INSERT INTO person (id, first_name, last_name, gender, email, date_of_birth, country_of_birth)
test-# VALUES (2, 'Anton', 'HOncaruk', 'Male', 'antonge92@gmail.com', DATE '1992-08-28', 'Ukraine');
ERROR:  duplicate key value violates unique constraint "person_pkey"
DETAIL:  Key (id)=(2) already exists.

INSERT INTO person (id, first_name, last_name, gender, email, date_of_birth, country_of_birth)
VALUES (2, 'Anton', 'HOncaruk', 'Male', 'antonge92@gmail.com', DATE '1992-08-28', 'Ukraine')
test-# ON CONFLICT (id) DO NOTHING;
INSERT 0 0

ON CONFLICT(email)
ON CONFLICT works with columns with unique constraint or primary key

DO UPDATE SET email = EXCLUDED.email

INSERT INTO person (id, first_name, last_name, gender, email, date_of_birth, country_of_birth)
VALUES (2, 'Anton', 'HOncaruk', 'Male', 'anton.goncharuk@icloud.com', DATE '1992-08-28', 'Ukraine')
ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;

// JOINS
UPDATE person SET car_id = 1 WHERE id = 7;
UPDATE person SET car_id = 5 WHERE id = 9;

// INNER JOIN
inner join is an effective way combining two tables
combine TABLE A TABLE B (it takes whatever is common it two tables) - data should be present on two tables;
A + B = C;

if we have foreign key that present in both tables it gives you record C

\x - expanded display on

SELECT person.first_name, person.last_name, car.make, car.model, car.price
FROM person
JOIN car ON person.car_id = car.id;

// LEFT JOIN

SELECT person.first_name, person.last_name, car.make, car.model, car.price
FROM person
LEFT JOIN car ON person.car_id = car.id;

it combines two tables
TABLE A TABLE B = TABLE A  + (TABLE A+B)

// RIGHT JOIN

SELECT person.first_name, person.last_name, car.make, car.model, car.price
FROM person
RIGHT JOIN car ON person.car_id = car.id;

## relations

* person has car
* person can only have one car
* car can belong to one person only

## Performance

* <https://thoughtbot.com/blog/advanced-postgres-performance-tips>

## Advanced queries

* https://bytescout.com/blog/postgresql-advanced-queries.html

## Additional

* <https://www.mockaroo.com/>
* <https://www.postgresql.org/docs/11/datatype-datetime.html>
* <https://www.postgresql.org/docs/9.1/datatype-numeric.html>
* <https://www.w3schools.com/sql/func_sqlserver_nullif.asp>
* <https://www.w3schools.com/sql/sql_having.asp>
* <https://www.w3schools.com/sql/sql_between.asp>
* Data Types <https://www.postgresql.org/docs/11/datatype.html>
* Aggregate functions <https://www.postgresql.org/docs/11/functions-aggregate.html>
