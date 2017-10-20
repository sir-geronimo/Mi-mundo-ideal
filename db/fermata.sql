-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-10-2017 a las 05:51:45
-- Versión del servidor: 10.1.19-MariaDB
-- Versión de PHP: 7.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fermata`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deseos`
--

CREATE TABLE `deseos` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Tipo` tinyint(4) NOT NULL,
  `Descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitantes`
--

CREATE TABLE `habitantes` (
  `ID` int(11) NOT NULL,
  `Cantidad` int(11) DEFAULT NULL,
  `ID_Mundo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitantes_deseos`
--

CREATE TABLE `habitantes_deseos` (
  `ID_Habitantes` int(11) NOT NULL,
  `ID_Deseos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mundos`
--

CREATE TABLE `mundos` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(20) NOT NULL,
  `Descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `deseos`
--
ALTER TABLE `deseos`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `habitantes`
--
ALTER TABLE `habitantes`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_Mundo` (`ID_Mundo`);

--
-- Indices de la tabla `habitantes_deseos`
--
ALTER TABLE `habitantes_deseos`
  ADD KEY `ID_Habitantes` (`ID_Habitantes`),
  ADD KEY `ID_Deseos` (`ID_Deseos`);

--
-- Indices de la tabla `mundos`
--
ALTER TABLE `mundos`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `deseos`
--
ALTER TABLE `deseos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `habitantes`
--
ALTER TABLE `habitantes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT de la tabla `mundos`
--
ALTER TABLE `mundos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `habitantes`
--
ALTER TABLE `habitantes`
  ADD CONSTRAINT `habitantes_ibfk_1` FOREIGN KEY (`ID_Mundo`) REFERENCES `mundos` (`ID`);

--
-- Filtros para la tabla `habitantes_deseos`
--
ALTER TABLE `habitantes_deseos`
  ADD CONSTRAINT `habitantes_deseos_ibfk_1` FOREIGN KEY (`ID_Habitantes`) REFERENCES `habitantes` (`ID`),
  ADD CONSTRAINT `habitantes_deseos_ibfk_2` FOREIGN KEY (`ID_Deseos`) REFERENCES `deseos` (`ID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
