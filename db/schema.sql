-- Switch to postgres user to drop database if exists
\c postgres;

DROP DATABASE IF EXISTS adventure_db;
CREATE DATABASE adventure_db;

-- Switch to adventure DB --
\c adventure_db;
