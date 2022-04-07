CREATE DATABASE IF NOT EXISTS team_terra;

USE team_terra; 

DROP TABLE IF EXISTS user_entity;
DROP TABLE IF EXISTS user_log_entity;
DROP TABLE IF EXISTS user_activity_entity;
DROP TABLE IF EXISTS user_register_entity;


CREATE TABLE IF NOT EXISTS user_entity (
    user_id   INT			PRIMARY KEY,
    name      VARCHAR(50),
    email     VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS user_log_entity (
    session_id   INT			PRIMARY KEY,
    user_id		 INT,
    token_id 	VARCHAR(100),
    activity	VARCHAR(15),
    time_stamp	VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS user_activity_entity (
	user_activity_id 	INT		PRIMARY KEY,
	user_id				INT,
	token_id 			VARCHAR(100),
	type_of_search 		VARCHAR(100),
	search_output		VARCHAR(500),
	search_param		VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS user_register_entity (
	user_id				INT		PRIMARY KEY,
	user_name			VARCHAR(100),
	email_id			VARCHAR(100),
	password			VARCHAR(500)
);