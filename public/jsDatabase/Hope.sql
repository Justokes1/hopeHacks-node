-- CREATE DATABASE hope;

 -- creating table for contact information to live 
CREATE TABLE contact(
id int NOT NULL AUTO_INCREMENT,
firstName varchar(260),
lastName varchar(260),
email varchar(260),
phone int(11),
message varchar(260)
PRIMARY KEY (id),
);

-- adding new contact 
INSERT INTO contact(id, firstName, lastName, email, phone, message)
VALUES(1, 'Sammie', 'Stephenson', 'sstephenson@r2hstudent.org', 7047775693, 'future software engineer');

-- unsubscribe
DELETE FROM hope.contact WHERE id =3 OR firstName = '' AND lastName='';

-- number of contacts
SELECT COUNT id FROM contact GROUP BY id;




 
