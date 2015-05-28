-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Gegenereerd op: 27 mei 2015 om 11:03
-- Serverversie: 5.5.38
-- PHP-versie: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `erfgoedenlocatie`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `gg_gemeentes`
--

CREATE TABLE `gg_gemeentes` (
`id` int(11) NOT NULL,
  `hgid` varchar(255) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `gg_uri` varchar(255) NOT NULL,
  `gg_uri_amco` varchar(255) NOT NULL,
  `amco` varchar(255) NOT NULL,
  `cbscode` varchar(255) NOT NULL,
  `geonames` varchar(255) NOT NULL,
  `startjaar` varchar(255) NOT NULL,
  `eindjaar` varchar(255) NOT NULL,
  `provincie` varchar(255) NOT NULL,
  `departement` varchar(255) NOT NULL,
  `absorbed` varchar(255) NOT NULL,
  `absorbedBy` varchar(255) NOT NULL,
  `originated` varchar(255) NOT NULL,
  `originatedFrom` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=1674 DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `gg_geometries`
--

CREATE TABLE `gg_geometries` (
`id` int(11) NOT NULL,
  `hgid` varchar(255) NOT NULL,
  `naam` varchar(255) NOT NULL,
  `gg_uri` varchar(255) NOT NULL,
  `geojson` text NOT NULL,
  `startjaar_geom` int(11) NOT NULL,
  `eindjaar_geom` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=2882 DEFAULT CHARSET=utf8;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `gg_gemeentes`
--
ALTER TABLE `gg_gemeentes`
 ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `gg_geometries`
--
ALTER TABLE `gg_geometries`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `gg_gemeentes`
--
ALTER TABLE `gg_gemeentes`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1674;
--
-- AUTO_INCREMENT voor een tabel `gg_geometries`
--
ALTER TABLE `gg_geometries`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2882;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
