DROP DATABASE IF EXISTS adventure_db;

CREATE DATABASE adventure_db;

-- Makes it so all of the following code will affect inventory_db --
\c adventure_db;

CREATE TABLE Players (
    PlayerID INT PRIMARY KEY,
    UserName VARCHAR(50),
    Password INTEGER(50),
    Email VARCHAR(100) UNIQUE
    
);

CREATE TABLE Stats (
    StatID INT PRIMARY KEY,
    PlayerID INT,
    TimesPlayed INT,
    TimesDied INT,
    TimesBeatenLevel1 INT,
    TimesBeatenLevel2 INT,
    TimesBeatenLivel3 INT,
    FOREIGN KEY (PlayerID) REFERENCES Players(PlayerID)
);

CREATE TABLE Characters (
    CharacterID INT PRIMARY KEY,
    CharacterName VARCHAR(30),
    FOREIGN KEY (PlayerID) REFERENCES Players(PlayerID)
);
