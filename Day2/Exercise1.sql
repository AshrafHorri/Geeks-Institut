select * from items order by price asc;
select * from items order by (price <= 80) desc ;
select first_name, last_name from customers order by first_name asc limit 3;
select last_name from customers order by last_name desc limit 3;
