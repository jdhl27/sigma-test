CREATE DATABASE admin_sigmatest;

USE admin_sigmatest;

CREATE TABLE contacts(
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(50) NOT NULL DEFAULT '',
  email varchar(30) NOT NULL DEFAULT '',
  state varchar(30) NOT NULL DEFAULT '',
  city varchar(50) NOT NULL DEFAULT ''
);

DESCRIBE contacts;