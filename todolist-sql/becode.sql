	-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Client :  localhost:3306
-- Généré le :  Lun 15 Avril 2019 à 09:03
-- Version du serveur :  5.7.25-0ubuntu0.18.10.2
-- Version de PHP :  7.2.15-0ubuntu0.18.10.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `becode`
--

-- --------------------------------------------------------

--
-- Structure de la table `archive`
--

CREATE TABLE `archive` (
  `id` int(11) NOT NULL,
  `tache` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `archive`
--

INSERT INTO `archive` (`id`, `tache`) VALUES
(162, 'Travailler sur React'),
(163, 'Boire comme un trou '),
(164, 'Faire la fiesta');

-- --------------------------------------------------------

--
-- Structure de la table `hiking`
--

CREATE TABLE `hiking` (
  `id` int(11) NOT NULL,
  `name` varchar(400) NOT NULL,
  `difficulty` char(30) NOT NULL,
  `distance` int(11) NOT NULL,
  `duration` time NOT NULL,
  `height_difference` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `hiking`
--

INSERT INTO `hiking` (`id`, `name`, `difficulty`, `distance`, `duration`, `height_difference`) VALUES
(1, 'Le sommet du Piton Béthoune par le tour du Bonnet de Prêtre ', 'très difficile', 6, '04:00:00', 650),
(37, 'La Boucle de la Pointe de la Table et Puits Arabe', 'très facile', 4, '01:00:00', 80),
(38, 'De la Route d\'Illet à Cordes à Illet Fleurs Jaunes', 'difficile', 3, '02:45:00', 420),
(39, 'Le Sentier Littoral de Saint Philippe Tremblet', 'facile', 23, '06:00:00', 100),
(40, 'Du Tevelave à la Ferme Deveaux', 'medium', 4, '01:45:00', 350);

-- --------------------------------------------------------

--
-- Structure de la table `meteo`
--

CREATE TABLE `meteo` (
  `id` int(10) NOT NULL,
  `ville` varchar(90) NOT NULL,
  `haut` int(10) NOT NULL,
  `bas` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `meteo`
--

INSERT INTO `meteo` (`id`, `ville`, `haut`, `bas`) VALUES
(1, 'Bruxelles', 27, 13),
(2, 'Liège', 25, 15),
(3, 'Namur', 26, 15),
(4, 'Charleroi', 25, 12),
(32, 'Spiennes', 35, 12);

-- --------------------------------------------------------

--
-- Structure de la table `todolist`
--

CREATE TABLE `todolist` (
  `id` int(10) NOT NULL,
  `tache` varchar(255) NOT NULL,
  `deadline` date DEFAULT NULL,
  `heurefin` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `todolist`
--

INSERT INTO `todolist` (`id`, `tache`, `deadline`, `heurefin`) VALUES
(100, 'Anniversaire Laura', '2019-04-16', '10:00:00'),
(101, 'Anniversaire Cookie', '2019-04-16', '10:00:00'),
(103, 'Rendre ma to-do-list jolie', '2019-04-12', '16:00:00');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `archive`
--
ALTER TABLE `archive`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `hiking`
--
ALTER TABLE `hiking`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `meteo`
--
ALTER TABLE `meteo`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `archive`
--
ALTER TABLE `archive`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;
--
-- AUTO_INCREMENT pour la table `hiking`
--
ALTER TABLE `hiking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
--
-- AUTO_INCREMENT pour la table `meteo`
--
ALTER TABLE `meteo`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT pour la table `todolist`
--
ALTER TABLE `todolist`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
