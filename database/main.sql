-- Active: 1698948517192@@bmlrstyprbhu5tvpykrk-mysql.services.clever-cloud.com@3306@bmlrstyprbhu5tvpykrk
-- SELECT * FROM users


-- @block
CREATE TABLE users (
    -- id INT  AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    image VARCHAR(6000) NOT NULL,
    PRIMARY KEY(id)
)

-- @block
CREATE TABLE product (
    -- id INT  AUTO_INCREMENT,
    name VARCHAR(200) NOT NULL,
    description VARCHAR(200) NOT NULL,
    image VARCHAR(6000) NOT NULL,
    rating FLOAT NOT NULL,
    price INT NOT NULL,
    brand VARCHAR(200) NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(200) NOT NULL, 
    PRIMARY KEY(id)
)




-- @block
INSERT INTO product VALUES(
    3,
    'Apple Watch',
    'A Good Product',
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1999&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    4.7,
    200,
    'Apple',
    30,
    'Electronics'
) 

-- @block
DROP TABLE users


-- @block
DROP TABLE product

-- change the id column to have default value of AUTO_INCREMENT
-- ALTER TABLE users ALTER COLUMN id INT ,


-- @block
INSERT INTO users VALUES(
    1,
    'fares',
    "fares1@test.com",
    "$2b$10$ln59OfxNEr4sS6ZdHh0K1OHDreCaSbbedEhmoQ17vU2JFtnic7XQ.",
    "https://avatars.githubusercontent.com/u/91225280?s=400&u=f1f63351b35655aebe08acb336d16eed43e63982&v=4"
)


-- @BLOCK
ALTER TABLE users ADD role VARCHAR(200) NOT NULL;



CREATE TABLE report (
    id SERIAL PRIMARY KEY,
    comment TEXT,
    user_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id) -- Assuming users table exists with an 'id' column
);
-- @BLOCK
SELECT comment FROM reports WHERE user_id = 1;





-- @block
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT, -- Foreign key to users table
    -- total price and make some constraints
    total_price INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- @block
SELECT * FROM `order`;

-- @block
--  drop table orders
 drop table orders


-- @block
SELECT * FROM orders JOIN order_items ON orders.id = order_items.order_id JOIN product ON order_items.product_id = product.id;


-- @block
--  insert an order 
INSERT INTO orders (user_id, total_price) VALUES (3, 1000); 

-- @block
--  insert an order item
INSERT INTO order_items (order_id, product_id, quantity) VALUES (2, 10, 3);


-- @BLOCK
-- combine all the order items that have the same order_id 
SELECT product.id, product.name, order_items.quantity
FROM order_items
INNER JOIN product ON order_items.product_id = product.id
WHERE order_items.order_id = 2



-- @BLOCK
-- select all order_items that belongs to user 3
SELECT order_items.id, order_items.order_id, order_items.product_id, order_items.quantity
FROM order_items
INNER JOIN orders ON order_items.order_id = orders.id
WHERE orders.user_id = 3


-- @BLOCK
-- select all order_items that belongs to user 3
SELECT orders.id AS order_id,
           product.id AS product_id, product.name AS product_name, product.price
    FROM orders
    JOIN order_items ON orders.id = order_items.order_id
    JOIN product ON order_items.product_id = product.id


-- 

-- @block
CREATE TABLE order_item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL,
    FOREIGN KEY (`order_id`) REFERENCES `order`(`id`),
    FOREIGN KEY (`product_id`) REFERENCES `product`(`id`)
);



-- deelte all rows from order_item
-- @block
DELETE FROM order_item;

DELETE FROM `product`

DELETE FROM `order`



-- @block
ALTER TABLE order_item ADD FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE;

