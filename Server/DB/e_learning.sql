-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2024 at 12:21 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e_learning`
--

-- --------------------------------------------------------

--
-- Table structure for table `chapter`
--

CREATE TABLE `chapter` (
  `ChapterID` int(11) NOT NULL,
  `ChapterName` varchar(255) NOT NULL,
  `ScoreChapter` double DEFAULT 0,
  `UserID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chapter`
--

INSERT INTO `chapter` (`ChapterID`, `ChapterName`, `ScoreChapter`, `UserID`) VALUES
(1, 'Frontend roadmap', 0, 1),
(2, 'Backend roadmap', 0, 1),
(3, 'DevOps', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `CourseID` int(11) NOT NULL,
  `CourseName` varchar(255) NOT NULL,
  `ChapterID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`CourseID`, `CourseName`, `ChapterID`) VALUES
(1, 'Frontend Course', 1),
(2, 'Backend Course', 2),
(3, 'DevOps Course', 3);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `QuestionID` int(11) NOT NULL,
  `QuestionText` varchar(255) NOT NULL,
  `Option1` varchar(255) NOT NULL,
  `Option2` varchar(255) NOT NULL,
  `Option3` varchar(255) NOT NULL,
  `Option4` varchar(255) NOT NULL,
  `CorrectOption` varchar(255) NOT NULL,
  `QuizID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`QuestionID`, `QuestionText`, `Option1`, `Option2`, `Option3`, `Option4`, `CorrectOption`, `QuizID`) VALUES
(1, 'What does HTML stand for?', 'Hyper Text Makeup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'HyperText Markup Language', 'HyperText Markup Language', 1),
(2, 'Which CSS property is used to change the text color of an element?', 'text-style', 'color-text', 'text-color', 'color', 'color', 1),
(3, 'What does the JavaScript function document.getElementById(\'myElement\') do?', 'Retrieves an element by its class name', 'Retrieves an element by its tag name', 'Retrieves an element by its ID', 'Retrieves an element by its name attribute', 'Retrieves an element by its ID', 1),
(4, 'What is the purpose of media queries in responsive web design?', 'They define the structure of the HTML document', 'They handle user authentication in web applications', 'They allow the use of multimedia elements in web pages', 'They adapt the layout based on the device characteristics, such as screen size', 'They adapt the layout based on the device characteristics, such as screen size', 1),
(5, 'What does SQL stand for in the context of Backend development?', 'Simple Query Language', 'Structured Query Language', 'Server Quality Language', 'Sequential Query Logic', 'Structured Query Language', 2),
(6, 'Which of the following is a commonly used server-side programming language for web development?', 'HTML', 'CSS', 'Python', 'Node.js', 'Node.js', 2),
(7, 'What is the primary purpose of a backend framework in web development?', 'Styling and formatting web pages', 'Managing the user interface and interactions', 'Handling server-side logic and database interactions', 'Optimizing website performance for search engines', 'Handling server-side logic and database interactions', 2),
(8, 'What does CRUD represent in the context of database operations?', 'Create, Retrieve, Update, Deploy', 'Compile, Run, Update, Debug', 'Connect, Read, Update, Delete', 'Create, Read, Update, Delete', 'Create, Read, Update, Delete', 2),
(9, 'What is the primary goal of DevOps?', 'Maximizing server utilization', 'Minimizing software development costs', 'Bridging the gap between development and operations', 'Enhancing the graphical user interface (GUI) of applications', 'Bridging the gap between development and operations', 3),
(10, 'Which version control system is commonly used in DevOps for source code management?', 'SVN', 'Git', 'Mercurial', 'CVS', 'Git', 3),
(11, 'What is the purpose of Continuous Integration (CI) in the DevOps lifecycle?', 'Ensuring only manual testing is performed', 'Automating the process of code integration and testing', 'Controlling access to production servers', 'Monitoring application performance in real-time', 'Automating the process of code integration and testing', 3),
(12, 'What is the role of containers, such as Docker, in DevOps?', 'Managing network configurations', 'Virtualizing entire operating systems', 'Providing a standardized environment for application deployment', 'Facilitating communication between development and operations teams', 'Providing a standardized environment for application deployment', 3);

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `QuizID` int(11) NOT NULL,
  `QuizTitle` varchar(255) NOT NULL,
  `ChapterID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`QuizID`, `QuizTitle`, `ChapterID`) VALUES
