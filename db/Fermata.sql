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
	Cantidad INT NULL,
    ID_Mundo INT,
    PRIMARY KEY(ID),
    FOREIGN KEY(ID_Mundo) REFERENCES Mundos(ID)
);
CREATE TABLE Deseos(
	ID INT NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(20) NOT NULL,
	Tipo bit NOT NULL,
    Descripcion TEXT NOT NULL,
    PRIMARY KEY(ID)
);
CREATE TABLE Habitantes_Deseos() {
	ID_Habitantes INT NOT NULL,
	ID_Deseos INT NOT NULL,
    FOREIGN KEY(ID_Habitantes) REFERENCES Habitantes(ID),
	FOREIGN KEY(ID_Deseos) REFERENCES Deseos(ID)
}
