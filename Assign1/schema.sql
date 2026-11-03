-- Quantum Drift Database Schema
-- Database Implementation: USER and COLLECTION_ITEM

CREATE DATABASE IF NOT EXISTS quantum_drift;
USE quantum_drift;

-- Drop dependent child tables first, then parent tables
DROP TABLE IF EXISTS COLLECTION_ITEM;
DROP TABLE IF EXISTS USER;

-- Table 1: USER (Parent table)
CREATE TABLE USER (
    User_ID INT AUTO_INCREMENT,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    Created_At TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT PK_User PRIMARY KEY (User_ID)
) ENGINE=InnoDB;

-- Table 2: COLLECTION_ITEM (Child table related to USER)
CREATE TABLE COLLECTION_ITEM (
    Collection_Item_ID INT AUTO_INCREMENT,
    User_ID INT NOT NULL,
    Model_ID INT NOT NULL,
    Purchase_Price DECIMAL(7, 2) DEFAULT NULL,
    Acquired_Date DATE DEFAULT NULL,
    CONSTRAINT PK_CollectionItem PRIMARY KEY (Collection_Item_ID),
    CONSTRAINT FK_CollectionItem_User FOREIGN KEY (User_ID)
        REFERENCES USER(User_ID)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,
    CONSTRAINT CHK_PurchasePrice CHECK (Purchase_Price IS NULL OR Purchase_Price >= 0.00)
) ENGINE=InnoDB;
