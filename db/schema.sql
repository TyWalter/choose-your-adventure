-- Switch to postgres user to drop database if exists
\c postgres;

DROP DATABASE IF EXISTS adventure_db;
CREATE DATABASE adventure_db;

-- Switch to adventure DB --
\c adventure_db;

/*
CREATE TABLE Login (
    playerId SERIAL PRIMARY KEY,
    userName VARCHAR(50),
    userPassword VARCHAR(50),
    email VARCHAR(100) UNIQUE --look into this

);

CREATE TABLE Stats (
    statID SERIAL PRIMARY KEY,
    playerID INTEGER, --look into INTERGER vs INTEGER
    timesPlayed INTEGER,
    timesDied INTEGER,
    timesBeatenLevel1 INTEGER,
    timesBeatenLevel2 INTEGER,
    timesBeatenLivel3 INTEGER,
    FOREIGN KEY (LoginID) REFERENCES Login(LoginID)
);

CREATE TABLE Characters (
    characterID INTEGER PRIMARY KEY,
    characterName VARCHAR(30),
    FOREIGN KEY (LoginID) REFERENCES Login(LoginID)
);
*/
