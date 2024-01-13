-- Active: 1701266548715@@127.0.0.1@3306@bd_bibliotheque

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





-- TP5
--@BLOCK
CREATE TABLE PERSONNES (
numPers varchar(3) not null PRIMARY KEY,
nomPers varchar(50) not null,
prePers varchar(50) not null,
age int(2) not null,
numSS int(5) not null,
ville varchar(30) ) ;

-- 2
--@BLOCK
CREATE TABLE FILIERES (
codeFiliere varchar(3) not null PRIMARY KEY,
nomFiliere varchar(30) not null) ;

-- 3
-- @BLOCK
CREATE TABLE OUVRAGES (
codeOuv varchar(4) not null PRIMARY KEY,
titreOuv varchar(100) not null,
annee int(4) not null,
prix double not null,
filiere varchar(3) not null,
FOREIGN KEY(filiere) REFERENCES filieres(codeFiliere) ) ;

-- 4
-- @BLOCK

CREATE TABLE ECRIRE (
auteur varchar(3) not null,
ouvrage varchar(4) not null,
position int(1),
PRIMARY KEY(auteur, ouvrage),
FOREIGN KEY(auteur) REFERENCES personnes(numPers),
FOREIGN KEY(ouvrage) REFERENCES ouvrages(codeOuv) ) ;

-- 5
-- @BLOCK
CREATE TABLE EMPRUNTS(
lecteur varchar(3) not null,
ouvrage VARCHAR (4) not null,
dateEmprunt date not null,
dateRetour date,
PRIMARY KEY(lecteur, ouvrage, dateEmprunt),
FOREIGN KEY(lecteur) REFERENCES personnes(numPers),
FOREIGN KEY(ouvrage) REFERENCES ouvrages(codeOuv) ) ; 


-- 6
-- @BLOCK
insert into personnes values
('N01', 'Gardarin', 'Georges', 55, 11992, 'Paris'),
('N02', 'Laurent', 'Audibert', 45, 54861, 'Lille'),
('N03', 'Mata Toledo', 'Ramon', 47, 31993, 'Lyon'),
('N04', 'Cushman', 'Pauline', 39, 45667, 'Toulouse'),
('N05', 'Benaichou', 'Said', 31, 21991, 'Alger'),
('N06', 'Boucher', 'Samuel', 42, 78455, 'Berne'),
('N07', 'Meyer', 'Sylvie', 25, 65993, 'Grenoble'),
('N08', 'Reeb', 'Catherine', 28, 21334, 'Paris'),
('N09', 'Bosdeveix', 'Robin', 43, 23667, 'Nantes'),
('N10', 'Cibois Honnorat', 'Isabelle', 37, 58898, 'Genève'),
('N11', 'Butler', 'Paul', 31, 23778, 'Berlin'),
('N12', 'Mitchell', 'Adam', 46, 84563, 'Hambourg'),
('N13', 'Healy', 'Jeremiah', 55, 34566, 'Paris'),
('N14', 'Beauthier', 'Jean Pol', 36, 34668, 'Nantes'),
('N15', 'Bourillon', 'Antoine', 56, 65998, 'Berlin'),
('N16', 'Benoist', 'Grégoire', 44, 23435, 'Rome'),
('N17', 'Delacourt', 'Christophe', 26, 11456, 'Milan'),
('N18', 'Salmi', 'Riad', 21, 41981, 'Alger'),
('N19', 'Kadi', 'Ahlam', 20, 49854, 'Alger'),
('N20', 'Faid', 'Bilal', 19, 31980, 'Béjaia'),
('N21', 'Meiller', 'Raphael', 55, 84576, 'Hambourg');





-- 7
-- @BLOCK
insert into filieres values
('Inf', 'Informatique'),
('Bio', 'Biologies'),
('Med', 'Médecine');


-- 8
-- @BLOCK
insert into ouvrages values
('BD01', 'Bases de Données', 2003, 29, 'Inf'),
('BD02', 'Bases de données - de la modélisation au SQL', 2009, 55, 'Inf'),
('BD03', 'Introduction aux bases de données relationnelles', 2002, 30, 'Inf'),
('BD04', "Bases de données et systèmes d'information", 2017, 35, 'Inf'),
('BD05', 'Programmation SQL', 2003, 22, 'Inf'),
('BI01', 'Maladies des abeilles', 2016, 55, 'Bio'),
('BI02', 'Botanique : Biologie et physiologie végétales', 2019, 50, 'Bio'),
('ME01', 'Echographie en médecine générale', 2018, 63, 'Med'),
('ME02', 'Radiologie anatomique', 2015, 67, 'Med'),
('ME03', 'Pédiatrie', 2017, 46, 'Med');



