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
	VALUES("Centrales nucleares", 0, "Su uso es potencialmente perjudicial para el medio ambiente.");
INSERT INTO Deseos(Nombre, Tipo, Descripcion)
	VALUES("Carros voladores", 1, "Vehículo de uso doméstico capaz de transportar a personas volando o levitando.");
INSERT INTO Deseos(Nombre, Tipo, Descripcion)
	VALUES("Carros voladores", 0, "Su uso es potencialmente perjudicial para el medio ambiente");
INSERT INTO Deseos(Nombre, Tipo, Descripcion)
	VALUES("Inteligencia artificial", 0, "La Inteligencia Artificial (IA) es un objetivo que consiste en producir máquinas que realicen trabajos, procesos, acciones que, al ser evaluados por un humano, este no distinga si fue hecho por uno de su misma especie o por una IA.");