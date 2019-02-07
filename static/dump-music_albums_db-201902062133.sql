-- MySQL dump 10.17  Distrib 10.3.12-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: music_albums_db
-- ------------------------------------------------------
-- Server version	10.3.12-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `albums`
--

DROP TABLE IF EXISTS `albums`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `albums` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` year(4) NOT NULL,
  `artist_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `albums_artist_id_foreign` (`artist_id`),
  CONSTRAINT `albums_artist_id_foreign` FOREIGN KEY (`artist_id`) REFERENCES `artists` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `albums`
--

LOCK TABLES `albums` WRITE;
/*!40000 ALTER TABLE `albums` DISABLE KEYS */;
INSERT INTO `albums` VALUES (1,'Fallen',2004,1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(2,'The Open Door',2006,1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(3,'Evanescence',2011,1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(4,'Got to Be There',1972,2,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(5,'Ben',1972,2,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(6,'Bleach',1989,3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(7,'Nevermind',1991,3,'2019-02-07 05:27:02','2019-02-07 05:27:02');
/*!40000 ALTER TABLE `albums` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `artists`
--

DROP TABLE IF EXISTS `artists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `artists` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `artists`
--

LOCK TABLES `artists` WRITE;
/*!40000 ALTER TABLE `artists` DISABLE KEYS */;
INSERT INTO `artists` VALUES (1,'Evanescence','2019-02-07 05:27:02','2019-02-07 05:27:02'),(2,'Michael Jackson','2019-02-07 05:27:02','2019-02-07 05:27:02'),(3,'Nirvana','2019-02-07 05:27:02','2019-02-07 05:27:02');
/*!40000 ALTER TABLE `artists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (17,'2014_10_12_000000_create_users_table',1),(18,'2019_02_06_234552_create_artists_table',1),(19,'2019_02_06_234558_create_albums_table',1),(20,'2019_02_06_234603_create_songs_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `songs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `album_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `songs_album_id_foreign` (`album_id`),
  CONSTRAINT `songs_album_id_foreign` FOREIGN KEY (`album_id`) REFERENCES `albums` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `songs`
--

LOCK TABLES `songs` WRITE;
/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
INSERT INTO `songs` VALUES (1,'Going Under',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(2,'Bring Me To Life',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(3,'Everybody\'s Fool',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(4,'Haunted',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(5,'Tourniquet',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(6,'Imaginary',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(7,'Taking Over Me',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(8,'Hello',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(9,'My Last Breath',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(10,'Whisper',1,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(11,'What You Want',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(12,NULL,3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(13,'The Change',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(14,'My Heart Is Broken',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(15,'The Other Side',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(16,'Erase This',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(17,'Lost In Paradise',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(18,'Sick',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(19,'End Of The Dream',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(20,'Oceans',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(21,'Never Go Back',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(22,'Swimming Home',3,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(23,'Ain\'t No Sunshine',4,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(24,'I Wanna Be Where You Are',4,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(25,'Girl Don\'t Take Your Love from Mee',4,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(26,'In Our Small Way',4,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(27,'Got to Be There',4,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(28,'Ben',5,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(29,'Greatest Show On Earth',5,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(30,'People Make the World Go \'Round',5,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(31,'We\'ve Got a Good Thing Going',5,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(32,'Everybody\'s Somebody\'s Fool',5,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(33,'Blew',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(34,'Floyd the Barber',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(35,'About a Girl',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(36,'School',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(37,'Love Buzz',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(38,'Paper Cuts',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(39,'Negative Creep',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(40,'Scoff',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(41,'Swap Meet',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(42,'Mr. Moustache',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(43,'Sifting',6,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(44,'Smells Like Teen Spirit',7,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(45,'In Bloom',7,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(46,'Come As You Are',7,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(47,'Breed',7,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(48,'Lithium',7,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(49,'Polly',7,'2019-02-07 05:27:02','2019-02-07 05:27:02'),(50,'Territorial Pissings',7,'2019-02-07 05:27:02','2019-02-07 05:27:02');
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jorge','2019-02-07 05:27:02','2019-02-07 05:27:02'),(2,'Daniel','2019-02-07 05:27:02','2019-02-07 05:27:02'),(3,'Verónica','2019-02-07 05:27:02','2019-02-07 05:27:02'),(4,'Ailyn','2019-02-07 05:27:02','2019-02-07 05:27:02');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'music_albums_db'
--
