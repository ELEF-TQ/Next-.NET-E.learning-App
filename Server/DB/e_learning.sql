-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: e_learning
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `chapter`
--

DROP TABLE IF EXISTS `chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chapter` (
  `ChapterID` int NOT NULL AUTO_INCREMENT,
  `ChapterName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ScoreChapter` double DEFAULT NULL,
  PRIMARY KEY (`ChapterID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chapter`
--

LOCK TABLES `chapter` WRITE;
/*!40000 ALTER TABLE `chapter` DISABLE KEYS */;
INSERT INTO `chapter` VALUES (1,'Introduction',NULL),(2,'Advanced Topics',NULL);
/*!40000 ALTER TABLE `chapter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `CourseID` int NOT NULL AUTO_INCREMENT,
  `CourseName` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ChapterID` int DEFAULT NULL,
  PRIMARY KEY (`CourseID`),
  KEY `ChapterID` (`ChapterID`),
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`ChapterID`) REFERENCES `chapter` (`ChapterID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'Web Development Basics',1),(2,'React.js Fundamentals',2);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `QuestionID` int NOT NULL AUTO_INCREMENT,
  `QuestionText` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Option1` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Option2` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Option3` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Option4` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `CorrectOption` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `QuizID` int DEFAULT NULL,
  PRIMARY KEY (`QuestionID`),
  KEY `QuizID` (`QuizID`),
  CONSTRAINT `question_ibfk_1` FOREIGN KEY (`QuizID`) REFERENCES `quiz` (`QuizID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'What does HTML stand for?','Hyper Text Markup Language','Highly Typed Machine Learning','Home Tool Markup Language','Hyper Transfer Markup Language','Hyper Text Markup Language',1),(2,'Which CSS property is used to change the background color of an element?','color','background-color','bgcolor','background-style','background-color',1),(3,'What is the core concept of React.js?','MVC Architecture','Virtual DOM','Two-way data binding','Dependency Injection','Virtual DOM',2),(4,'In React.js, what is used to pass data to a component from outside?','state','props','setState','data','props',2);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz` (
  `QuizID` int NOT NULL AUTO_INCREMENT,
  `QuizTitle` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `ChapterID` int DEFAULT NULL,
  PRIMARY KEY (`QuizID`),
  KEY `ChapterID` (`ChapterID`),
  CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`ChapterID`) REFERENCES `chapter` (`ChapterID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (1,'HTML and CSS Quiz',1),(2,'React.js Quiz',2);
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `UserID` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `Password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `TotalScore` double DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`UserID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'john_doe','password123',350,'example@example.com'),(2,'jane_smith','securepassword',0,'example2@example.com'),(3,'test','test',0,'test@gmail.com'),(4,'string','string',NULL,'string');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userquiz`
--

DROP TABLE IF EXISTS `userquiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userquiz` (
  `UserQuizID` int NOT NULL AUTO_INCREMENT,
  `UserID` int DEFAULT NULL,
  `QuizID` int DEFAULT NULL,
  `Score` int DEFAULT NULL,
  PRIMARY KEY (`UserQuizID`),
  KEY `UserID` (`UserID`),
  KEY `QuizID` (`QuizID`),
  CONSTRAINT `userquiz_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  CONSTRAINT `userquiz_ibfk_2` FOREIGN KEY (`QuizID`) REFERENCES `quiz` (`QuizID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userquiz`
--

LOCK TABLES `userquiz` WRITE;
/*!40000 ALTER TABLE `userquiz` DISABLE KEYS */;
INSERT INTO `userquiz` VALUES (1,1,1,0),(2,1,1,0),(3,1,1,0),(4,1,1,50),(5,1,1,50),(6,1,1,100),(7,1,1,50),(8,1,1,100);
/*!40000 ALTER TABLE `userquiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `video` (
  `VideoID` int NOT NULL AUTO_INCREMENT,
  `VideoTitle` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `VideoURL` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `CourseID` int DEFAULT NULL,
  PRIMARY KEY (`VideoID`),
  KEY `CourseID` (`CourseID`),
  CONSTRAINT `video_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `course` (`CourseID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,'HTML Basics','https://example.com/html-basics',1),(2,'CSS Fundamentals','https://example.com/css-fundamentals',1),(3,'Introduction to React.js','https://example.com/react-intro',2),(4,'State and Props in React.js','https://example.com/react-state-props',2);
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-06  1:27:12
