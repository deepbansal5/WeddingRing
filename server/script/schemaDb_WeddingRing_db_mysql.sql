--
-- Database: `weddingring_db`
--

CREATE DATABASE IF NOT EXISTS `weddingring_db`;
USE `weddingring_db`;


-- ENTITIES

--
-- Struttura della tabella `cities`
--

CREATE TABLE IF NOT EXISTS `cities` (
	`CityName` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `maritalstatus`
--

CREATE TABLE IF NOT EXISTS `maritalstatus` (
	`Maritalstatus` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `states`
--

CREATE TABLE IF NOT EXISTS `states` (
	`Name` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `weddingring_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `weddingring_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);


--
-- Struttura della tabella `userprofiles`
--

CREATE TABLE IF NOT EXISTS `userprofiles` (
	`AgeofEldestChild` numeric ,
	`BirthPlace` varchar(130) ,
	`BirthYear` numeric ,
	`Budget` numeric ,
	`Company` varchar(130) ,
	`Complexion` varchar(130) ,
	`ContactNumber` numeric ,
	`CurrentCity` varchar(130)  NOT NULL,
	`CurrentState` varchar(130) ,
	`DOB` date  NOT NULL,
	`Degree` varchar(130) ,
	`DegreePlace` varchar(130) ,
	`Education` varchar(130) ,
	`FIrstName` varchar(130)  NOT NULL,
	`Familytype` varchar(130) ,
	`Father` varchar(130) ,
	`FatherOccupation` varchar(130) ,
	`Gotra` varchar(130) ,
	`Grandfather` varchar(130) ,
	`Height` decimal(6,2) ,
	`LastName` varchar(130) ,
	`Manglikstatus` bool ,
	`Maritalstatus` varchar(130)  NOT NULL,
	`MotherName` varchar(130) ,
	`MotherTounge` varchar(130) ,
	`MothersOccupation` varchar(130) ,
	`NumberOfChilderen` numeric ,
	`NumberofBrothers` numeric ,
	`NumberofMarriedBrothers` numeric ,
	`NumberofMarriedBrothers` numeric ,
	`NumberofSisters` numeric ,
	`Occupation` varchar(130) ,
	`Package` numeric ,
	`PermanentAddress` varchar(130) ,
	`Physicalstatus` varchar(130) ,
	`Preferences` varchar(130) ,
	`RelationWithContactPerson` varchar(130) ,
	`TimeOfBirth` decimal(6,2) ,
	`Weight` numeric ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





-- relation 1:m CityName Cities - UserProfiles
ALTER TABLE `cities` ADD COLUMN `CityName` int(11)  REFERENCES userprofiles(_id);

-- relation 1:m MartialStatus Maritalstatus - UserProfiles
ALTER TABLE `maritalstatus` ADD COLUMN `MartialStatus` int(11)  REFERENCES userprofiles(_id);

-- relation 1:m currentState States - UserProfiles
ALTER TABLE `states` ADD COLUMN `currentState` int(11)  REFERENCES userprofiles(_id);


