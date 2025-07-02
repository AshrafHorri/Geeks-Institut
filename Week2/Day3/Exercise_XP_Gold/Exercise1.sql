SELECT rating, COUNT(*) AS film_count
FROM film
GROUP BY rating;

SELECT title
FROM film
WHERE (rating = 'G' OR rating = 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title ASC;

UPDATE customer
SET first_name = 'YourFirstName', last_name = 'YourLastName', email = 'your@email.com'
WHERE customer_id = 1;

UPDATE address
SET address = '123 Your Street', address2 = '', district = 'YourDistrict', city_id = 1, postal_code = '12345', phone = '123-456-7890'
WHERE address_id = 1;