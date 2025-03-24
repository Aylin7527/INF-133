-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-03-2025 a las 20:46:43
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
-- Base de datos: `musicsnsmp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canciones`
--

CREATE TABLE `canciones` (
  `id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `artista` varchar(100) NOT NULL,
  `album` varchar(100) DEFAULT NULL,
  `genero` varchar(50) DEFAULT NULL,
  `duracion` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `canciones`
--

INSERT INTO `canciones` (`id`, `titulo`, `artista`, `album`, `genero`, `duracion`) VALUES
(1, 'Ojos Marrones', 'Lasso', 'Ojos Marrones', 'Pop', '00:03:40'),
(2, 'Training Season', 'Dua Lipa', 'Training Season', 'Pop', '00:03:29'),
(3, 'Antes de Ti', 'Mon Laferte', 'La Trenza', 'Pop', '00:03:36'),
(4, 'Chihiro', 'Billie Eilish', 'HIT ME HARD AND SOFT', 'Alternative', '00:04:00'),
(5, 'Lovely', 'Billie Eilish', '13 Reasons Why (Soundtrack)', 'Alternative', '00:03:20'),
(6, 'Bellyache', 'Billie Eilish', 'dont smile at me', 'Alternative', '00:02:59'),
(7, 'Happier Than Ever', 'Billie Eilish', 'Happier Than Ever', 'Alternative', '00:04:58'),
(8, 'Everything I Wanted', 'Billie Eilish', 'Everything I Wanted', 'Alternative', '00:04:05'),
(9, 'Therefore I Am', 'Billie Eilish', 'Happier Than Ever', 'Alternative', '00:02:54'),
(10, 'Shinunoga E-Wa', 'Fujii Kaze', 'Help Ever Hurt Never', 'J-Pop', '00:03:34'),
(11, 'Beggin', 'Måneskin', 'Chosen', 'Rock', '00:03:31'),
(12, 'Chachachá', 'Jósean Log', 'Chachachá', 'Indie', '00:03:10'),
(13, 'Die With a Smile', 'Lady Gaga ft. Bruno Mars', 'Single', 'Pop', '00:03:50'),
(14, 'Hasta la Raíz', 'Natalia Lafourcade', 'Hasta la Raíz', 'Pop', '00:03:41'),
(15, 'Jam', 'Stray Kids', 'Oddinary', 'K-Pop', '00:03:02'),
(16, 'Back Door', 'Stray Kids', 'IN生', 'K-Pop', '00:03:08'),
(17, 'Giant', 'Stray Kids', 'MAXIDENT', 'K-Pop', '00:03:45'),
(18, 'I Like It', 'Stray Kids', 'IN生', 'K-Pop', '00:03:12'),
(19, 'Chk Chk Boom', 'Stray Kids', 'ROCK-STAR', 'K-Pop', '00:03:24'),
(20, 'Christmas EveL', 'Stray Kids', 'Christmas EveL', 'K-Pop', '00:03:13'),
(21, 'El Bolero', 'Milo J', 'El Bolero', 'Urbano', '00:03:22'),
(22, 'Rara Vez', 'Milo J', 'Rara Vez', 'Urbano', '00:02:55'),
(23, 'BZRP Music Sessions #57', 'Milo J', 'BZRP Music Sessions', 'Urbano', '00:03:40'),
(24, 'Fairytale', 'Alexander', 'Fairytale', 'Pop', '00:03:03'),
(25, 'Antídoto', 'Alex Ponce', 'Antídoto', 'Pop', '00:03:11'),
(26, 'Cerrando Ciclos', 'Alex Ponce', 'Cerrando Ciclos', 'Pop', '00:03:20'),
(27, 'Fuiste', 'Alex Ponce', 'Fuiste', 'Pop', '00:03:18'),
(28, 'Descomplicados', 'Alex Ponce', 'Descomplicados', 'Pop', '00:03:27'),
(29, 'Plan', 'Alex Ponce', 'Plan', 'Pop', '00:03:14'),
(30, 'Sol', 'Willian Sol', 'Sol', 'Sertanejo', '00:03:45'),
(31, 'Golden Hour', 'JVKE', 'this is what ____ feels like', 'Pop', '00:03:29'),
(32, 'This Is What Heartbreak Feels Like', 'JVKE', 'this is what ____ feels like', 'Pop', '00:02:44'),
(33, 'Entre Nosotros Remix', 'Lit Killah ft. Tiago PZK, Maria Becerra, Nicki Nicole', 'Single', 'Urbano', '00:03:50'),
(34, 'La Trampa Es Ley', 'Lit Killah', 'MAWZ', 'Urbano', '00:03:14'),
(35, 'Yo Sé Que Tú', 'Lit Killah', 'MAWZ', 'Urbano', '00:02:45'),
(36, 'En la Oscuridad', 'Lit Killah', 'Single', 'Urbano', '00:03:35'),
(37, 'Mala Mía', 'Lit Killah', 'MAWZ', 'Urbano', '00:03:10'),
(38, 'Imagine Dragons ft. Ado', 'Imagine Dragons ft. Ado', 'Single', 'Rock', '00:03:32'),
(39, 'Londres', 'Alizzy', 'Londres', 'Indie', '00:03:25'),
(40, 'Textos de tu Ex', 'Alizzy', 'Single', 'Indie', '00:03:12'),
(41, 'Still With You', 'Jung Kook', 'Single', 'K-Pop', '00:03:55'),
(42, 'Embrujo', 'Carolina Gaitán', 'Embrujo', 'Pop', '00:03:44'),
(43, 'Qué Se Dice de Mí', 'Carolina Gaitán', 'Qué Se Dice de Mí', 'Pop', '00:03:30');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `canciones`
--
ALTER TABLE `canciones`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `canciones`
--
ALTER TABLE `canciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
