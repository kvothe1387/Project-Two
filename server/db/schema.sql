-- DROP DATABASE
DROP DATABASE IF EXISTS friends_db;

-- CREATE DATABASE
CREATE DATABASE friends_db;


--Create Users TABLE
CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL);


--CREATE collections TABLE
CREATE TABLE collections (
id SERIAL PRIMARY KEY,
user_id INTEGER REFERENCES users(id),
lego_set_id VARCHAR(50), -- You can use Rebrickable set IDs
lego_set_name VARCHAR(255),
date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);