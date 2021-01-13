CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int,
  username varchar(255),
  friends set,
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id int,
  room_name varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int,
  user_message varchar(255),
  id_users int,
  id_rooms int,
  PRIMARY KEY (id),
  FOREIGN KEY (id_users) REFERENCES users(id),
  FOREIGN KEY (id_rooms) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

