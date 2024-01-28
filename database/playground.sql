-- Active: 1698948517192@@bmlrstyprbhu5tvpykrk-mysql.services.clever-cloud.com@3306@bmlrstyprbhu5tvpykrk


-- @block
 SELECT * FROM users 


-- @block
SELECT * FROM product





SELECT * FROM `order`




CREATE TABLE
order_item(
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES `order`(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
)





ALTER TABLE `order`
ADD FOREIGN KEY (user_id) REFERENCES user(id)




ALTER TABLE `order_item`
ADD price INT NOT NULL
