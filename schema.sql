DROP DATABASE IF EXISTS cowsdb;

CREATE DATABASE cowsdb;

USE cowsdb;

CREATE TABLE cows (
  id int not null auto_increment,
  name varchar(200) not null,
  description varchar(200) not null,
  primary key (id)
);

