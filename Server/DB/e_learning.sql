-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 12:16 AM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`QuestionID`),
  ADD KEY `QuizID` (`QuizID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `QuestionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `question`
--
ALTER TABLE `question`
  ADD CONSTRAINT `question_ibfk_1` FOREIGN KEY (`QuizID`) REFERENCES `quiz` (`QuizID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
