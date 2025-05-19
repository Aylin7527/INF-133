-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2025 a las 04:27:31
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `repuestos_vae`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `ID` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` text NOT NULL,
  `Precio` decimal(10,2) NOT NULL,
  `CantidadStock` int(11) NOT NULL,
  `Categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID`, `Nombre`, `Descripcion`, `Precio`, `CantidadStock`, `Categoria`) VALUES
(1, 'Llave Inglesa', 'Herramienta de acero inoxidable para mecánica general', 45.00, 150, 'Herramientas'),
(2, 'Filtro de Aceite', 'Filtro para motor de automóvil, compatible con varios modelos', 25.00, 80, 'Repuestos'),
(3, 'Juego de Llaves Allen', 'Set de llaves métricas de alta resistencia', 30.00, 60, 'Herramientas'),
(4, 'Intercooler', 'Apto para Nissan y Suzuki, mejora el rendimiento del motor', 3000.00, 8, 'Repuestos'),
(5, 'Camiseta Taller', 'Uniforme de trabajo, resistente y cómodo', 20.00, 40, 'Ropa'),
(6, 'Aceite para motor 10W40', 'Lubricante semisintético de alto rendimiento', 35.00, 120, 'Lubricantes'),
(7, 'Batería 12V 60Ah', 'Batería para automóvil con larga duración', 280.00, 25, 'Repuestos'),
(8, 'Juego de destornilladores', 'Incluye cabeza plana y Phillips con mango ergonómico', 22.00, 100, 'Herramientas'),
(9, 'Cable de batería', 'Cable reforzado para conexión de batería a motor', 15.00, 55, 'Accesorios'),
(10, 'Kit de frenos', 'Juego completo de pastillas de freno delanteras', 90.00, 18, 'Repuestos'),
(11, 'Limpiaparabrisas', 'Par de escobillas de silicona para auto', 12.00, 75, 'Accesorios'),
(12, 'Manómetro digital', 'Medidor de presión de neumáticos con pantalla LCD', 40.00, 35, 'Herramientas'),
(13, 'Guantes de trabajo', 'Guantes resistentes al calor y aceites', 8.00, 200, 'Ropa'),
(14, 'Cargador de batería portátil', 'Cargador de emergencia para autos y motos', 150.00, 12, 'Tecnología'),
(15, 'Jack hidráulico', 'Gato hidráulico de 2 toneladas', 110.00, 50, 'Herramientas'),
(18, 'Multímetro Digital', 'Instrumento para medir voltaje, corriente y resistencia', 65.00, 2, 'Herramientas'),
(19, 'Cámara de retroceso', 'Cámara impermeable para asistencia de estacionamiento', 140.00, 9, 'Tecnologia'),
(21, 'Pulidora Eléctrica', 'Pulidora de alta velocidad para carrocería de vehículos', 220.00, 10, 'Herramientas'),
(22, 'Compresor de Aire', 'Compresor portátil ideal para inflado de neumáticos', 340.00, 7, 'Herramientas'),
(23, 'Extintor Automotriz', 'Extintor de incendios compacto para autos', 60.00, 15, 'Seguridad'),
(24, 'Faros LED', 'Faros delanteros LED para mayor visibilidad nocturna', 100.00, 30, 'Accesorios'),
(25, 'Tapetes de Goma', 'Tapetes universales antideslizantes para auto', 45.00, 80, 'Accesorios'),
(26, 'Sensor de Reversa', 'Sensor ultrasónico con alarma sonora', 90.00, 20, 'Tecnología'),
(27, 'Kit de Emergencia', 'Incluye cables, linterna, triángulo y botiquín', 130.00, 12, 'Seguridad'),
(28, 'Aditivo para Gasolina', 'Mejora el rendimiento del motor y limpia inyectores', 18.00, 60, 'Lubricantes'),
(29, 'Porta herramientas', 'Caja organizadora portátil con compartimentos', 55.00, 25, 'Herramientas'),
(30, 'Soporte para celular', 'Soporte magnético para tablero de auto', 20.00, 100, 'Accesorios'),
(31, 'Smartwatch SAMSUNG', 'Compatible solo dispositivos Samsung', 990.00, 6, 'Tecnologia');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
