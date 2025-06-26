CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);

INSERT INTO items (item_name, price) VALUES
('Small Desk', 100),
('Large desk', 300),
('Fan', 80);

INSERT INTO customers (first_name, last_name) VALUES
('Greg', 'Jones'),
('Sandra', 'Jones'),
('Scott', 'Scott'),
('Trevor', 'Green'),
('Melanie', 'Johnson');
select * from items;
select * from items where price > 80;
select * from items where price < 300;
select * from customers where last_name = 'Smith'
select * from customers where last_name = 'Jones'
select * from customers where first_name != 'Scott'




