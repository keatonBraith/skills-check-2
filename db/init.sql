CREATE TABLE products (
    product_id SERIAL PRIMARY KEY NOT NULL,
    img_url TEXT NOT NULL,
    name VARCHAR(30) NOT NULL,
    price INT NOT NULL
)