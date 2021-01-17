CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  userMessage VARCHAR(200) NOT NULL,
  roomname VARCHAR(20),
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES users(id)
);

/* Create other tables and define schemas for them here! */

/*
CREATE TABLE rooms (
  id INT NOT NULL AUTO_INCREMENT,
  room_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

