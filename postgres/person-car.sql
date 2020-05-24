create table car (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  make VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  year_of_manufacture VARCHAR(10) NOT NULL,
  price NUMERIC(19, 2) NOT NULL
);

create table person (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  email VARCHAR(150),
  date_of_birth DATE NOT NULL,
  country_of_birth VARCHAR(50) NOT NULL,
  car_id BIGINT REFERENCES car(id),
  UNIQUE(car_id)
);

insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Anton', 'Mandel', 'amandel0@a8.com', 'Hello', '1971-06-30', 'Indonesia');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Benson', 'Devonside', 'bdevonside1@godaddy.com', 'Male', '1959-12-16', 'Indonesia');
insert into person (first_name, last_name, email, gender, date_of_birth, country_of_birth) values ('Shelley', 'Valentinuzzi', 'svalentinuzzi2@mashable.com', 'Female', '2004-02-27', 'China');

insert into car (id, make, model, year_of_manufacture, price) values (1, 'Dodge', 'Stratus', 2005, '130333.03');
insert into car (id, make, model, year_of_manufacture, price) values (2, 'Rolls-Royce', 'Phantom', 2013, '208335.07');
insert into car (id, make, model, year_of_manufacture, price) values (3, 'Chevrolet', 'Express 1500', 2006, '56153.22');
