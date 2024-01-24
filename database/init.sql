-- Active: 1698948517192@@bmlrstyprbhu5tvpykrk-mysql.services.clever-cloud.com@3306@bmlrstyprbhu5tvpykrk
-- ALTER Table product
-- ADD category VARCHAR(200) NOT NULL

INSERT INTO product VALUES(
    
    'Apple',
    23,
"A Good Product",
    "http",
    3.5
)
 
-- ALTER TABLE product  ALTER COLUMN image VARCHAR(6000)

-- @block
 SELECT * FROM users 


-- @block
SELECT * FROM product



-- DELETE FROM product;


SELECT * FROM `order`


-- create table order_item


CREATE TABLE
order_item(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES `order`(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
)



-- add foreign key user_id to order TABLE 


ALTER TABLE `order`
ADD FOREIGN KEY (user_id) REFERENCES user(id)



-- add price to order_item

ALTER TABLE `order_item`
ADD price INT NOT NULL