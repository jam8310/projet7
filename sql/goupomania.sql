-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 27, 2020 at 05:16 PM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `groupomania`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `message` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `userId`, `name`, `message`, `createdAt`, `updatedAt`) VALUES
(11, 36, 'michael', 'troisieme message', '2020-11-14 18:23:41', '2020-11-14 18:23:41'),
(12, 47, 'marc', 'quatrieme message', '2020-11-14 18:23:41', '2020-11-14 18:23:41'),
(13, 36, 'michael', 'cinquieme message', '2020-11-14 18:23:43', '2020-11-14 18:23:43'),
(14, 47, 'marc', 'sixieme message', '2020-11-14 18:23:43', '2020-11-14 18:23:43'),
(51, 36, 'michael', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa maiores, iure voluptatum expedita possimus dolore veniam explicabo molestiae velit odio corporis fugiat facilis nam maxime. Eaque itaque asperiores beatae.', '2020-11-22 15:54:29', '2020-11-22 15:54:29'),
(55, 36, 'michael', 'septième message 😇', '2020-11-27 17:06:04', '2020-11-27 17:06:04'),
(56, 47, 'marc', 'huitième message🤪', '2020-11-27 17:08:04', '2020-11-27 17:08:04'),
(57, 36, 'michael', 'neuvième mes', '2020-11-27 17:09:53', '2020-11-27 17:09:53'),
(58, 47, 'marc', '😇', '2020-11-27 17:10:12', '2020-11-27 17:10:12'),
(59, 47, 'marc', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa maiores, iure voluptatum expedita possimus dolore veniam explicabo molestiae velit odio corporis fug', '2020-11-27 17:15:22', '2020-11-27 17:15:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `createdAt`, `updatedAt`) VALUES
(36, 'michael', '$2b$10$t2QUcG79i1Vcu.AuuqzMTuXgOXcKFxdAEgx5p.3dm0F8l.w551Wwy', '2020-11-02 21:47:11', '2020-11-02 21:47:11'),
(47, 'marc', '$2b$10$yI3bfa3FnGmZbubqukQ3Qe68Q0AhszzMtIcH3Sv2JMmTci7nK5dIq', '2020-11-07 20:28:27', '2020-11-07 20:28:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