-- 9
-- @BLOCK
insert into ecrire values
('N01', 'BD01', 1),
('N02', 'BD02', 1),
('N03', 'BD03', 1),
('N04', 'BD03', 2),
('N05', 'BD04', 1),
('N03', 'BD05', 1),
('N04', 'BD05', 2),
('N06', 'BI01', 1),
('N07', 'BI02', 1),
('N08', 'BI02', 2),
('N09', 'BI02', 3),
('N10', 'ME01', 1),
('N11', 'ME02', 1),
('N12', 'ME02', 2),
('N13', 'ME02', 3),
('N14', 'ME02', 4),
('N15', 'ME03', 1),
('N16', 'ME03', 2),
('N17', 'ME03', 3);


-- 10
-- @BLOCK
insert into emprunts values
('N18', 'BD01', '2010-01-25', '2010-02-15'),
('N18', 'BD02', '2012-04-22', '2012-05-15'),
('N17', 'ME02', '2016-02-08', '2016-04-09'),
('N15', 'ME01', '2019-01-16', '2019-01-21'),
('N19', 'BD03', '2011-05-15', '2011-05-30'),
('N19', 'BD05', '2015-10-11', '2006-10-21'),
('N20', 'BI01', '2018-05-23', '2018-05-29'),
('N20', 'ME01', '2019-11-21', '2019-12-02'),
('N20', 'BI01', '2019-02-23', '2019-04-03');


-- 11
-- @BLOCK
-- Les villes dans lesquelles habite au moins une personne. Ici, on doit afficher chaque ville une seule fois.
SELECT DISTINCT ville FROM personnes;

-- 12
-- @BLOCK
-- Les titres des ouvrages écrits par «Cushman Pauline».
SELECT titreOuv FROM ouvrages, ecrire, personnes WHERE ouvrages.codeOuv = ecrire.ouvrage AND ecrire.auteur = personnes.numPers AND personnes.nomPers = 'Cushman' AND personnes.prePers = 'Pauline'; 

-- 13
-- @BLOCK
-- Les numéros et les noms des auteurs habitant la ville d’« Alger ».
    SELECT numPers, nomPers FROM personnes WHERE ville = 'Alger';

--14
-- @BLOCK
-- Les auteurs (numéros, noms et âges) qui ne sont pas également lecteurs.
SELECT numPers, nomPers, age FROM personnes WHERE numPers NOT IN (SELECT lecteur FROM emprunts);

-- 15
-- @BLOCK
-- Les ouvrages (codes, titres et prix) dont le titre comprend le mot « SQL ».
SELECT codeOuv, titreOuv, prix FROM ouvrages WHERE titreOuv LIKE '%SQL%';

-- 10. Les numéros des personnes dont l’âge est le plus faible parmi les personnes habitant la ville de Béjaia.
--@BLOCK
SELECT numPers FROM personnes WHERE age = (SELECT MIN(age) FROM personnes WHERE ville = 'Béjaia');


-- 11. Les numéros des personnes dont l’âge est inférieur à celui d’une personne habitant la ville de Béjaia.
--@BLOCK
SELECT numPers FROM personnes WHERE age < (SELECT age FROM personnes WHERE ville = 'Béjaia');


-- 12. Le nombre de personnes qui sont des lecteurs.
--@BLOCK
SELECT COUNT(lecteur) FROM emprunts;

-- 13. Le nombre d’ouvrage empruntés en moins une fois.
--@block
SELECT COUNT(ouvrage) FROM emprunts;
-- 14. Le prix total de tous les ouvrages
--@block
SELECT SUM(prix) FROM ouvrages;
-- 15. Le prix moyen d’un ouvrage de la filière « Inf »
--@block
SELECT AVG(prix) FROM ouvrages WHERE filiere = 'Inf';

-- 16. L’ouvrage ayant le prix le plus élevé
--@block
SELECT titreOuv FROM ouvrages WHERE prix = (SELECT MAX(prix) FROM ouvrages);

-- 17. L’ouvrage ayant le prix le plus bas parmi les ouvrages de la filière « Bio »
--@block
SELECT titreOuv FROM ouvrages WHERE prix = (SELECT MIN(prix) FROM ouvrages WHERE filiere = 'Bio');

-- 18. Le prix moyen des ouvrages par spécialité
--@block
SELECT AVG(prix) FROM ouvrages GROUP BY filiere;

-- 19. Le nombre de personnes qui habitent dans chaque ville
--@block
SELECT ville, COUNT(ville) FROM personnes GROUP BY ville;

-- 20. Le nombre d’ouvrages par spécialité
--@block
SELECT filiere, COUNT(filiere) FROM ouvrages GROUP BY filiere;


-- 21. L’auteur (ou les auteurs) ayant écrit le plus d’ouvrages , like the most created 
--@block
SELECT auteur, COUNT(auteur) FROM ecrire GROUP BY auteur ORDER BY COUNT(auteur);



