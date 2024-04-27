-- check db
show databases;

-- create database > login
CREATE DATABASE sql_login;

-- create users table
-- text = 65.535 Bytes space!
CREATE table users(
    id int auto_increment,
    email varchar(100),
    password text,
    primary key(id)
);

