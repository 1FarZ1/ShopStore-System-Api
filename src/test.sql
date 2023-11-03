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
    id INT NOT NULL,
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

-- change the id column to have default value of AUTO_INCREMENT
ALTER TABLE users ALTER COLUMN id INT ,


-- @block
INSERT INTO users VALUES(
    1,
    'fares',
    "fares1@test.com",
    "$2b$10$ln59OfxNEr4sS6ZdHh0K1OHDreCaSbbedEhmoQ17vU2JFtnic7XQ.",
    "https://avatars.githubusercontent.com/u/91225280?s=400&u=f1f63351b35655aebe08acb336d16eed43e63982&v=4"
)