-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fapino_db
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `dishno` int(11) NOT NULL AUTO_INCREMENT,
  `dishname` varchar(255) DEFAULT NULL,
  `cusine` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `foodtype` varchar(255) DEFAULT NULL,
  `restaurantid` int(11) DEFAULT NULL,
  `ratingdish` float DEFAULT NULL,
  `dishprice` float DEFAULT NULL,
  PRIMARY KEY (`dishno`),
  KEY `restaurantid` (`restaurantid`),
  CONSTRAINT `menu_ibfk_1` FOREIGN KEY (`restaurantid`) REFERENCES `user2` (`restaurantid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user1`
--

DROP TABLE IF EXISTS `user1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user1` (
  `customerid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pwdHash` char(60) DEFAULT NULL,
  `phone` char(10) DEFAULT NULL,
  `address` text,
  PRIMARY KEY (`customerid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user1`
--

LOCK TABLES `user1` WRITE;
/*!40000 ALTER TABLE `user1` DISABLE KEYS */;
INSERT INTO `user1` VALUES (1,'YOUR NAME','something@abc.com','$2b$10$P2cQObobg6DLS5JQmM0xo.KRoHvOJA2g0.7jzoyNRdo/g/LPTUY9u','1234567890','GH-017 Gwalior'),(2,'YOUR NAME1','something1@abc.com','$2b$10$Ef6.DIyu4YhAN28QrKIEHuFkdhfChgZ0hEuYDhUdQy40YpgU/m.t2','1234567890','GH-017 Gwalior');
/*!40000 ALTER TABLE `user1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user2`
--

DROP TABLE IF EXISTS `user2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user2` (
  `restaurantid` int(11) NOT NULL AUTO_INCREMENT,
  `resname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `pwdHash` char(60) DEFAULT NULL,
  `phone` char(10) DEFAULT NULL,
  `address` text,
  `ratingres` float DEFAULT NULL,
  PRIMARY KEY (`restaurantid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user2`
--

LOCK TABLES `user2` WRITE;
/*!40000 ALTER TABLE `user2` DISABLE KEYS */;
INSERT INTO `user2` VALUES (1,'Food Craft','foodc@abc.com',NULL,'9123456789','New Town, Gwalior',3),(2,'Da Pizzeria','dapizza@abc.com',NULL,'8979564534','Anywhere, Gwalior',NULL),(3,'Khana Khazana','khanak@abc.com','$2b$10$b580gPlAPMrHaLy1I6hN1OkDypm7BrkclzhQRfjZ6xJDGGV441Rk.','1234567899','Gole ka Mandir, Gwalior',NULL),(4,'Eleven Seven','117@abc.com','$2b$10$yGv5YjXJsFcUjq9wOfWr2.MzG6qBTBgkoNnoyc39XDTG2vL9Gp7B2','9234567890','City Centre, Gwalior',NULL),(5,'Ristro','ris@abc.com','$2b$10$jRJlOZANUGBypZ1TeMu59OEZArR5sBGPNiDFvxw98rlZ9MLYRFaTS','9923456789','City Centre, Gwalior',NULL),(6,'The Bellevuezz','belle@abc.com','$2b$10$bf3Mihd1rZmZQYkKoM0.duCkmbj6aZOy.dD3kv5rHpkitIPA2xrLq','9012345678','City Centre, Gwalior',NULL),(7,'RituRani','ritur@abc.com','$2b$10$1CEsIQDXDac2hEOfKVrIYeWrlrL6MKyxkYssyGXT8RJu.Rb4W/Tna','8823456789','Morena Link Road, Gwalior',NULL),(8,'Burger Queen','burgerq@abc.com','$2b$10$zHWO/bVzV7brEpDl/XHhiOl.M8W.kmmQMVnuIpR7rPBM.W9U02OMm','7723456789','DB Mall, Gwalior',NULL),(9,'The Aaan Baan Shaan Singh','tabs@abc.com','$2b$10$2tGqTR5TRj/Afmw36ifvlusfmu4prkNLWxxOGf3qCfIWp6j/vPfb6','6623456789','DD Mall, Gwalior',NULL),(10,'Coffeelogy','coffee@abc.com','$2b$10$WwR8VKwIFvpNncOJ6Q3DCuimJzpPoY1QxOgvAiBB3OfY6Z5/wKjRG','5523456789','Unknown Rd., Gwalior',NULL),(11,'The Kaidi Cafe','kaidicafe@abc.com','$2b$10$YEMkplsRZEAIlfQJ591l0./q077h6Q8004aDD0FakiUhsx45m3Ndu','4423456789','Unknown Rd., Gwalior',NULL),(12,'Navy Blue Longue','nbl@abc.com','$2b$10$Skt3SAibI.pmUn73PIM6vegUwgpHlVh.bOji4k5mHJ4DRx7cbNj7y','3323456789','DD Mall, Gwalior',NULL),(13,'Pizza Bunglow','pizzab@abc.com','$2b$10$pJKHdn0odN/vxCQlCYqH1OSkcJmpJkDBw7eqEXdb.Gh7kkoxV0c6K','2223456789','DB Mall, Gwalior',NULL),(14,'GFC (Gawalior Fried Chicken)','gfc@abc.com','$2b$10$lXsmQs7lWHPm/cCZJkKCvukKfR0D4vHg8xM7zaUPztZOMej7kgtRa','1123456789','DB Mall, Gwalior',NULL);
/*!40000 ALTER TABLE `user2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'fapino_db'
--

--
-- Dumping routines for database 'fapino_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-12 10:11:46
use database Fapino_db
