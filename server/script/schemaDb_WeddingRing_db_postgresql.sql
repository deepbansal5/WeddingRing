--
-- Database: weddingring_db
--

CREATE DATABASE weddingring_db;

-- FACTOM BLOCKACHAIN ENTITIES

--
-- Table `identity`
--

CREATE TABLE IF NOT EXISTS "identity" (
	"chain_id" varchar(260)  NOT NULL,
	"entry_hash" varchar(260)  NOT NULL,
	"key_pairs" json,
	"_id" serial NOT NULL PRIMARY KEY
);

--
-- Table `chain`
--

CREATE TABLE IF NOT EXISTS "chain" (
	"chain_id" varchar(260)  NOT NULL,
	"entry_hash" varchar(260)  NOT NULL,
	"identity" int  REFERENCES identity(_id),
	"_id" serial NOT NULL PRIMARY KEY,
	"content" varchar(260)  NOT NULL

);

--
-- Table `entry`
--

CREATE TABLE IF NOT EXISTS entry (
	"entry_hash" varchar(260)  NOT NULL,
	"content" varchar(260)  NOT NULL,

	-- RELAZIONI
	"chain" int  REFERENCES chain(_id),

	"_id" serial NOT NULL PRIMARY KEY

);

-- ENTITIES

--
-- Schema entity cities
--

CREATE TABLE IF NOT EXISTS "cities" (
	"CityName" varchar(130)  NOT NULL,
	
	"_id" SERIAL PRIMARY KEY

);

--
-- Schema entity maritalstatus
--

CREATE TABLE IF NOT EXISTS "maritalstatus" (
	"Maritalstatus" varchar(130) ,
	
	"_id" SERIAL PRIMARY KEY

);

--
-- Schema entity states
--

CREATE TABLE IF NOT EXISTS "states" (
	"Name" varchar(130) ,
	
	"_id" SERIAL PRIMARY KEY

);

--
-- Schema entity user
--

CREATE TABLE IF NOT EXISTS "user" (
	"mail" varchar(130) ,
	"name" varchar(130) ,
	"password" varchar(130)  NOT NULL,
	"roles" varchar(130) ,
	"surname" varchar(130) ,
	"username" varchar(130)  NOT NULL,
	
	"_id" SERIAL PRIMARY KEY

);


-- Security

INSERT INTO "user" (username, password, _id) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS "roles" (
	"role" varchar(30) ,
	
	-- RELAZIONI

	"_user" INTEGER  NOT NULL REFERENCES "user"(_id),
	"_id" SERIAL PRIMARY KEY 

);
INSERT INTO "roles" (role, _user, _id) VALUES ('ADMIN', '1', 1);

--
-- Schema entity userprofiles
--

CREATE TABLE IF NOT EXISTS "userprofiles" (
	"AgeofEldestChild" numeric ,
	"BirthPlace" varchar(130) ,
	"BirthYear" numeric ,
	"Budget" numeric ,
	"Company" varchar(130) ,
	"Complexion" varchar(130) ,
	"ContactNumber" numeric ,
	"CurrentCity" varchar(130)  NOT NULL,
	"CurrentState" varchar(130) ,
	"DOB" date  NOT NULL,
	"Degree" varchar(130) ,
	"DegreePlace" varchar(130) ,
	"Education" varchar(130) ,
	"FIrstName" varchar(130)  NOT NULL,
	"Familytype" varchar(130) ,
	"Father" varchar(130) ,
	"FatherOccupation" varchar(130) ,
	"Gotra" varchar(130) ,
	"Grandfather" varchar(130) ,
	"Height" decimal(6,2) ,
	"LastName" varchar(130) ,
	"Manglikstatus" bool ,
	"Maritalstatus" varchar(130)  NOT NULL,
	"MotherName" varchar(130) ,
	"MotherTounge" varchar(130) ,
	"MothersOccupation" varchar(130) ,
	"NumberOfChilderen" numeric ,
	"NumberofBrothers" numeric ,
	"NumberofMarriedBrothers" numeric ,
	"NumberofMarriedBrothers" numeric ,
	"NumberofSisters" numeric ,
	"Occupation" varchar(130) ,
	"Package" numeric ,
	"PermanentAddress" varchar(130) ,
	"Physicalstatus" varchar(130) ,
	"Preferences" varchar(130) ,
	"RelationWithContactPerson" varchar(130) ,
	"TimeOfBirth" decimal(6,2) ,
	"Weight" numeric ,
	
	"_id" SERIAL PRIMARY KEY

);




-- relation 1:m CityName Cities - UserProfiles
ALTER TABLE "cities" ADD COLUMN "CityName" INTEGER  REFERENCES "userprofiles"(_id);

-- relation 1:m MartialStatus Maritalstatus - UserProfiles
ALTER TABLE "maritalstatus" ADD COLUMN "MartialStatus" INTEGER  REFERENCES "userprofiles"(_id);

-- relation 1:m currentState States - UserProfiles
ALTER TABLE "states" ADD COLUMN "currentState" INTEGER  REFERENCES "userprofiles"(_id);
