-- -- -- Active: 1698284420780@@127.0.0.1@3306@book

-- -- CREATE TABLE Books ( ID INT NOT NULL, title VARCHAR(50), publisher VARCHAR(50), publicationDate DATE, genre VARCHAR(50), PRIMARY KEY (ID) );

-- -- CREATE TABLE Author( authorID INT, name VARCHAR(50), email VARCHAR(50), age INT, Cuntry VARCHAR(50), PRIMARY KEY (authorID) );

-- -- CREATE TABLE Publishers( publisherID INT NOT NULL, publisherName VARCHAR(50), headquartersLocation VARCHAR(50), foundationYear DATE , website VARCHAR(50), PRIMARY KEY (publisherID) );

-- -- CREATE TABLE Members ( memberID INT NOT NULL, name VARCHAR(20), email VARCHAR(20), phone VARCHAR(10), adress VARCHAR(50), PRIMARY KEY (memberID) );

-- -- CREATE TABLE written_by( book_name INT, author_name INT ,foreign key (book_name )REFERENCES books(ID),




-- -- -- @block

-- -- CREATE table bookloan ( loanID int not null, bookID int , memberID int , borrowdate date, returndate date, duedate date, PRIMARY key (loanID), FOREIGN key( bookID) REFERENCES books(ID), FOREIGN key (memberID) REFERENCES members(memberID) );

-- -- -- @block

-- SELECT * FROM author 

-- -- -- @block

-- -- SELECT * FROM members

-- -- -- @block

-- -- SELECT * FROM written_by

-- -- -- @block

-- -- SELECT * FROM written_by

-- -- -- @block

-- -- SELECT * FROM author

-- -- -- @block

-- -- ALTER table written_by add FOREIGN key (author_name) REFERENCES author (authorID);

-- -- ALTER TABLE books ADD rating INT NOT NULL;

-- -- ALTER TABLE author DROP age;

-- -- ALTER TABLE books MODIFY title VARCHAR(100);

-- -- ALTER TABLE books MODIFY publicationDATE DATETIME;

-- -- CREATE TABLE BOOKCATEGORIES ( categoryName VARCHAR(20), categoryID INT , PRIMARY KEY (categoryID) );
-- CREATE TABLE Publishers( publisherID INT NOT NULL, publisherName VARCHAR(50), headquartersLocation VARCHAR(50), foundationYear DATE , website VARCHAR(50), PRIMARY KEY (publisherID) );
-- INSERT INTO publishers (publisherID, publisherName, headquartersLocation, foundationYear, website)
-- VALUES
-- (1, 'Penguin Random House', 'New York, NY', 2014, 'https://www.penguinrandomhouse.com/'),
-- (2, 'HarperCollins', 'New York, NY', 1989, 'https://www.harpercollins.com/'),
-- (3, 'Houghton Mifflin Harcourt', 'Boston, MA', 1832, 'https://www.hmhbooks.com/'),
-- (4, 'Penguin Classics', 'London, UK', 1935, 'https://www.penguin.co.uk/'),
-- (5, 'HarperOne', 'San Francisco, CA', 1977, 'https://www.harperone.com/'),
-- (6, 'St. Martin''s Press', 'New York, NY', 1952, 'https://us.macmillan.com/smp'),
-- (7, 'Doubleday', 'New York, NY', 1897, 'https://www.penguinrandomhouse.com/imprints/doubl');



-- SELECT * FROM books;

-- --@block`
-- ALTER TABLE book.books ADD FOREIGN key (publisher) REFERENCES publishers(publisherID);


-- -- ALTER TABLE book.books
-- -- DROP CONSTRAINT moh;
-- -- DELETE  categoryID  FROM books
-- -- WHERE categoryID = 1;

-- -- ON DELETE CASCADE ;
-- -- ON DELETE NO ACTION ;
-- -- ON DELETE SET NULL ;


-- -- ALTER TABLE Books ALTER COLUMN rating SET DEFAULT 3;

-- -- DROP TABLE Publishers;

-- -- ALTER TABLE bookloan RENAME TO Loans;

-- INSERT INTO
--     publishers (
--         publisherID,
--         publisherName,
--         headquartersLocation,
--         foundationYear,
--         website
--     )
-- VALUES (
--         1,
--         'Penguin Random House',
--         'New York, NY',
--         2014,
--         'https://www.penguinrandomhouse.com/'
--     ), (
--         2,
--         'HarperCollins',
--         'New York, NY',
--         1989,
--         'https://www.harpercollins.com/'
--     ), (
--         3,
--         'Houghton Mifflin Harcourt',
--         'Boston, MA',
--         1832,
--         'https://www.hmhbooks.com/'
--     ), (
--         4,
--         'Penguin Classics',
--         'London, UK',
--         1935,
--         'https://www.penguin.co.uk/'
--     ), (
--         5,
--         'HarperOne',
--         'San Francisco, CA',
--         1977,
--         'https://www.harperone.com/'
--     ), (
--         6,
--         'St. Martin''s Press',
--         'New York, NY',
--         1952,
--         'https://us.macmillan.com/smp'
--     ), (
--         7,
--         'Doubleday',
--         'New York, NY',
--         1897,
--         'https://www.penguinrandomhouse.com/imprints/doubl'
--     );

-- INSERT INTO
--     books (
--         id,
--         title,
--         publisher,
--         publicationDate,
--         genre
--     )
-- VALUES (
--         97801424,
--         "To Kill a Mockingbird",
--         1,
--         '1960-07-11',
--         "Fiction"
--     ), (
--         97800611,
--         "1984",
--         2,
--         '1949-06-08',
--         "Science Fiction"
--     ), (
--         97805479,
--         "The Hobbit",
--         3,
--         '1937-09-21',
--         "Fantasy"
--     ), (
--         97800629,
--         "The Push",
--         2,
--         '2021-01-05',
--         "Psychological Thriller"
--     ), (
--         97803582,
--         "The Silent Patient",
--         2,
--         '2019-02-05',
--         "Psychological Thriller"
--     ), (
--         97803583,
--         "The Ballad of Songbirds and Snakes",
--         1,
--         '2020-05-19',
--         "Dystopian Fiction"
--     ), (
--         97803584,
--         "The Midnight Library",
--         4,
--         '2020-09-29',
--         "Fiction"
--     ), (
--         97805931,
--         "The Testaments",
--         1,
--         '2019-09-10',
--         "Dystopian Fiction"
--     );

-- INSERT INTO
--     members (
--         memberID,
--         name,
--         email,
--         phone,
--         adress
--     )
-- VALUES (
--         1,
--         'John Smith',
--         'johnsmith@gmail.com',
--         '555-1234',
--         '123 Main St'
--     ), (
--         2,
--         'Jane Doe',
--         'janedoe@gmail.com',
--         '555-5678',
--         '456 Elm St'
--     ), (
--         3,
--         'Bob Johnson',
--         'bobjohnson@gmail.com',
--         '555-9012',
--         '789 Oak St'
--     );

-- INSERT INTO
--     loans (
--         loanID,
--         bookID,
--         memberID,
--         borrowDate,
--         returnDate,
--         dueDate
--     )
-- VALUES (
--         1,
--         97801424,
--         1,
--         '2023-10-01',
--         '2023-10-08',
--         '2023-10-15'
--     ), (
--         2,
--         97800611,
--         2,
--         '2023-10-02',
--         '2023-10-09',
--         '2023-10-16'
--     ), (
--         3,
--         97805479,
--         3,
--         '2023-10-03',
--         '2023-10-10',
--         '2023-10-17'
--     );

-- INSERT INTO
--     written_by (book_name, author_name)
-- VALUES (97800629, 1), (97800611, 2);

-- -- insert authoers into authoers tbale using this ?

-- INSERT INTO author
-- VALUES (
--         1,
--         "Harper Lee",
--         "harperlee@gmail.com",
--         "USA"
--     ), (
--         2,
--         "George Orwell",
--         " georgeorwell@gmail.com ",
--         "UK"
--     ), (
--         3,
--         " Tolkien",
--         "tolkien@gmail.com",
--         "UK"
--     )


 -- 1
-- @block 
SELECT  DISTINCT genre  FROM books


--  2 
-- @block
SELECT * from books WHERE title ="Harry Potter"


-- 3 
-- @block
SELECT * from author  ORDER BY age  DESC Limit 3 


-- 4 
-- @block
SELECT name, email FROM members WHERE memberID IN (SELECT memberID FROM loans WHERE borrowDate > '2021-01-01');

-- 5 
-- @block
SELECT title FROM books WHERE id IN (SELECT bookID FROM loans WHERE memberID = (SELECT memberID FROM members WHERE name = 'Jane Doe'));



-- 20 
--@block
-- sleect the number of publishers located in london
SELECT COUNT(publisherID) from publishers WHERE  headquartersLocation = "London, UK"


-- 21 
--@block
-- SELECT title, publicationDate FROM books ORDER BY publicationDate DESC LIMIT 10


-- 22 
-- @block
-- select the average years of books publication
-- SELECT AVG(YEAR(publicationDate)) FROM books

-- 23 
-- @block
SELECT * FROM author WHERE email LIKE '%@gmail.com' OR email LIKE '%@yahoo.com'

-- 24 
-- @block
-- select authors who live the (usa or uk)
SELECT * FROM author WHERE Cuntry = 'USA' OR Cuntry = 'UK'


-- 25 
-- @block
SELECT * FROM books WHERE YEAR(publicationDate) = 2020 OR YEAR(publicationDate) = 2021

-- 26
-- @block
SELECT *, CASE WHEN adress LIKE '%CA%' THEN 'California' WHEN adress LIKE '%NY%' THEN 'New York' ELSE 'Other' END  as state FROM members


-- 27
-- @block
-- combine the list of books titles an dpublisher headquarters locations into one result
SELECT title, headquartersLocation FROM books JOIN publishers ON books.publisher = publishers.publisherID

-- 28
--@block 
-- classify memeber phone  numbers as either starting wih 555 or OTHERS
SELECT *, CASE WHEN phone LIKE '555%' THEN '555' ELSE 'OTHER' END AS phoneType FROM members


-- 29 
-- @block
--  RETREive old book titles published before 2000 and publisher websites for publishers founded before 1950   
SELECT title, website  FROM books, publishers WHERE YEAR(publicationDate) < 2000 AND YEAR(foundationYear) < 1950

-- 30
-- @block
--  get book titles published  after any book from 2020
SELECT title FROM books WHERE publicationDate > (SELECT publicationDate FROM books WHERE YEAR(publicationDate) = 2020)
-- 31
-- @block
-- get book titles published  after all book agter 2015
SELECT title FROM books WHERE publicationDate > ALL (SELECT publicationDate FROM books WHERE YEAR(publicationDate) = 2015)


-- 32 
-- @block
-- get book titles  that match publisher headquarters locations
SELECT title FROM books WHERE publisher IN (SELECT publisherID FROM publishers WHERE headquartersLocation = 'New York, NY')

-- 33
-- @block
-- List author names that are not also member names  , use join , other way
SELECT name FROM author WHERE name NOT IN (SELECT name FROM members)

-- 34
-- @block
-- get books 11-15 orderded by most recent publication date
-- SELECT * FROM books ORDER BY publicationDate DESC LIMIT 5 OFFSET 10

-- 35
-- @block
SELECT * FROM author WHERE age > (SELECT AVG(age) FROM author)

-- 36
-- @block
-- get books published by publisher located in new york
SELECT * FROM books WHERE publisher IN (SELECT publisherID FROM publishers WHERE headquartersLocation = 'New York, NY')