SELECT * FROM items
WHERE price IS NOT NULL
ORDER BY price ASC;

SELECT * FROM items
WHERE price >= 80 IS NOT NULL
ORDER BY price DESC;

SELECT name_customer
FROM customers
WHERE name_customer IS NOT NULL
ORDER BY name_customer ASC
LIMIT 3;

SELECT lastname_customer
FROM customers
WHERE lastname_customer IS NOT NULL
ORDER BY lastname_customer DESC;
