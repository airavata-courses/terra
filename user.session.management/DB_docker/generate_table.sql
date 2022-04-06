CREATE DATABASE IF NOT EXISTS team_terra;

USE team_terra; 

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
	type_of_search 		VARCHAR(20),
	search_output		VARCHAR(200),
	search_param		VARCHAR(80)
);

CREATE TABLE IF NOT EXISTS user_register_entity (
	user_id				INT		PRIMARY KEY,
	user_name			VARCHAR(100),
	email_id			VARCHAR(100),
	password			VARCHAR(500)
);