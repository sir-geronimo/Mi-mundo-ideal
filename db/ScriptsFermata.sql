CREATE DATABASE Fermata;
USE Fermata;

CREATE TABLE Jugadores (
    id int not null,
        primary key (id_jugador),
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
    tipo tinyint not null,
        check (tipo <= 2)
)

CREATE TABLE Mundo (
    id int not null,
        primary key(id),
	porcentaje_distopia int not null,
    porcentaje_utopia int not null,
    tipo tinyint not null,
        check (tipo <= 2)
);