(1, 'Frontend Quiz', 1),
(2, 'Backend Quiz', 2),
(3, 'DevOps Quiz', 3);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `UserID` int(11) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `TotalScore` double DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserID`, `Username`, `Password`, `TotalScore`, `email`) VALUES
(1, 'Mohamed Amine', 'password123', 0, 'Mohamed.Amin@example.com');

-- --------------------------------------------------------

--
-- Table structure for table `userquiz`
--

CREATE TABLE `userquiz` (
  `UserQuizID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `QuizID` int(11) DEFAULT NULL,
  `Score` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userquiz`
--

INSERT INTO `userquiz` (`UserQuizID`, `UserID`, `QuizID`, `Score`) VALUES
(51, 1, 1, 0),
(52, 1, 2, 0),
(53, 1, 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `video`
--

CREATE TABLE `video` (
  `VideoID` int(11) NOT NULL,
  `VideoTitle` varchar(255) NOT NULL,
  `VideoURL` varchar(255) NOT NULL,
  `CourseID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `video`
--

INSERT INTO `video` (`VideoID`, `VideoTitle`, `VideoURL`, `CourseID`) VALUES
(1, 'Frontend roadmap video 1', '4ofEbImyLdY', 1),
(2, 'Frontend roadmap video 2', '309beMyhXtg', 1),
(3, 'Backend roadmap video 1', 'xw47gcO9oRA', 2),
(4, 'Backend roadmap video 2', '_ee38nL13mE', 2),
(5, 'DevOps video 1', 'XYTS4PCE3pA', 3),
(6, 'DevOps video 2', '7NUmA81ehyk', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chapter`
--
ALTER TABLE `chapter`
  ADD PRIMARY KEY (`ChapterID`),
  ADD KEY `FK_User_Chapter` (`UserID`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`CourseID`),
  ADD KEY `ChapterID` (`ChapterID`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`QuestionID`),
  ADD KEY `QuizID` (`QuizID`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`QuizID`),
  ADD KEY `ChapterID` (`ChapterID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`UserID`);

--
-- Indexes for table `userquiz`
--
ALTER TABLE `userquiz`
  ADD PRIMARY KEY (`UserQuizID`),
  ADD KEY `UserID` (`UserID`),
  ADD KEY `QuizID` (`QuizID`);

--
-- Indexes for table `video`
--
ALTER TABLE `video`
  ADD PRIMARY KEY (`VideoID`),
  ADD KEY `CourseID` (`CourseID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chapter`
--
ALTER TABLE `chapter`
  MODIFY `ChapterID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `CourseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `QuestionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `QuizID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `userquiz`
--
ALTER TABLE `userquiz`
  MODIFY `UserQuizID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `video`
--
ALTER TABLE `video`
  MODIFY `VideoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chapter`
--
ALTER TABLE `chapter`
  ADD CONSTRAINT `FK_User_Chapter` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`);

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`ChapterID`) REFERENCES `chapter` (`ChapterID`);

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`QuizID`) REFERENCES `quiz` (`QuizID`);

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`ChapterID`) REFERENCES `chapter` (`ChapterID`);

--
-- Constraints for table `userquiz`
--
ALTER TABLE `userquiz`
  ADD CONSTRAINT `userquiz_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `user` (`UserID`),
  ADD CONSTRAINT `userquiz_ibfk_2` FOREIGN KEY (`QuizID`) REFERENCES `quiz` (`QuizID`);

--
-- Constraints for table `video`
--
ALTER TABLE `video`
  ADD CONSTRAINT `video_ibfk_1` FOREIGN KEY (`CourseID`) REFERENCES `course` (`CourseID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
