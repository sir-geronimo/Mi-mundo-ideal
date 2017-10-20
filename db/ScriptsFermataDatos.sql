USE fermata;
/* Informacion de los mundos */
INSERT INTO Mundos(Nombre, Descripcion)
	VALUES('Utopico', 'Mundo perfecto...');
INSERT INTO Mundos(Nombre, Descripcion)
	VALUES('Distopico', 'Mundo no perfecto...');
INSERT INTO Mundos(Nombre, Descripcion)
	VALUES('Intermedio', 'Mundo intermedio...');
/* Informacion de los habitantes */
INSERT INTO Habitantes(Cantidad, ID_Mundo)
	VALUES(0, 1);
INSERT INTO Habitantes(Cantidad, ID_Mundo)
	VALUES(0, 2);
INSERT INTO Habitantes(Cantidad, ID_Mundo)
	VALUES(0, 3);
/* Informacion de los deseos */
INSERT INTO Deseos(Nombre, Tipo, Descripcion)
	VALUES("", 0, "");
INSERT INTO Deseos(Nombre, Tipo, Descripcion)
	VALUES("", 0, "");
INSERT INTO Deseos(Nombre, Tipo, Descripcion)
	VALUES("", 0, "");
INSERT INTO Deseos(Nombre, Tipo, Descripcion)
	VALUES("", 0, "");