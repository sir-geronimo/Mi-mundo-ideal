CREATE DATABASE Fermata;
USE Fermata;
/* Creacion de las tablas */
CREATE TABLE Mundos(
	ID INT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(20) NOT NULL,
    Descripcion TEXT NOT NULL,
    PRIMARY KEY(ID)
);
CREATE TABLE Habitantes(
	ID INT NOT NULL AUTO_INCREMENT,
    Nacionalidad VARCHAR(20) NOT NULL,
	Cantidad INT NULL,
    ID_Mundo INT,
    PRIMARY KEY(ID),
    FOREIGN KEY(ID_Mundo) REFERENCES Mundos(ID)
);
/* Informacion de los mundos */
INSERT INTO Mundos(Nombre, Descripcion)
	VALUES('Utopico', 'Mundo perfecto...');
INSERT INTO Mundos(Nombre, Descripcion)
	VALUES('Distopico', 'Mundo no perfecto...');
INSERT INTO Mundos(Nombre, Descripcion)
	VALUES('Intermedio', 'Mundo intermedio...');
/* Informacion de los habitantes */
INSERT INTO Habitantes(Nacionalidad, ID_Mundo)
	VALUES('Utopica', 1);
INSERT INTO Habitantes(Nacionalidad, ID_Mundo)
	VALUES('Distopica', 2);
INSERT INTO Habitantes(Nacionalidad, ID_Mundo)
	VALUES('Intermedia', 3);
