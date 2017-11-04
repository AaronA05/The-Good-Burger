

CREATE database burgers_db;
use burgers_db;

CREATE table burgers(
	id AUTO_INCREMENT NOT NULL PRIMARY KEY,
	burger VARCHAR(50),
	eaten BOOLEAN

);