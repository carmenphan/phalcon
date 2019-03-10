-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 10, 2019 at 09:04 AM
-- Server version: 5.7.25-0ubuntu0.16.04.2
-- PHP Version: 7.0.33-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ERP_HRM`
--

-- --------------------------------------------------------

--
-- Table structure for table `Department`
--

CREATE TABLE `Department` (
  `id` int(11) NOT NULL,
  `name` varchar(254) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Department`
--

INSERT INTO `Department` (`id`, `name`) VALUES
(1, 'Dev'),
(2, 'HR'),
(3, 'QA'),
(4, 'PR'),
(5, 'QC');

-- --------------------------------------------------------

--
-- Table structure for table `Employees`
--

CREATE TABLE `Employees` (
  `id` int(11) NOT NULL,
  `fullName` varchar(254) DEFAULT NULL,
  `brithday` date DEFAULT NULL,
  `address` varchar(254) DEFAULT NULL,
  `position_id` int(11) DEFAULT NULL,
  `department_id` int(11) DEFAULT NULL,
  `createAt` datetime DEFAULT NULL,
  `updateAt` datetime DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Employees`
--

INSERT INTO `Employees` (`id`, `fullName`, `brithday`, `address`, `position_id`, `department_id`, `createAt`, `updateAt`) VALUES
(3, 'Dev 1', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(4, 'Dev 2', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(5, 'Dev 3', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(6, 'Dev 4', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(7, 'Dev 5', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(8, 'Dev 6', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(9, 'Dev 7', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(10, 'Dev technical leader', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 2, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(11, 'Dev leader', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 3, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(12, 'Dev manager', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 4, 1, '1970-01-01 00:00:00', '2019-03-08 16:27:48'),
(13, 'HR 1', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(14, 'HR 2', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(15, 'HR 3', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(16, 'HR 4', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(17, 'HR 5', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(18, 'HR 6', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(19, 'HR 7', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(20, 'HR technical leader', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 2, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(21, 'HR leader', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 3, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(22, 'HR manager', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 4, 2, '1970-01-01 00:00:00', '2019-03-08 16:29:44'),
(23, 'QA 1', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(24, 'QA 2', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(25, 'QA 3', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(26, 'QA 4', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(27, 'QA 5', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(28, 'QA 6', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(29, 'QA 7', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(30, 'QA technical leader', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 2, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(31, 'QA leader', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 3, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(32, 'QA manager', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 4, 3, '1970-01-01 00:00:00', '2019-03-08 16:31:14'),
(33, 'PR 1', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(34, 'PR 2', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(35, 'PR 3', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(36, 'PR 4', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(37, 'PR 5', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(38, 'PR 6', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(39, 'PR 7', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 1, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(40, 'PR technical leader', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 2, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(41, 'PR leader', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 3, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20'),
(42, 'PR manager', '2019-03-06', '26 Dang Thi Nhu , P. NTB , Q1', 4, 4, '1970-01-01 00:00:00', '2019-03-08 16:32:20');

-- --------------------------------------------------------

--
-- Table structure for table `Position`
--

CREATE TABLE `Position` (
  `id` int(11) NOT NULL,
  `name` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Position`
--

INSERT INTO `Position` (`id`, `name`) VALUES
(1, 'NemberShip'),
(2, 'Technical Leader'),
(3, 'Leader'),
(4, 'Manager');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Department`
--
ALTER TABLE `Department`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Position`
--
ALTER TABLE `Position`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Department`
--
ALTER TABLE `Department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `Employees`
--
ALTER TABLE `Employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT for table `Position`
--
ALTER TABLE `Position`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
