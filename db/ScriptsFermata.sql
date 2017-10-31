CREATE DATABASE Fermata;
USE Fermata;

CREATE TABLE Jugadores (
    id int not null,
        primary key (id)
);

CREATE TABLE Mundo (
    id int not null,
        primary key(id),
	porcentaje_distopia int not null,
    porcentaje_utopia int not null,
    tipo tinyint not null,
        check (tipo <= 2) -- Tipo puede ser: 0 (utópico), 1 (utópico), 2 (normal).
);

CREATE TABLE Deseos (
    id_jugador int not null,
        foreign key(id_jugador) references Jugadores(id),
    id_mundo int not null,
        foreign key (id_mundo) references Mundo(id),
    id int not null,
        primary key (id),
    nombre varchar (60) not null,
    descripcion text not null,
    tipo bit not null -- Tipo puede ser: 0, positivo, 1, negativo.
);

drop table Deseos