DROP TABLE IF EXISTS detail;

CREATE TABLE detail (
    id SERIAL PRIMARY KEY,
    name character varying (100) NOT NULL,
    fullName VARCHAR (100) NOT NULL,
    directive VARCHAR (300) NOT NULL,
    weapon VARCHAR (100) NOT NULL,
    movie VARCHAR (50) NOT NULL,
    actor VARCHAR (100) NOT NULL
);

INSERT INTO detail (name, fullName, directive, weapon, movie, actor)
VALUES('WALL-E', 'Waste Allocation Load Lifter Earth-class', 'waste collection', 'small trash compactor', 'WALL-E', 'Ben Burtt');

INSERT INTO detail (name, fullName, directive, weapon, movie, actor)
VALUES('EVE','Extraterrestrial Vegetation Evaluator', 'vegetable reconnaissance', 'photon cannon', 'WALL-E', 'Elissa Knight');

INSERT INTO detail (name, fullName, directive, weapon, movie, actor)
VALUES('AUTO', 'Autopilot', 'Prevent Recolonization', 'his wheel shaped body', 'WALL-E', 'Macintalk');

INSERT INTO detail (name, fullName, directive, weapon, movie, actor)
VALUES('Baymax', 'Monster Baymax', 'personal healthcare companion', 'large belly', 'Big Hero 6', 'Scott Adsit');

INSERT INTO detail (name, fullName, directive, weapon, movie, actor)
VALUES('B.E.N', 'Bio Electronic Navigator', 'space pirate navigator', 'shipmate telescope', 'Treasure Planet', 'Martin Short');

INSERT INTO detail (name, fullName, directive, weapon, movie, actor)
VALUES('R2D2', 'Second Generation Robotic Droid Series-2', 'astro-navigation', 'mechanic tools', 'Star Wars', 'Ben Burtt');

INSERT INTO detail (name, fullName, directive, weapon, movie, actor)
VALUES('C3PO', 'Commercial Crew & Cargo Program Office', 'protocol droid', 'harsh words', 'Star Wars', 'Anthony Daniels');

INSERT INTO detail (name, fullName, directive, weapon, movie, actor)
VALUES('J.A.R.V.I.S', 'Just A Rather Very Intelligent System' , 'natural language user interface', 'STARK Inc. Arsenal', 'Avengers: Age of Ultron', 'Paul Bettany');





