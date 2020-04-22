-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2020 at 12:41 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `annoucements`
--

CREATE TABLE `annoucements` (
  `ID` int(11) NOT NULL,
  `IS_QUALITY` tinyint(1) DEFAULT NULL,
  `CONTENT` text NOT NULL,
  `DATE` date NOT NULL,
  `TIME` time NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `USER_ROLE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `annoucements`
--

INSERT INTO `annoucements` (`ID`, `IS_QUALITY`, `CONTENT`, `DATE`, `TIME`, `USER_ID`, `USER_ROLE`) VALUES
(21, 1, 'hey there', '2020-03-31', '02:17:13', 18, 2),
(22, 0, 'from your lovely admin', '2020-03-31', '02:24:02', 1, 1),
(24, 0, 'hiiii', '2020-04-13', '22:39:21', 3, 4),
(25, 0, 'hellooo', '2020-04-13', '22:43:00', 1, 1),
(26, 1, 'hellooo quality unit', '2020-04-13', '22:43:17', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `ID` int(11) NOT NULL,
  `CODE` varchar(50) NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `HOURS` int(11) NOT NULL,
  `DEPT_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`ID`, `CODE`, `NAME`, `HOURS`, `DEPT_ID`) VALUES
(9, 'CS320', 'Compiler', 3, 1),
(13, 'CS221', 'Assembly', 3, 1),
(14, 'AR101', 'Grammer1', 2, 4),
(15, 'IT200', 'Interfaces Design', 2, 2),
(16, 'IT331', 'Visual Programming', 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `cr`
--

CREATE TABLE `cr` (
  `ID` int(11) NOT NULL,
  `A_ID` int(11) DEFAULT NULL,
  `B1_ID` int(11) DEFAULT NULL,
  `B2_ID` int(11) DEFAULT NULL,
  `C1_ID` int(11) DEFAULT NULL,
  `C2_ID` int(11) DEFAULT NULL,
  `D_ID` int(11) DEFAULT NULL,
  `E1_ID` int(11) DEFAULT NULL,
  `E2_ID` int(11) DEFAULT NULL,
  `F_ID` int(11) DEFAULT NULL,
  `G_ID` int(11) DEFAULT NULL,
  `FEEDBACK` text DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  `DATE` date DEFAULT NULL,
  `TIME` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr`
--

INSERT INTO `cr` (`ID`, `A_ID`, `B1_ID`, `B2_ID`, `C1_ID`, `C2_ID`, `D_ID`, `E1_ID`, `E2_ID`, `F_ID`, `G_ID`, `FEEDBACK`, `STATUS`, `DATE`, `TIME`) VALUES
(1, 31, 6, 31, 31, 31, 31, 31, 31, 31, 31, NULL, 7, '2020-04-17', '21:12:23'),
(2, 33, 8, 33, 33, 33, 33, 33, 33, 33, 33, 'Your course Reports lacks appreciation of Mulan, try harder.', 5, '2020-04-18', '03:13:00'),
(3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(4, 35, 9, 35, 35, 35, 35, 35, 35, 35, 35, 'You ought to change it all.', 5, '2020-04-19', '02:17:06'),
(5, 36, 10, 36, 36, 36, 36, 36, 36, 36, 36, 'You need to fix that and that.', 3, '2020-04-19', '06:16:34'),
(6, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(11, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cr.a`
--

CREATE TABLE `cr.a` (
  `ID` int(11) NOT NULL,
  `INSTRUCTOR` text DEFAULT NULL,
  `LOCATION` varchar(250) DEFAULT NULL,
  `NUM` varchar(250) DEFAULT NULL,
  `START` varchar(250) DEFAULT NULL,
  `COMPLET` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.a`
--

INSERT INTO `cr.a` (`ID`, `INSTRUCTOR`, `LOCATION`, `NUM`, `START`, `COMPLET`) VALUES
(1, '', '', '', '', ''),
(2, 'intruc', 'loca', 'num', 'sta', 'com'),
(3, '', '', '', '', ''),
(28, '', '', '', '', ''),
(29, '', '', '', '', ''),
(30, '', '', '', '', ''),
(31, '', '', '', '', ''),
(32, '', '', '', '', ''),
(33, 'new', 'new', 'new', 'new', 'new'),
(34, 'i', 'g', 'e', '', 'f'),
(35, 'e', 'e', 'e', 'e', 'e'),
(36, '2', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `cr.b1`
--

CREATE TABLE `cr.b1` (
  `ID` int(11) NOT NULL,
  `PLANNED1` int(11) DEFAULT NULL,
  `PLANNED2` int(11) DEFAULT NULL,
  `PLANNED3` int(11) DEFAULT NULL,
  `PLANNED4` int(11) DEFAULT NULL,
  `ACTUAL1` int(11) DEFAULT NULL,
  `ACTUAL2` int(11) DEFAULT NULL,
  `ACTUAL3` int(11) DEFAULT NULL,
  `ACTUAL4` int(11) DEFAULT NULL,
  `TOTAL1` int(11) DEFAULT NULL,
  `TOTAL2` int(11) DEFAULT NULL,
  `OTHER` varchar(250) DEFAULT NULL,
  `TOPICS` text DEFAULT NULL,
  `REASON` text DEFAULT NULL,
  `EXTENT` text DEFAULT NULL,
  `ACTION` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.b1`
--

INSERT INTO `cr.b1` (`ID`, `PLANNED1`, `PLANNED2`, `PLANNED3`, `PLANNED4`, `ACTUAL1`, `ACTUAL2`, `ACTUAL3`, `ACTUAL4`, `TOTAL1`, `TOTAL2`, `OTHER`, `TOPICS`, `REASON`, `EXTENT`, `ACTION`) VALUES
(3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'please', 'topiv', 'rr', 'ex', 'cc'),
(6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'ww', 'tt', 'rr', 'ee', 'cc'),
(7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'please', 'tt', 'rr', 'ee', 'cc'),
(8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 'please new', 'tt new', 'rr new', 'ee new', 'cc new'),
(9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'pleaseee', 't', 'e', 'e', 'e'),
(10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'please', 'f', 'f', 'f', 'f');

-- --------------------------------------------------------

--
-- Table structure for table `cr.b2`
--

CREATE TABLE `cr.b2` (
  `ID` int(11) NOT NULL,
  `PLANNED` text DEFAULT NULL,
  `IMPLEMENTED1` text DEFAULT NULL,
  `DIFF1` text DEFAULT NULL,
  `ACTION1` text DEFAULT NULL,
  `ACTIVITIES` text DEFAULT NULL,
  `IMPLEMENTED2` text DEFAULT NULL,
  `DIFF2` text DEFAULT NULL,
  `ACTION2` text DEFAULT NULL,
  `METHOD` text DEFAULT NULL,
  `CONC` text DEFAULT NULL,
  `RECOMMEND` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.b2`
--

INSERT INTO `cr.b2` (`ID`, `PLANNED`, `IMPLEMENTED1`, `DIFF1`, `ACTION1`, `ACTIVITIES`, `IMPLEMENTED2`, `DIFF2`, `ACTION2`, `METHOD`, `CONC`, `RECOMMEND`) VALUES
(1, '', '', '', '', '', '', '', '', '', '', ''),
(2, 'plann', 'yessss', 'diff, there are lots and lots', 'action', 'activ', 'yes!', 'diff: 1. this and that', 'acsion', 'method1: grmeag\r\nmethod2: tragrea', 'conc', 'I recommend you watch Mulan 1998'),
(3, '', '', '', '', '', '', '', '', '', '', ''),
(28, '', '', '', '', '', '', '', '', '', '', ''),
(29, '', '', '', '', '', '', '', '', '', '', ''),
(30, '', '', '', '', '', '', '', '', '', '', ''),
(31, '', '', '', '', '', '', '', '', '', '', ''),
(32, '', '', '', '', '', '', '', '', '', '', ''),
(33, 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'),
(34, 'ff', 'f', 'f', 'fe', 'f', 'f', 'f', 'f', 'f', 'f', 'f'),
(35, 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'),
(36, 'f', 'f', 'f', 'ff', 'f', 'f', 'f', 'f', 'f', 'f', 'f');

-- --------------------------------------------------------

--
-- Table structure for table `cr.c1`
--

CREATE TABLE `cr.c1` (
  `ID` int(11) NOT NULL,
  `AA` int(11) NOT NULL,
  `A` int(11) NOT NULL,
  `BB` int(11) NOT NULL,
  `B` int(11) NOT NULL,
  `CC` int(11) NOT NULL,
  `C` int(11) NOT NULL,
  `DD` int(11) NOT NULL,
  `D` int(11) NOT NULL,
  `F` int(11) NOT NULL,
  `DENIAL` int(11) NOT NULL,
  `PROGRESS` int(11) NOT NULL,
  `MISAENG` int(11) NOT NULL,
  `PASS` int(11) NOT NULL,
  `FAIL` int(11) NOT NULL,
  `WITHDRAWN` int(11) NOT NULL,
  `COMMENTS` text NOT NULL,
  `RECOMMEND` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.c1`
--

INSERT INTO `cr.c1` (`ID`, `AA`, `A`, `BB`, `B`, `CC`, `C`, `DD`, `D`, `F`, `DENIAL`, `PROGRESS`, `MISAENG`, `PASS`, `FAIL`, `WITHDRAWN`, `COMMENTS`, `RECOMMEND`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', ''),
(2, 100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'comment1: You better show', 'Again, I recommend you Mulan 1998'),
(3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', ''),
(28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', ''),
(29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', ''),
(30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', ''),
(31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', ''),
(32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '', ''),
(33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'new', 'new'),
(34, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'g', 'g'),
(35, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'tt', 'tt'),
(36, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `cr.c2`
--

CREATE TABLE `cr.c2` (
  `ID` int(11) NOT NULL,
  `AA` int(11) NOT NULL,
  `A` int(11) NOT NULL,
  `BB` int(11) NOT NULL,
  `B` int(11) NOT NULL,
  `CC` int(11) NOT NULL,
  `C` int(11) NOT NULL,
  `DD` int(11) NOT NULL,
  `D` int(11) NOT NULL,
  `F` int(11) NOT NULL,
  `DENIAL` int(11) NOT NULL,
  `PROGRESS` int(11) NOT NULL,
  `MISAENG` int(11) NOT NULL,
  `PASS` int(11) NOT NULL,
  `FAIL` int(11) NOT NULL,
  `WITHDRAWN` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.c2`
--

INSERT INTO `cr.c2` (`ID`, `AA`, `A`, `BB`, `B`, `CC`, `C`, `DD`, `D`, `F`, `DENIAL`, `PROGRESS`, `MISAENG`, `PASS`, `FAIL`, `WITHDRAWN`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2),
(3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(28, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
(33, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(34, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(35, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1),
(36, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `cr.d`
--

CREATE TABLE `cr.d` (
  `ID` int(11) NOT NULL,
  `KNOWLEDGE1` text NOT NULL,
  `KNOWLEDGE2` text NOT NULL,
  `KNOWLEDGE3` text NOT NULL,
  `KNOWLEDGE4` text NOT NULL,
  `KNOWLEDGE5` text NOT NULL,
  `KNOWLEDGE6` text NOT NULL,
  `SKILLS1` text NOT NULL,
  `SKILLS2` text NOT NULL,
  `SKILLS3` text NOT NULL,
  `SKILLS4` text NOT NULL,
  `SKILLS5` text NOT NULL,
  `SKILLS6` text NOT NULL,
  `COMPETENCE1` text NOT NULL,
  `COMPETENCE2` text NOT NULL,
  `COMPETENCE3` text NOT NULL,
  `COMPETENCE4` text NOT NULL,
  `COMPETENCE5` text NOT NULL,
  `COMPETENCE6` text NOT NULL,
  `RECOMMEND` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.d`
--

INSERT INTO `cr.d` (`ID`, `KNOWLEDGE1`, `KNOWLEDGE2`, `KNOWLEDGE3`, `KNOWLEDGE4`, `KNOWLEDGE5`, `KNOWLEDGE6`, `SKILLS1`, `SKILLS2`, `SKILLS3`, `SKILLS4`, `SKILLS5`, `SKILLS6`, `COMPETENCE1`, `COMPETENCE2`, `COMPETENCE3`, `COMPETENCE4`, `COMPETENCE5`, `COMPETENCE6`, `RECOMMEND`) VALUES
(1, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(2, 'k1', 'k2', 'k3', 'k4', 'k5', 'k6', 's1', 's2', 's3', 's4', 's5', 's6', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'For the third time, go watch Mulan'),
(3, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(28, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(29, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(30, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(31, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(32, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(33, 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'n'),
(34, 'g', 'g', 'f', 'f', 'f', 'f', 'f', 'g', 'f', 'f', 'f', 'f', 'f', 'g', 'g', 'g', 'g', 'g', 'h'),
(35, 't', 't', 't', 't', 't', 't', 'g', 'g', 'g', 'g', 'g', 'gg', 'g', 'e', 'e', 'e', 'e', 'e', 'f'),
(36, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `cr.e1`
--

CREATE TABLE `cr.e1` (
  `ID` int(11) NOT NULL,
  `DATE` date NOT NULL,
  `NUM` int(11) NOT NULL,
  `PREC` int(11) NOT NULL,
  `RESULT` varchar(250) NOT NULL,
  `STUDENT1` text NOT NULL,
  `STUDENT2` text NOT NULL,
  `STUDENT3` text NOT NULL,
  `COURSE1` text NOT NULL,
  `COURSE2` text NOT NULL,
  `COURSE3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.e1`
--

INSERT INTO `cr.e1` (`ID`, `DATE`, `NUM`, `PREC`, `RESULT`, `STUDENT1`, `STUDENT2`, `STUDENT3`, `COURSE1`, `COURSE2`, `COURSE3`) VALUES
(1, '0000-00-00', 0, 0, '', 'Strength:', '', 'Areas For Improvment:', '', 'Suggestions for Improvement:', ''),
(2, '2001-11-22', 7, 70, 'perfect', 'Strength:\r\n1. student1', 'course1', 'Areas For Improvment:\r\n1. student2', '', 'Suggestions for Improvement:\r\n1. student3', ''),
(3, '0000-00-00', 0, 0, '', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', ''),
(28, '0000-00-00', 0, 0, '', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', ''),
(29, '0000-00-00', 0, 0, '', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', ''),
(30, '0000-00-00', 0, 0, '', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', ''),
(31, '0000-00-00', 0, 0, '', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', ''),
(32, '0000-00-00', 0, 0, '', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', ''),
(33, '2020-04-30', 1, 1122, 'new', 'new', 'new', 'new', 'new', 'new', 'new'),
(34, '2020-04-01', 1, 1, '1', 'Strength:\r\n11', 'Areas For Improvment:\r\nff', 'Suggestions for Improvement:\r\nff', '1', '1', '1'),
(35, '2020-04-04', 2, 2, 'olease', 'Strength: h', 'Areas For Improvment: h', 'Suggestions for Improvement: h', 'fre', 'ferf', 'er'),
(36, '0001-01-01', 1, 1, '1', '1Strength:', '1Areas For Improvment:', '1Suggestions for Improvement:', '1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `cr.e2`
--

CREATE TABLE `cr.e2` (
  `ID` int(11) NOT NULL,
  `METHOD` varchar(250) NOT NULL,
  `DATE` date NOT NULL,
  `STUDENT1` text NOT NULL,
  `STUDENT2` text NOT NULL,
  `STUDENT3` text NOT NULL,
  `COURSE1` text NOT NULL,
  `COURSE2` text NOT NULL,
  `COURSE3` text NOT NULL,
  `RECOMMEND` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.e2`
--

INSERT INTO `cr.e2` (`ID`, `METHOD`, `DATE`, `STUDENT1`, `STUDENT2`, `STUDENT3`, `COURSE1`, `COURSE2`, `COURSE3`, `RECOMMEND`) VALUES
(1, '', '0000-00-00', 'Strength:', '', 'Areas For Improvment:', '', 'Suggestions for Improvement:', '', ''),
(2, 'method: exams', '2002-02-05', 'Strength:\r\n1. student1', 'course1', 'Areas For Improvment:\r\n1. student2', 'course2', 'Suggestions for Improvement:\r\n1. student3', 'course3', ''),
(3, '', '0000-00-00', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', '', ''),
(28, '', '0000-00-00', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', '', ''),
(29, '', '0000-00-00', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', '', ''),
(30, '', '0000-00-00', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', '', ''),
(31, '', '0000-00-00', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', '', ''),
(32, '', '0000-00-00', 'Strength:', 'Areas For Improvment:', 'Suggestions for Improvement:', '', '', '', ''),
(33, 'new', '2020-04-30', 'new', 'new', 'new', 'new', 'new', 'new', 'new'),
(34, 'new', '2020-04-03', 'Strength:\r\n11', 'Areas For Improvment:\r\ndwe', 'Suggestions for Improvement:\r\ndw', 'fd3w', 'fw', 'e21', 'f'),
(35, 'please', '2020-04-16', 'Strength: 22', 'Areas For Improvment: fwe', 'Suggestions for Improvement: fwe', 'rew', 'few', ' ww', 'ww'),
(36, '1', '0011-01-01', '1Strength:', '1Areas For Improvment:', '1Suggestions for Improvement:', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `cr.f`
--

CREATE TABLE `cr.f` (
  `ID` int(11) NOT NULL,
  `ADMIN1` text NOT NULL,
  `ADMIN2` text NOT NULL,
  `ADMIN3` text NOT NULL,
  `LEARN1` text NOT NULL,
  `LEARN2` text NOT NULL,
  `LEARN3` text NOT NULL,
  `FACI1` text NOT NULL,
  `FACI2` text NOT NULL,
  `FACI3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.f`
--

INSERT INTO `cr.f` (`ID`, `ADMIN1`, `ADMIN2`, `ADMIN3`, `LEARN1`, `LEARN2`, `LEARN3`, `FACI1`, `FACI2`, `FACI3`) VALUES
(1, '', '', '', '', '', '', '', '', ''),
(2, 'admin1', 'admin2', 'admin3', 'Learning1', 'Learning2', 'Learning3', 'Facilities1', 'Facilities2', 'Facilities3'),
(3, '', '', '', '', '', '', '', '', ''),
(28, '', '', '', '', '', '', '', '', ''),
(29, '', '', '', '', '', '', '', '', ''),
(30, '', '', '', '', '', '', '', '', ''),
(31, '', '', '', '', '', '', '', '', ''),
(32, '', '', '', '', '', '', '', '', ''),
(33, 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'),
(34, 'f', 'f', 'j', 'j', 'j', 'j', 'j', 'j', 'j'),
(35, 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'),
(36, '1', '1', '1', '1', '1', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `cr.g`
--

CREATE TABLE `cr.g` (
  `ID` int(11) NOT NULL,
  `A1` text NOT NULL,
  `A2` text NOT NULL,
  `A3` text NOT NULL,
  `A4` text NOT NULL,
  `B1` text NOT NULL,
  `B2` text NOT NULL,
  `B3` text NOT NULL,
  `B4` text NOT NULL,
  `C1` text NOT NULL,
  `C2` text NOT NULL,
  `C3` text NOT NULL,
  `C4` text NOT NULL,
  `C5` text NOT NULL,
  `C6` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cr.g`
--

INSERT INTO `cr.g` (`ID`, `A1`, `A2`, `A3`, `A4`, `B1`, `B2`, `B3`, `B4`, `C1`, `C2`, `C3`, `C4`, `C5`, `C6`) VALUES
(2, 'a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6'),
(3, '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(4, '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(28, '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(29, '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(30, '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(31, '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(32, '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(33, 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new', 'new'),
(34, 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'k', 'l', 'l', 'l', 'l', 'l', 'l'),
(35, 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'f', 'f', 'f', 'f', 'f', 'f'),
(36, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1');

-- --------------------------------------------------------

--
-- Table structure for table `cs`
--

CREATE TABLE `cs` (
  `ID` int(11) NOT NULL,
  `A_ID` int(11) DEFAULT NULL,
  `B_ID` int(11) DEFAULT NULL,
  `C_ID` int(11) DEFAULT NULL,
  `E` text DEFAULT NULL,
  `F_ID` int(11) DEFAULT NULL,
  `H_ID` int(11) DEFAULT NULL,
  `FEEDBACK` text DEFAULT NULL,
  `STATUS` int(11) DEFAULT NULL,
  `DATE` date DEFAULT NULL,
  `TIME` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs`
--

INSERT INTO `cs` (`ID`, `A_ID`, `B_ID`, `C_ID`, `E`, `F_ID`, `H_ID`, `FEEDBACK`, `STATUS`, `DATE`, `TIME`) VALUES
(39, 41, 45, 45, 'eeeeeeeee', 44, 45, NULL, NULL, NULL, NULL),
(40, 42, 46, 46, '', 45, 46, NULL, NULL, NULL, NULL),
(41, 43, 47, 47, '', 46, 47, NULL, NULL, NULL, NULL),
(42, 44, 48, 48, '', 47, 48, NULL, NULL, NULL, NULL),
(43, 45, 49, 49, '', 48, 49, NULL, NULL, NULL, NULL),
(44, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(45, 58, 62, 62, 'aaaaa', 61, 62, NULL, 3, '2020-04-22', '02:00:00'),
(46, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3, NULL, NULL),
(47, 61, 65, 65, 'a neww', 64, 65, 'This is THE FEEDBACK with date and time', 5, '2020-04-16', '00:51:10'),
(48, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(49, 62, 66, 66, 'To specify the Arrangements, I\'d like to start with', 65, 66, NULL, 5, '2020-04-16', '19:47:05'),
(50, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(51, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(52, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(53, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(54, 67, 71, 71, '', 70, 71, NULL, 3, '2020-04-17', '01:19:11'),
(55, 65, 69, 69, 'RESGFSFG', 68, 69, NULL, 5, '2020-04-16', '20:28:53'),
(56, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(57, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(58, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(59, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(60, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(61, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(62, 71, 75, 75, '1q', 74, 75, 'Stil not good!', 5, '2020-04-18', '17:55:28'),
(63, 72, 76, 76, 'a', 75, 76, 'hmmmm, nope.', 5, '2020-04-18', '17:02:19'),
(64, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(65, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(66, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(67, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL),
(68, 73, 77, 77, '', 76, 77, NULL, 3, '2020-04-20', '20:53:20'),
(69, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cs.a`
--

CREATE TABLE `cs.a` (
  `ID` int(11) NOT NULL,
  `COURSE_TYPE1` varchar(50) DEFAULT NULL,
  `COURSE_TYPE2` varchar(50) DEFAULT NULL,
  `COURSE_TYPE3` varchar(50) DEFAULT NULL,
  `COURSE_TYPE4` varchar(50) DEFAULT NULL,
  `COURSE_TYPE5` varchar(50) DEFAULT NULL,
  `COURSE_TYPE6` varchar(50) DEFAULT NULL,
  `LEVEL` varchar(11) NOT NULL,
  `PRE_REQ` text DEFAULT NULL,
  `CO_REQ` text DEFAULT NULL,
  `MODE_ID` int(11) NOT NULL,
  `ACTUAL_ID` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.a`
--

INSERT INTO `cs.a` (`ID`, `COURSE_TYPE1`, `COURSE_TYPE2`, `COURSE_TYPE3`, `COURSE_TYPE4`, `COURSE_TYPE5`, `COURSE_TYPE6`, `LEVEL`, `PRE_REQ`, `CO_REQ`, `MODE_ID`, `ACTUAL_ID`) VALUES
(41, 'University', '', '', '', 'Required', '', 'level 1', 'pre', 'co', 32, 40),
(42, '', '', '', '', '', '', '', '', '', 33, 41),
(43, '', '', '', '', '', '', '', '', '', 34, 42),
(44, '', '', '', '', '', '', '', '', '', 35, 43),
(45, '', '', '', '', '', '', '', '', '', 36, 44),
(46, 'University', '', '', '', 'Required', '', 'level 1', 'pre', 'coo', 37, 45),
(47, '', '', '', '', '', '', '', '', '', 38, 46),
(48, '', '', '', '', '', '', '', '', '', 39, 47),
(49, '', '', '', '', '', '', '', '', '', 40, 48),
(50, '', '', '', '', '', '', '', '', '', 41, 49),
(51, '', '', '', '', '', '', '', '', '', 42, 50),
(52, '', '', '', '', '', '', '', '', '', 43, 51),
(53, '', '', '', '', '', '', '', '', '', 44, 52),
(54, '', '', '', '', '', '', '', '', '', 45, 53),
(55, '', '', '', '', '', '', '', '', '', 46, 54),
(56, '', '', '', '', '', '', '', '', '', 47, 55),
(57, '', '', '', '', '', '', '', '', '', 48, 56),
(58, '', '', '', '', '', '', '', '', '', 49, 57),
(59, '', '', '', '', '', '', '', '', '', 50, 58),
(60, '', '', '', '', '', '', '', '', '', 51, 59),
(61, '', 'College', '', '', '', 'Elective', 'rewwww', 're updated', 'gre new', 52, 60),
(62, 'University', '', '', '', 'Required', '', 'level 1', 'heyyy', 'heylllo', 53, 61),
(63, 'University', '', '', '', '', '', '', '', '', 54, 62),
(64, '', '', '', '', '', '', '', '', '', 55, 63),
(65, 'University', '', '', '', 'Required', '', 'level 1', 'a', 'a', 56, 64),
(66, '', '', '', '', '', '', '', '', '', 57, 65),
(67, '', '', '', '', '', '', '', '', '', 58, 66),
(68, '', '', '', '', '', '', '', '', '', 59, 67),
(69, '', '', '', '', '', '', '', '', '', 60, 68),
(70, '', '', '', '', '', '', '', '', '', 61, 69),
(71, 'University', '', '', '', 'Required', '', 'level 1', 'h', 'e', 62, 70),
(72, 'University', '', '', '', 'Required', '', 'level 1', 'gfeafer', 'frefer', 63, 71),
(73, '', '', '', '', '', '', '', '', '', 64, 72);

-- --------------------------------------------------------

--
-- Table structure for table `cs.a_actual`
--

CREATE TABLE `cs.a_actual` (
  `ID` int(11) NOT NULL,
  `CHOURS1` int(11) NOT NULL,
  `CHOURS2` int(11) NOT NULL,
  `CHOURS3` int(11) NOT NULL,
  `CHOURS4` int(11) NOT NULL,
  `CHOURS_TOTAL` int(11) NOT NULL,
  `OTHER1` text DEFAULT NULL,
  `OLHOURS1` int(11) NOT NULL,
  `OLHOURS2` int(11) NOT NULL,
  `OLHOURS3` int(11) NOT NULL,
  `OLHOURS4` int(11) NOT NULL,
  `OLHOURS5` int(11) NOT NULL,
  `OLHOURS_TOTAL` int(11) NOT NULL,
  `OTHER2` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.a_actual`
--

INSERT INTO `cs.a_actual` (`ID`, `CHOURS1`, `CHOURS2`, `CHOURS3`, `CHOURS4`, `CHOURS_TOTAL`, `OTHER1`, `OLHOURS1`, `OLHOURS2`, `OLHOURS3`, `OLHOURS4`, `OLHOURS5`, `OLHOURS_TOTAL`, `OTHER2`) VALUES
(40, 22, 22, 22, 22, 44, 'actual\'s other1', 33, 33, 33, 33, 33, 333, 'actual\'s other1'),
(41, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(42, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(43, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(44, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(45, 1, 1, 1, 1, 1, 'actual\'s other1', 2, 2, 2, 2, 2, 2, 'actual\'s other1'),
(46, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(47, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(48, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(49, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(50, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(51, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(52, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(53, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(54, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(55, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(56, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(57, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(58, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(59, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(60, 2, 2, 2, 2, 2, 'updatedddd', 2, 2, 2, 2, 2, 2, 'updatedddd'),
(61, 6, 6, 6, 6, 6, 'aml1', 6, 6, 6, 6, 6, 6, 'aml1'),
(62, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(63, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(64, 1, 2, 3, 4, 2, 'few', 2, 2, 2, 2, 2, 2, 'few'),
(65, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(66, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(67, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(68, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(69, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, ''),
(70, 1, 1, 1, 1, 1, 'actual\'s other1', 1, 1, 1, 1, 1, 1, 'actual\'s other1'),
(71, 3, 3, 3, 3, 3, '3', 3, 3, 3, 3, 3, 3, '3'),
(72, 0, 0, 0, 0, 0, '', 0, 0, 0, 0, 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `cs.a_mode`
--

CREATE TABLE `cs.a_mode` (
  `ID` int(11) NOT NULL,
  `CHOURS1` int(11) DEFAULT NULL,
  `CHOURS2` int(11) DEFAULT NULL,
  `CHOURS3` int(11) DEFAULT NULL,
  `CHOURS4` int(11) DEFAULT NULL,
  `CHOURS5` int(11) DEFAULT NULL,
  `PERS1` int(11) DEFAULT NULL,
  `PERS2` int(11) DEFAULT NULL,
  `PERS3` int(11) DEFAULT NULL,
  `PERS4` int(11) DEFAULT NULL,
  `PERS5` int(11) DEFAULT NULL,
  `OTHER` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.a_mode`
--

INSERT INTO `cs.a_mode` (`ID`, `CHOURS1`, `CHOURS2`, `CHOURS3`, `CHOURS4`, `CHOURS5`, `PERS1`, `PERS2`, `PERS3`, `PERS4`, `PERS5`, `OTHER`) VALUES
(32, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'mode\'s other'),
(33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(37, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'mode\'s other'),
(38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(39, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(41, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(46, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(49, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(52, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 'updated'),
(53, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 'amals'),
(54, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(55, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(56, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'few'),
(57, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(59, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(62, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'mode\'s other'),
(63, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, '2'),
(64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `cs.b`
--

CREATE TABLE `cs.b` (
  `ID` int(11) NOT NULL,
  `COURSE_DESC` text DEFAULT NULL,
  `COURSE_OBJ` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.b`
--

INSERT INTO `cs.b` (`ID`, `COURSE_DESC`, `COURSE_OBJ`) VALUES
(45, 'course desc', 'course obj'),
(46, '', ''),
(47, '', ''),
(48, '', ''),
(49, '', ''),
(50, 'desccc', 'objjjj'),
(51, '', ''),
(52, '', ''),
(53, '', ''),
(54, '', ''),
(55, '', ''),
(56, '', ''),
(57, '', ''),
(58, '', ''),
(59, '', ''),
(60, '', ''),
(61, '', ''),
(62, '', ''),
(63, '', ''),
(64, '', ''),
(65, 'new course desc', 'new course obj'),
(66, 'To describe this course I\'d like to start with', 'To specify this course\'s objective, I\'d like to start with'),
(67, '', ''),
(68, '', ''),
(69, 'rfwFWGR', 'AGWGGER'),
(70, '', ''),
(71, '', ''),
(72, '', ''),
(73, '', ''),
(74, '', ''),
(75, 'c', 'obj'),
(76, 'g', 'g'),
(77, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `cs.b_competence`
--

CREATE TABLE `cs.b_competence` (
  `ID` int(11) NOT NULL,
  `CLO` text DEFAULT NULL,
  `PLO` text DEFAULT NULL,
  `CS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.b_competence`
--

INSERT INTO `cs.b_competence` (`ID`, `CLO`, `PLO`, `CS_ID`) VALUES
(60, 'b\'s competence, CLO new', 'b\'s competence, PLO new', 47),
(61, 'b\'s competence, CLO amllllls', 'b\'s competence, PLO amllllls', 49),
(62, '', '', 54),
(63, '', '', 55),
(64, 'b\'s competence, CLO', 'b\'s competence, PLO', 55),
(65, '', '', 54),
(66, '', '', 54),
(70, 'b\'s competence, CLO', 'b\'s competence, PLO', 62),
(71, 'g', 'g', 63),
(72, '', '', 68);

-- --------------------------------------------------------

--
-- Table structure for table `cs.b_knowledge`
--

CREATE TABLE `cs.b_knowledge` (
  `ID` int(11) NOT NULL,
  `CLO` text DEFAULT NULL,
  `PLO` text DEFAULT NULL,
  `CS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.b_knowledge`
--

INSERT INTO `cs.b_knowledge` (`ID`, `CLO`, `PLO`, `CS_ID`) VALUES
(40, 'b\'s knowledge, CLO1', 'b\'s knowledge, PLO1', 39),
(41, '', '', 40),
(42, '', '', 41),
(43, 'b\'s knowledge, CLO1', '', 42),
(44, '', '', 43),
(60, 'b\'s knowledge, CLO1 new', 'b\'s knowledge, PLO1 new', 47),
(61, 'b\'s knowledge, CLO1 amllllls', 'b\'s knowledge, PLO1 amllllls', 49),
(62, '', '', 54),
(63, '', '', 55),
(64, 'b\'s knowledge, CLO1', 'b\'s knowledge, PLO1', 55),
(65, 'b\'s knowledge, CLO1', 'b\'s knowledge, PLO1', 54),
(66, 'b\'s knowledge, CLO1', 'b\'s knowledge, PLO1 amllllls', 54),
(70, 'b\'s knowledge, CLO1', 'b\'s knowledge, PLO1', 62),
(71, 'g', 'g', 63),
(72, '1.1 Use HTML wisely \r\n1.2 Make new functions\r\n1.3 Can test several sites', '1.1 aligns with: 1.4\r\n1.2 aligns with: 2.1\r\n1.3 aligns with: 2.2', 68);

-- --------------------------------------------------------

--
-- Table structure for table `cs.b_skills`
--

CREATE TABLE `cs.b_skills` (
  `ID` int(11) NOT NULL,
  `CLO` text DEFAULT NULL,
  `PLO` text DEFAULT NULL,
  `CS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.b_skills`
--

INSERT INTO `cs.b_skills` (`ID`, `CLO`, `PLO`, `CS_ID`) VALUES
(40, 'b\'s skills, CLO1', 'b\'s skills, PLO1', 39),
(41, '', '', 40),
(42, '', '', 41),
(43, '', '', 42),
(44, '', '', 43),
(60, 'b\'s skills, CLO1 new', 'b\'s skills, PLO1 new', 47),
(61, 'b\'s skills, CLO1 amllllls', 'b\'s skills, PLO1 amllllls', 49),
(62, '', '', 54),
(63, '', '', 55),
(64, 'b\'s skills, CLO1', 'b\'s skills, PLO1', 55),
(65, '', '', 54),
(66, '', '', 54),
(70, 'b\'s skills, CLO1', 'b\'s skills, PLO1', 62),
(71, 'g', 'g', 63),
(72, '', '', 68);

-- --------------------------------------------------------

--
-- Table structure for table `cs.c`
--

CREATE TABLE `cs.c` (
  `ID` int(11) NOT NULL,
  `TOPICS` text DEFAULT NULL,
  `CHOURS` text DEFAULT NULL,
  `TOTAL` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.c`
--

INSERT INTO `cs.c` (`ID`, `TOPICS`, `CHOURS`, `TOTAL`) VALUES
(45, 'a topic', '1', NULL),
(46, '', '0', NULL),
(47, '', '0', NULL),
(48, '', '0', NULL),
(49, '', '0', NULL),
(50, 'a topic', '1', NULL),
(51, '', '0', NULL),
(52, '', '0', NULL),
(53, '', '0', NULL),
(54, '', '0', NULL),
(55, '', '0', NULL),
(56, '', '0', NULL),
(57, '', '0', NULL),
(58, '', '0', NULL),
(59, '', '0', NULL),
(60, '', '0', NULL),
(61, '', '0', NULL),
(62, '', '0', NULL),
(63, '', '0', NULL),
(64, '', '0', NULL),
(65, 'a topic new', '2', NULL),
(66, 'a topic amllllls', '6', NULL),
(67, '', '0', NULL),
(68, '', '0', NULL),
(69, 'a topic', '3', NULL),
(70, '', '0', NULL),
(71, '', '0', NULL),
(72, '', '0', NULL),
(73, '', '0', NULL),
(74, '', '0', NULL),
(75, 'a topic', '1', NULL),
(76, 'gh', '1', NULL),
(77, '', '0', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cs.d_asses`
--

CREATE TABLE `cs.d_asses` (
  `ID` int(11) NOT NULL,
  `ASS_TASK` text DEFAULT NULL,
  `WEEK` text DEFAULT NULL,
  `PERS` text DEFAULT NULL,
  `CS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.d_asses`
--

INSERT INTO `cs.d_asses` (`ID`, `ASS_TASK`, `WEEK`, `PERS`, `CS_ID`) VALUES
(65, 'ass task new', '2', '2', 47),
(66, 'ass task amllllls', '6', '6', 49),
(67, '', '0', '0', 54),
(68, '', '0', '0', 55),
(69, 'ass task', '1', '1', 55),
(70, '', '0', '0', 54),
(71, '', '0', '0', 54),
(75, 'ass task', '1', '1', 62),
(76, 'a', '1', '1', 63),
(77, '', '0', '0', 68);

-- --------------------------------------------------------

--
-- Table structure for table `cs.d_competence`
--

CREATE TABLE `cs.d_competence` (
  `ID` int(11) NOT NULL,
  `CLO` text DEFAULT NULL,
  `STRAT` text DEFAULT NULL,
  `ASSES` text DEFAULT NULL,
  `CS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.d_competence`
--

INSERT INTO `cs.d_competence` (`ID`, `CLO`, `STRAT`, `ASSES`, `CS_ID`) VALUES
(58, 'd\'s competence, CLO new', 'd\'s competence, ts new', 'd\'s competence, m new', 47),
(59, 'd\'s competence, CLO amllllls', 'd\'s competence, ts amllllls', 'd\'s competence, m amllllls', 49),
(60, '', '', '', 54),
(61, '', '', '', 55),
(62, 'd\'s competence, CLO', 'd\'s competence, ts', 'd\'s competence, m', 55),
(63, '', '', '', 54),
(64, '', '', '', 54),
(68, 'd\'s competence, CLO', 'd\'s competence, ts', 'd\'s competence, m', 62),
(69, 'c', 'c', 'c', 63),
(70, '', '', '', 68);

-- --------------------------------------------------------

--
-- Table structure for table `cs.d_knowledge`
--

CREATE TABLE `cs.d_knowledge` (
  `ID` int(11) NOT NULL,
  `CLO` text DEFAULT NULL,
  `STRAT` text DEFAULT NULL,
  `ASSES` text DEFAULT NULL,
  `CS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.d_knowledge`
--

INSERT INTO `cs.d_knowledge` (`ID`, `CLO`, `STRAT`, `ASSES`, `CS_ID`) VALUES
(61, 'd\'s knowledge, CLO new', 'd\'s knowledge, ts new', 'd\'s knowledge, m new', 47),
(62, 'd\'s knowledge, CLO amllllls', 'd\'s knowledge, ts amllllls', 'd\'s knowledge, m amllllls', 49),
(63, '', '', '', 54),
(64, '', '', '', 55),
(65, 'd\'s knowledge, CLO', 'd\'s knowledge, ts', 'd\'s knowledge, m', 55),
(66, '', '', '', 54),
(67, '', '', '', 54),
(71, 'd\'s knowledge, CLO', 'd\'s knowledge, ts', 'd\'s knowledge, m', 62),
(72, 'kk', 'k', 'k', 63),
(73, '', '', '', 68);

-- --------------------------------------------------------

--
-- Table structure for table `cs.d_skills`
--

CREATE TABLE `cs.d_skills` (
  `ID` int(11) NOT NULL,
  `CLO` text DEFAULT NULL,
  `STRAT` text DEFAULT NULL,
  `ASSES` text DEFAULT NULL,
  `CS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.d_skills`
--

INSERT INTO `cs.d_skills` (`ID`, `CLO`, `STRAT`, `ASSES`, `CS_ID`) VALUES
(61, 'd\'s skills, CLO new', 'd\'s skills, ts new', 'd\'s skills, m new', 47),
(62, 'd\'s skills, CLO amllllls', 'd\'s skills, ts amllllls', 'd\'s skills, m amllllls', 49),
(63, '', '', '', 54),
(64, '', '', '', 55),
(65, 'd\'s skills, CLO', 'd\'s skills, ts', 'd\'s skills, m', 55),
(66, '', '', '', 54),
(67, '', '', '', 54),
(71, 'd\'s skills, CLO', 'd\'s skills, ts', 'd\'s skills, m', 62),
(72, 's', 's', 's', 63),
(73, '', '', '', 68);

-- --------------------------------------------------------

--
-- Table structure for table `cs.f`
--

CREATE TABLE `cs.f` (
  `ID` int(11) NOT NULL,
  `LR1` varchar(250) NOT NULL,
  `LR2` varchar(250) NOT NULL,
  `LR3` varchar(250) NOT NULL,
  `LR4` varchar(250) NOT NULL,
  `FR1` text NOT NULL,
  `FR2` text NOT NULL,
  `FR3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.f`
--

INSERT INTO `cs.f` (`ID`, `LR1`, `LR2`, `LR3`, `LR4`, `FR1`, `FR2`, `FR3`) VALUES
(44, 'Required Textbooks are this and that', 'Essential References Materials are this and that', 'Electronic Materials	 are this and that', 'Other Learning Materials are this and that', 'acc', 'tech res', 'other res'),
(45, '', '', '', '', '', '', ''),
(46, '', '', '', '', '', '', ''),
(47, '', '', '', '', '', '', ''),
(48, '', '', '', '', '', '', ''),
(49, 'Required Textbooks are this and that', 'Essential References Materials are this and that', 'Electronic Materials	 are this and that', 'Other Learning Materials are this and that', 'acc', 'tr', 'os'),
(50, '', '', '', '', '', '', ''),
(51, '', '', '', '', '', '', ''),
(52, '', '', '', '', '', '', ''),
(53, '', '', '', '', '', '', ''),
(54, '', '', '', '', '', '', ''),
(55, '', '', '', '', '', '', ''),
(56, '', '', '', '', '', '', ''),
(57, '', '', '', '', '', '', ''),
(58, '', '', '', '', '', '', ''),
(59, '', '', '', '', '', '', ''),
(60, '', '', '', '', '', '', ''),
(61, '', '', '', '', '', '', ''),
(62, '', '', '', '', '', '', ''),
(63, '', '', '', '', '', '', ''),
(64, 'Required new', 'Essential References new', 'Electronic Materials	 new', 'Other new', 'dw new ', 'd new', 'd new'),
(65, 'Required Textbooks amllllls', 'Essential References Materials amllllls', 'Electronic Materials	 amllllls', 'Other amllllls', 'To specify the Accommodation, I\'d like to start with', 'To specify the Technology Resources, I\'d like to start with', 'To specify the Other Resources, I\'d like to start with'),
(66, '', '', '', '', '', '', ''),
(67, '', '', '', '', '', '', ''),
(68, 'Required Textbooks are this and that', 'Essential References Materials are this and that', 'Electronic Materials	 are this and that', 'Other Learning Materials are this and that', 'GREAGE', 'GREAGE', 'RERER'),
(69, '', '', '', '', '', '', ''),
(70, '', '', '', '', '', '', ''),
(71, '', '', '', '', '', '', ''),
(72, '', '', '', '', '', '', ''),
(73, '', '', '', '', '', '', ''),
(74, 'Required Textbooks are this and that', 'Essential References Materials are this and that', 'Electronic Materials	 are this and that', 'Other Learning Materials are this and that', 'gg', 'g', 'g'),
(75, 'j', 'j', 'j', 'j', 'k', 'k', 'll'),
(76, '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `cs.g`
--

CREATE TABLE `cs.g` (
  `ID` int(11) NOT NULL,
  `G1` text DEFAULT NULL,
  `G2` text DEFAULT NULL,
  `G3` text DEFAULT NULL,
  `CS_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.g`
--

INSERT INTO `cs.g` (`ID`, `G1`, `G2`, `G3`, `CS_ID`) VALUES
(65, 'Evaluation new', 'Evaluators new', 'Evaluation new', 47),
(66, 'Evaluation Areas/Issues amlllls', 'Evaluators amlllls', 'Evaluation Methods amlllls', 49),
(67, '', '', '', 54),
(68, '', '', '', 55),
(69, 'Evaluation Areas/Issues	 are this and that', 'Evaluators are 1 and 2', 'Evaluation Methods are 1 and 2', 55),
(70, '', '', '', 54),
(71, '', '', '', 54),
(75, 'Evaluation Areas/Issues	 are this and that', 'Evaluators are 1 and 2', 'Evaluation Methods are 1 and 2', 62),
(76, 'lk', 'k', 'k', 63),
(77, '', '', '', 68);

-- --------------------------------------------------------

--
-- Table structure for table `cs.h`
--

CREATE TABLE `cs.h` (
  `ID` int(11) NOT NULL,
  `H1` varchar(250) NOT NULL,
  `H2` int(11) NOT NULL,
  `H3` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cs.h`
--

INSERT INTO `cs.h` (`ID`, `H1`, `H2`, `H3`) VALUES
(45, 'Council / Committee are 1 and 2', 123, '2020-04-22'),
(46, '', 0, '0000-00-00'),
(47, '', 0, '0000-00-00'),
(48, '', 0, '0000-00-00'),
(49, '', 0, '0000-00-00'),
(50, 'Council / Committee are 1 and 2', 10, '2020-04-22'),
(51, '', 0, '0000-00-00'),
(52, '', 0, '0000-00-00'),
(53, '', 0, '0000-00-00'),
(54, '', 0, '0000-00-00'),
(55, '', 0, '0000-00-00'),
(56, '', 0, '0000-00-00'),
(57, '', 0, '0000-00-00'),
(58, '', 0, '0000-00-00'),
(59, '', 0, '0000-00-00'),
(60, '', 0, '0000-00-00'),
(61, '', 0, '0000-00-00'),
(62, '', 0, '0000-00-00'),
(63, '', 0, '0000-00-00'),
(64, '', 0, '0000-00-00'),
(65, 'Council / Committee new', 2, '2020-04-04'),
(66, 'Council / Committee amlllls', 666, '2026-06-06'),
(67, '', 0, '0000-00-00'),
(68, '', 0, '0000-00-00'),
(69, 'Council / Committee are 1 and 2', 11, '2020-11-11'),
(70, '', 0, '0000-00-00'),
(71, '', 0, '0000-00-00'),
(72, '', 0, '0000-00-00'),
(73, '', 0, '0000-00-00'),
(74, '', 0, '0000-00-00'),
(75, 'Council / Committee are 1 and 2', 111, '2020-04-02'),
(76, 'Council / Committee are 1 and 2', 12, '2020-04-10'),
(77, '', 0, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `deadline`
--

CREATE TABLE `deadline` (
  `ID` int(11) NOT NULL,
  `DATE` date DEFAULT NULL,
  `TIME` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `deadline`
--

INSERT INTO `deadline` (`ID`, `DATE`, `TIME`) VALUES
(1, '2020-04-22', '12:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `dept`
--

CREATE TABLE `dept` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(200) NOT NULL,
  `PROGRAM_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dept`
--

INSERT INTO `dept` (`ID`, `NAME`, `PROGRAM_ID`) VALUES
(1, 'Computer Science', 1),
(2, 'Information Technology', 1),
(3, 'th', 1),
(4, 'Arabic Language', 2);

-- --------------------------------------------------------

--
-- Table structure for table `dept_courses`
--

CREATE TABLE `dept_courses` (
  `ID` int(11) NOT NULL,
  `DEPT_ID` int(11) NOT NULL,
  `COURSE_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `dept_courses`
--

INSERT INTO `dept_courses` (`ID`, `DEPT_ID`, `COURSE_ID`) VALUES
(8, 1, 9),
(12, 1, 13),
(14, 4, 14),
(15, 2, 15),
(16, 2, 16);

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`ID`, `NAME`) VALUES
(1, 'Computer'),
(2, 'Languages');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `EMAIL` varchar(150) NOT NULL,
  `PASSWORD` varchar(100) NOT NULL,
  `FIRST_NAME` varchar(100) NOT NULL,
  `LAST_NAME` varchar(100) NOT NULL,
  `DEPT_ID` int(11) DEFAULT NULL,
  `COLLEGE_NAME` varchar(250) DEFAULT NULL,
  `INSTI_NAME` varchar(250) DEFAULT NULL,
  `ROLE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `EMAIL`, `PASSWORD`, `FIRST_NAME`, `LAST_NAME`, `DEPT_ID`, `COLLEGE_NAME`, `INSTI_NAME`, `ROLE`) VALUES
(1, 'A.ALHALANGY@qu.edu.sa', '123', 'Abdulelah', 'Al-Halangy', NULL, NULL, NULL, 1),
(3, 'A.ALKHALAF@qu.edu.sa', '123', 'Asmaa', 'Al-Khalaf', 1, 'College of Science and Arts in Ar-Rass', 'Qassim University', 4),
(18, 'Jammal@gmail.com', '123455', 'Jamal', 'Al-Habib', NULL, NULL, NULL, 2),
(23, 'Batool@gmail.com', '123', 'Batool', 'Al-Awaji', NULL, NULL, NULL, 3),
(26, 'Tomader@gmail.com', '123', 'Tomader', 'Abdullah', 1, 'College of Science and Arts in Ar-Rass', 'Qassim University', 4),
(28, 'testt@gmail.com', '123', 'Amal', 'Al-Assaf', 4, 'College of Science and Arts in Ar-Rass', 'Qassim University', 4),
(29, 'please@gmail.com', '123', 'Azza', 'Abdullah', 2, 'College of Science and Arts in Ar-Rass', 'Qassim University', 4),
(30, 'A.AY@qu.edu.sa', '123', 'Tomader', 'An-Nossaian', 1, 'College of Science and Arts in Ar-Rass', 'Qassim University', 4),
(32, 't@gmail.com', '123', 'Someone', 'Someone2', NULL, NULL, NULL, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users_courses`
--

CREATE TABLE `users_courses` (
  `ID` int(11) NOT NULL,
  `USER_ID` int(11) NOT NULL,
  `COURSE_ID` int(11) NOT NULL,
  `CS_ID` int(11) DEFAULT NULL,
  `CR_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_courses`
--

INSERT INTO `users_courses` (`ID`, `USER_ID`, `COURSE_ID`, `CS_ID`, `CR_ID`) VALUES
(71, 26, 9, 60, 2),
(72, 26, 13, 61, 3),
(73, 3, 9, 62, 4),
(74, 3, 13, 63, 5),
(75, 30, 9, 64, 6),
(76, 30, 13, 65, 7),
(79, 29, 15, 68, 10),
(80, 29, 16, 69, 11);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `annoucements`
--
ALTER TABLE `annoucements`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_USER_ANNOUNEMENTS_id` (`USER_ID`) USING BTREE;

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `CODE_UNIQUE` (`CODE`);

--
-- Indexes for table `cr`
--
ALTER TABLE `cr`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `A_ID` (`A_ID`),
  ADD KEY `B1_ID` (`B1_ID`),
  ADD KEY `B2_ID` (`B2_ID`),
  ADD KEY `C_ID` (`C1_ID`),
  ADD KEY `D_ID` (`D_ID`),
  ADD KEY `E1_ID` (`E1_ID`),
  ADD KEY `E2_ID` (`E2_ID`),
  ADD KEY `F_ID` (`F_ID`),
  ADD KEY `G_ID` (`G_ID`),
  ADD KEY `C2_ID` (`C2_ID`);

--
-- Indexes for table `cr.a`
--
ALTER TABLE `cr.a`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.b1`
--
ALTER TABLE `cr.b1`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.b2`
--
ALTER TABLE `cr.b2`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.c1`
--
ALTER TABLE `cr.c1`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.c2`
--
ALTER TABLE `cr.c2`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.d`
--
ALTER TABLE `cr.d`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.e1`
--
ALTER TABLE `cr.e1`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.e2`
--
ALTER TABLE `cr.e2`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.f`
--
ALTER TABLE `cr.f`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cr.g`
--
ALTER TABLE `cr.g`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cs`
--
ALTER TABLE `cs`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `B_ID` (`B_ID`),
  ADD KEY `C_ID` (`C_ID`),
  ADD KEY `F_ID` (`F_ID`),
  ADD KEY `H_ID` (`H_ID`),
  ADD KEY `A_ID` (`A_ID`);

--
-- Indexes for table `cs.a`
--
ALTER TABLE `cs.a`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_ACTUAL_ID` (`ACTUAL_ID`),
  ADD KEY `MODE_ID` (`MODE_ID`);

--
-- Indexes for table `cs.a_actual`
--
ALTER TABLE `cs.a_actual`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cs.a_mode`
--
ALTER TABLE `cs.a_mode`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cs.b`
--
ALTER TABLE `cs.b`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cs.b_competence`
--
ALTER TABLE `cs.b_competence`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- Indexes for table `cs.b_knowledge`
--
ALTER TABLE `cs.b_knowledge`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- Indexes for table `cs.b_skills`
--
ALTER TABLE `cs.b_skills`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- Indexes for table `cs.c`
--
ALTER TABLE `cs.c`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cs.d_asses`
--
ALTER TABLE `cs.d_asses`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- Indexes for table `cs.d_competence`
--
ALTER TABLE `cs.d_competence`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- Indexes for table `cs.d_knowledge`
--
ALTER TABLE `cs.d_knowledge`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- Indexes for table `cs.d_skills`
--
ALTER TABLE `cs.d_skills`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- Indexes for table `cs.f`
--
ALTER TABLE `cs.f`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `cs.g`
--
ALTER TABLE `cs.g`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- Indexes for table `cs.h`
--
ALTER TABLE `cs.h`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `deadline`
--
ALTER TABLE `deadline`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `dept`
--
ALTER TABLE `dept`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NAME_UNIQUE` (`NAME`),
  ADD KEY `fk_PROGRAM_id` (`PROGRAM_ID`);

--
-- Indexes for table `dept_courses`
--
ALTER TABLE `dept_courses`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_DEPT_id` (`DEPT_ID`),
  ADD KEY `fk_COURSE_DEPT_id` (`COURSE_ID`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `NAME_UNIQUE` (`NAME`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`);

--
-- Indexes for table `users_courses`
--
ALTER TABLE `users_courses`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `fk_user_id` (`USER_ID`),
  ADD KEY `fk_course_id` (`COURSE_ID`),
  ADD KEY `CS_ID` (`CS_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `annoucements`
--
ALTER TABLE `annoucements`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `cr`
--
ALTER TABLE `cr`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `cr.a`
--
ALTER TABLE `cr.a`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cr.b1`
--
ALTER TABLE `cr.b1`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `cr.b2`
--
ALTER TABLE `cr.b2`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cr.c1`
--
ALTER TABLE `cr.c1`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cr.c2`
--
ALTER TABLE `cr.c2`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cr.d`
--
ALTER TABLE `cr.d`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cr.e1`
--
ALTER TABLE `cr.e1`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cr.e2`
--
ALTER TABLE `cr.e2`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cr.f`
--
ALTER TABLE `cr.f`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cr.g`
--
ALTER TABLE `cr.g`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `cs`
--
ALTER TABLE `cs`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `cs.a`
--
ALTER TABLE `cs.a`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `cs.a_actual`
--
ALTER TABLE `cs.a_actual`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `cs.a_mode`
--
ALTER TABLE `cs.a_mode`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `cs.b`
--
ALTER TABLE `cs.b`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `cs.b_competence`
--
ALTER TABLE `cs.b_competence`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `cs.b_knowledge`
--
ALTER TABLE `cs.b_knowledge`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `cs.b_skills`
--
ALTER TABLE `cs.b_skills`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `cs.c`
--
ALTER TABLE `cs.c`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `cs.d_asses`
--
ALTER TABLE `cs.d_asses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `cs.d_competence`
--
ALTER TABLE `cs.d_competence`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `cs.d_knowledge`
--
ALTER TABLE `cs.d_knowledge`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `cs.d_skills`
--
ALTER TABLE `cs.d_skills`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `cs.f`
--
ALTER TABLE `cs.f`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `cs.g`
--
ALTER TABLE `cs.g`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `cs.h`
--
ALTER TABLE `cs.h`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `deadline`
--
ALTER TABLE `deadline`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `dept`
--
ALTER TABLE `dept`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `dept_courses`
--
ALTER TABLE `dept_courses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users_courses`
--
ALTER TABLE `users_courses`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `annoucements`
--
ALTER TABLE `annoucements`
  ADD CONSTRAINT `fk_USER_ANNOUNEMENTS_id` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`ID`);

--
-- Constraints for table `cr`
--
ALTER TABLE `cr`
  ADD CONSTRAINT `cr_ibfk_1` FOREIGN KEY (`A_ID`) REFERENCES `cr.a` (`ID`),
  ADD CONSTRAINT `cr_ibfk_10` FOREIGN KEY (`C2_ID`) REFERENCES `cr.c2` (`ID`),
  ADD CONSTRAINT `cr_ibfk_2` FOREIGN KEY (`B1_ID`) REFERENCES `cr.b1` (`ID`),
  ADD CONSTRAINT `cr_ibfk_3` FOREIGN KEY (`B2_ID`) REFERENCES `cr.b2` (`ID`),
  ADD CONSTRAINT `cr_ibfk_4` FOREIGN KEY (`C1_ID`) REFERENCES `cr.c1` (`ID`),
  ADD CONSTRAINT `cr_ibfk_5` FOREIGN KEY (`D_ID`) REFERENCES `cr.d` (`ID`),
  ADD CONSTRAINT `cr_ibfk_6` FOREIGN KEY (`E1_ID`) REFERENCES `cr.e1` (`ID`),
  ADD CONSTRAINT `cr_ibfk_7` FOREIGN KEY (`E2_ID`) REFERENCES `cr.e2` (`ID`),
  ADD CONSTRAINT `cr_ibfk_8` FOREIGN KEY (`F_ID`) REFERENCES `cr.f` (`ID`),
  ADD CONSTRAINT `cr_ibfk_9` FOREIGN KEY (`G_ID`) REFERENCES `cr.g` (`ID`);

--
-- Constraints for table `cs`
--
ALTER TABLE `cs`
  ADD CONSTRAINT `cs_ibfk_11` FOREIGN KEY (`B_ID`) REFERENCES `cs.b` (`ID`),
  ADD CONSTRAINT `cs_ibfk_12` FOREIGN KEY (`C_ID`) REFERENCES `cs.c` (`ID`),
  ADD CONSTRAINT `cs_ibfk_14` FOREIGN KEY (`F_ID`) REFERENCES `cs.f` (`ID`),
  ADD CONSTRAINT `cs_ibfk_16` FOREIGN KEY (`H_ID`) REFERENCES `cs.h` (`ID`),
  ADD CONSTRAINT `cs_ibfk_17` FOREIGN KEY (`A_ID`) REFERENCES `cs.a` (`ID`);

--
-- Constraints for table `cs.a`
--
ALTER TABLE `cs.a`
  ADD CONSTRAINT `cs.a_ibfk_1` FOREIGN KEY (`MODE_ID`) REFERENCES `cs.a_mode` (`ID`),
  ADD CONSTRAINT `fk_ACTUAL_ID` FOREIGN KEY (`ACTUAL_ID`) REFERENCES `cs.a_actual` (`ID`);

--
-- Constraints for table `cs.b_competence`
--
ALTER TABLE `cs.b_competence`
  ADD CONSTRAINT `cs.b_competence_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);

--
-- Constraints for table `cs.b_knowledge`
--
ALTER TABLE `cs.b_knowledge`
  ADD CONSTRAINT `cs.b_knowledge_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);

--
-- Constraints for table `cs.b_skills`
--
ALTER TABLE `cs.b_skills`
  ADD CONSTRAINT `cs.b_skills_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);

--
-- Constraints for table `cs.d_asses`
--
ALTER TABLE `cs.d_asses`
  ADD CONSTRAINT `cs.d_asses_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);

--
-- Constraints for table `cs.d_competence`
--
ALTER TABLE `cs.d_competence`
  ADD CONSTRAINT `cs.d_competence_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);

--
-- Constraints for table `cs.d_knowledge`
--
ALTER TABLE `cs.d_knowledge`
  ADD CONSTRAINT `cs.d_knowledge_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);

--
-- Constraints for table `cs.d_skills`
--
ALTER TABLE `cs.d_skills`
  ADD CONSTRAINT `cs.d_skills_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);

--
-- Constraints for table `cs.g`
--
ALTER TABLE `cs.g`
  ADD CONSTRAINT `cs.g_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);

--
-- Constraints for table `dept`
--
ALTER TABLE `dept`
  ADD CONSTRAINT `fk_PROGRAM_id` FOREIGN KEY (`PROGRAM_ID`) REFERENCES `program` (`ID`);

--
-- Constraints for table `dept_courses`
--
ALTER TABLE `dept_courses`
  ADD CONSTRAINT `fk_COURSE_DEPT_id` FOREIGN KEY (`COURSE_ID`) REFERENCES `courses` (`ID`),
  ADD CONSTRAINT `fk_DEPT_id` FOREIGN KEY (`DEPT_ID`) REFERENCES `dept` (`ID`);

--
-- Constraints for table `users_courses`
--
ALTER TABLE `users_courses`
  ADD CONSTRAINT `fk_course_id` FOREIGN KEY (`COURSE_ID`) REFERENCES `courses` (`ID`),
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`USER_ID`) REFERENCES `users` (`ID`),
  ADD CONSTRAINT `users_courses_ibfk_1` FOREIGN KEY (`CS_ID`) REFERENCES `cs` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
