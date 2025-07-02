CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES ('Film A'), ('Film B');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INT REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INT CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
    (1, 1, 'Great Film', 9, 'I really enjoyed this film.'),
    (2, 2, 'Not Bad', 7, 'The film was okay, could be better.');

DELETE FROM new_film WHERE id = 1;
