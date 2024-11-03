-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2022 at 11:18 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `myfitnessplan`
--

-- --------------------------------------------------------

--
-- Table structure for table `calculator_bmibfp`
--

CREATE TABLE `calculator_bmibfp` (
  `resultCalcBmiBfp_id` int(11) NOT NULL,
  `result_bmi` float DEFAULT NULL,
  `result_bfp` float DEFAULT NULL,
  `resultCalc_date` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `calculator_bmibfp`
--

INSERT INTO `calculator_bmibfp` (`resultCalcBmiBfp_id`, `result_bmi`, `result_bfp`, `resultCalc_date`, `user_id`) VALUES
(3, 23.6476, 16.1499, '2022-10-02 16:53:02', 1),
(4, 26.3046, 16.1499, '2022-10-06 18:35:00', 1),
(5, 23.8087, 27.0973, '2022-10-06 21:27:50', 5),
(6, 22.5069, 24.1493, '2022-10-07 10:33:36', 6),
(7, 23.9133, 16.1499, '2022-10-12 10:48:32', 1);

-- --------------------------------------------------------

--
-- Table structure for table `calculator_dcr`
--

CREATE TABLE `calculator_dcr` (
  `resultCalcDcr_id` int(11) NOT NULL,
  `result_dcr` float DEFAULT NULL,
  `resultCalcDcr_date` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `calculator_dcr`
--

INSERT INTO `calculator_dcr` (`resultCalcDcr_id`, `result_dcr`, `resultCalcDcr_date`, `user_id`) VALUES
(1, 2520.35, '2022-10-02 16:54:47', 1),
(2, 4114.88, '2022-10-06 18:35:54', 1),
(3, 2831.39, '2022-10-06 21:29:29', 5),
(4, 1503.79, '2022-10-07 10:33:58', 6),
(5, 3293.78, '2022-10-12 10:48:57', 1);

-- --------------------------------------------------------

--
-- Table structure for table `exercises`
--

CREATE TABLE `exercises` (
  `exercise_id` int(11) NOT NULL,
  `exercise_category` varchar(255) DEFAULT NULL,
  `exercise_part` varchar(10) DEFAULT NULL,
  `exercise_name` varchar(50) DEFAULT NULL,
  `exercise_difficulty` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exercises`
--

INSERT INTO `exercises` (`exercise_id`, `exercise_category`, `exercise_part`, `exercise_name`, `exercise_difficulty`) VALUES
(1, 'Workout', 'Chest', 'Barbell Bench Press', 'Hard'),
(2, 'Workout', 'Chest', 'Dumbbell Bench Press', 'Medium'),
(3, 'Workout', 'Chest', 'Incline Bench Press', 'Hard'),
(4, 'Workout', 'Chest', 'Decline Barbell Bench Press', 'Hard'),
(5, 'Workout', 'Chest', 'Machine Chest Press', 'Easy'),
(6, 'Workout', 'Chest', 'Dumbbell Pull-Over', 'Easy'),
(7, 'Workout', 'Chest', 'Chest Fly', 'Medium'),
(8, 'Workout', 'Back', 'Deadlift', 'Very Hard'),
(9, 'Workout', 'Back', 'Sumo Deadlift', 'Very Hard'),
(10, 'Workout', 'Back', 'Bent-Over Row', 'Hard'),
(11, 'Workout', 'Back', 'Pull-Up', 'Medium'),
(12, 'Workout', 'Back', 'T-Bar Row', 'Medium'),
(13, 'Workout', 'Back', 'Seated Row', 'Medium'),
(14, 'Workout', 'Back', 'Lat Pull-Down', 'Medium'),
(15, 'Workout', 'Back', 'Single-Arm Dumbbell Row', 'Medium'),
(16, 'Workout', 'Shoulders', 'Barbell Overhead Press', 'Hard'),
(17, 'Workout', 'Shoulders', 'Dumbbell Bent Over Lateral Rai', 'Hard'),
(18, 'Workout', 'Shoulders', 'Seated Dumbbell Shoulder Press', 'Medium'),
(19, 'Workout', 'Shoulders', 'Front Raise', 'Easy'),
(20, 'Workout', 'Shoulders', 'Reverse Pec Deck Fly', 'Easy'),
(21, 'Workout', 'Shoulders', 'Dumbbell Lateral Raise', 'Easy'),
(22, 'Workout', 'Shoulders', 'Cable Face Pulls', 'Medium'),
(23, 'Workout', 'Shoulders', 'Barbell Upright Row', 'Easy'),
(24, 'Workout', 'Biceps', 'Barbell Curl', 'Easy'),
(25, 'Workout', 'Biceps', 'Cable Curl', 'Easy'),
(26, 'Workout', 'Biceps', 'Dumbbell Curl', 'Easy'),
(27, 'Workout', 'Biceps', 'Hammer Curl', 'Easy'),
(28, 'Workout', 'Biceps', 'Incline Curl', 'Medium'),
(29, 'Workout', 'Biceps', 'Preacher Curl', 'Medium'),
(30, 'Workout', 'Triceps', 'Close-Grip Bench Press', 'Hard'),
(31, 'Workout', 'Triceps', 'Triceps Dip', 'Hard'),
(32, 'Workout', 'Triceps', 'Dumbbell Overhead Triceps Exte', 'Medium'),
(33, 'Workout', 'Triceps', 'One-Arm Overhead Extension', 'Medium'),
(34, 'Workout', 'Triceps', 'Cable Push-Down', 'Easy'),
(35, 'Workout', 'Triceps', 'Skull Crusher', 'Medium'),
(36, 'Workout', 'Legs', 'Leg Curl', 'Easy'),
(37, 'Workout', 'Legs', 'Leg Extension', 'Easy'),
(38, 'Workout', 'Legs', 'Leg Press', 'Hard'),
(39, 'Workout', 'Legs', 'Barbell Back Squat', 'Very Hard'),
(40, 'Workout', 'Legs', 'Dumbbell Split Squat', 'Medium'),
(41, 'Workout', 'Legs', 'Goblet Squat', 'Medium'),
(42, 'Workout', 'Legs', 'Barbell Front Squat', 'Hard'),
(43, 'Workout', 'Abs', 'Dumbbell Crunch', 'Easy'),
(44, 'Workout', 'Abs', 'Hanging Leg Raise', 'Medium'),
(45, 'Workout', 'Abs', 'Hanging Knee Raise Twist', 'Medium'),
(46, 'Workout', 'Abs', 'Bicycle Crunches', 'Medium'),
(47, 'Workout', 'Abs', 'Plank', 'Hard'),
(48, 'Workout', 'Abs', 'Dumbbell Side Bend', 'Easy'),
(49, 'Streach', 'Legs', 'Seated Forward Bend', 'Hard'),
(50, 'Streach', 'Legs', 'Single-Leg Seated Forward Fold', 'Medium'),
(51, 'Streach', 'Legs', 'Butterfly Pose', 'Easy'),
(52, 'Streach', 'Legs', 'Lateral Squat', 'Medium'),
(53, 'Streach', 'Legs', 'Standing Quad Stretch', 'Easy'),
(54, 'Streach', 'Legs', 'Standing Toe Touch', 'Medium'),
(55, 'Streach', 'Chest', 'Behind-the-back Elbow-to-elbow Grip', 'Medium'),
(56, 'Streach', 'Chest', 'Above-the-head Chest Stretch', 'Easy'),
(57, 'Streach', 'Chest', 'Bent-arm Wall Stretch', 'Easy'),
(58, 'Streach', 'Chest', 'Extended Child’s Pose on Fingertips', 'Medium'),
(59, 'Streach', 'Chest', 'Bar Hanging', 'Easy'),
(60, 'Streach', 'Arms', 'Wall Bicep Stretch', 'Easy'),
(61, 'Streach', 'Arms', 'Standing Bicep Stretch', 'Medium'),
(62, 'Streach', 'Arms', 'Seated Bicep Stretch', 'Easy'),
(63, 'Streach', 'Arms', 'Overhead Triceps Stretch', 'Easy'),
(64, 'Streach', 'Arms', 'Horizontal Arm Stretches', 'Easy'),
(65, 'Streach', 'Abs', 'Cobra Pose Abdominal Stretch', 'Medium'),
(66, 'Streach', 'Abs', 'Twisting Crocodile Stretch', 'Medium'),
(67, 'Streach', 'Abs', 'Side Bend', 'Easy'),
(68, 'Streach', 'Abs', 'Kneeling Abdominal Stretch', 'Easy'),
(69, 'Streach', 'Abs', 'Cat-Cow Stretch', 'Medium'),
(70, 'Streach', 'Abs', 'Seated Lateral Bends', 'Easy'),
(71, 'Streach', 'Other', 'Across-The-Chest Stretch', 'Easy'),
(72, 'Streach', 'Other', 'Thread The Needle', 'Medium'),
(73, 'Streach', 'Other', 'Reverse Prayer Pose', 'Medium'),
(74, 'Streach', 'Other', 'Wrist Extensor Stretches', 'Easy'),
(75, 'Streach', 'Other', 'Overhead Reach', 'Easy'),
(76, 'Streach', 'Other', 'Fisted Wrist Flexion', 'Easy');

-- --------------------------------------------------------

--
-- Table structure for table `exercises_result`
--

CREATE TABLE `exercises_result` (
  `exercisesResult_id` int(11) NOT NULL,
  `exercisesResult_date` datetime DEFAULT NULL,
  `exercisesResult` float DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `exercise_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `exercises_result`
--

INSERT INTO `exercises_result` (`exercisesResult_id`, `exercisesResult_date`, `exercisesResult`, `user_id`, `exercise_id`) VALUES
(5, '2022-10-12 11:20:20', 100, 1, 1),
(8, '2022-10-12 11:41:27', 117, 1, 1),
(9, '2022-10-12 11:42:11', 160, 1, 8),
(10, '2022-10-12 11:42:44', 140, 1, 39),
(12, '2022-10-17 13:00:57', 89, 6, 4),
(13, '2022-10-17 13:04:24', 10, 1, 7),
(14, '2022-11-04 13:30:49', 10, 5, 32);

-- --------------------------------------------------------

--
-- Table structure for table `plans_has_exercices`
--

CREATE TABLE `plans_has_exercices` (
  `plan_id` int(11) NOT NULL,
  `exercise_id` int(11) NOT NULL,
  `Exer_number` int(11) NOT NULL,
  `Series` int(11) NOT NULL,
  `Reps` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `plans_has_exercices`
--

INSERT INTO `plans_has_exercices` (`plan_id`, `exercise_id`, `Exer_number`, `Series`, `Reps`) VALUES
(3, 30, 1, 1, 1),
(3, 8, 2, 2, 1),
(3, 19, 3, 3, 10),
(3, 36, 4, 4, 12),
(3, 20, 5, 5, 1),
(3, 4, 6, 6, 1),
(3, 16, 7, 7, 1),
(3, 19, 8, 8, 14),
(4, 1, 1, 0, 4),
(4, 1, 2, 3, 3),
(4, 30, 3, 4, 0),
(4, 8, 4, 0, 2),
(4, 1, 5, 0, 4),
(4, 2, 6, 2, 0),
(4, 1, 7, 4, 0),
(4, 1, 8, 0, 0),
(5, 3, 1, 0, 0),
(5, 43, 2, 0, 0),
(5, 1, 3, 0, 0),
(5, 1, 4, 0, 0),
(5, 1, 5, 0, 0),
(5, 1, 6, 0, 0),
(5, 1, 7, 0, 0),
(5, 1, 8, 0, 0),
(6, 1, 1, 0, 0),
(6, 1, 2, 0, 0),
(6, 1, 3, 0, 0),
(6, 1, 4, 0, 0),
(6, 1, 5, 0, 0),
(6, 1, 6, 0, 0),
(6, 1, 7, 0, 0),
(6, 1, 8, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('VHLPLzmo8yilkB6P2Tgvd1AoFI2lYrzW', 1668075590, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":6,\"acc_type\":\"Trainer\"}'),
('y5daWy-NrbU1Os-YolnDGN51-WW6lMmT', 1667999551, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1,\"acc_type\":\"Admin\"}'),
('zQ8pbsNegj0nEgcFZSppsKMPC0JBcbfP', 1668161804, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":1,\"acc_type\":\"Admin\"}');

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts`
--

CREATE TABLE `user_accounts` (
  `user_id` int(11) NOT NULL,
  `user_username` varchar(50) DEFAULT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  `userAcc_type` varchar(7) DEFAULT NULL,
  `userAccCreation_time` datetime DEFAULT NULL,
  `userAcc_activation` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_accounts`
--

INSERT INTO `user_accounts` (`user_id`, `user_username`, `user_name`, `user_password`, `userAcc_type`, `userAccCreation_time`, `userAcc_activation`) VALUES
(1, 'Unsinkable2_', 'Witold', 'Aaaaaa1@', 'Admin', '2022-08-10 18:07:10', 'Activate'),
(5, 'Aaaaaaaa', 'Ania', 'Qqqqqq1@', 'User', '2022-08-15 17:33:51', 'Activate'),
(6, 'Decia999', 'Ula', 'NekoMleko1@', 'Trainer', '2022-10-02 17:14:01', 'Activate'),
(7, 'Egert00987', 'Łukasz', 'Rrrrrr1@', 'User', '2022-10-11 08:58:29', 'Deactivate'),
(8, 'Lol1234567', 'Ania', 'Dddddd1@', 'Trainer', '2022-10-12 14:30:27', 'Activate'),
(9, 'Kot09876', 'Grzegorz', 'Bbbbbb1@', 'User', '2022-10-12 14:30:55', 'Activate');

-- --------------------------------------------------------

--
-- Table structure for table `workout_plans`
--

CREATE TABLE `workout_plans` (
  `plan_id` int(11) NOT NULL,
  `plan_name` varchar(22) DEFAULT NULL,
  `plan_goal` varchar(50) DEFAULT NULL,
  `plan_description` varchar(255) DEFAULT NULL,
  `plan_time` varchar(20) DEFAULT NULL,
  `plan_difficulty` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workout_plans`
--

INSERT INTO `workout_plans` (`plan_id`, `plan_name`, `plan_goal`, `plan_description`, `plan_time`, `plan_difficulty`) VALUES
(3, 'aaaa', 'ggdasgdgas', 'agagags', '1 Month', 'Easy'),
(4, 'fhdfh', 'dfhdfh', 'etjkrykty', '3 Month', 'Hard');

-- --------------------------------------------------------

--
-- Table structure for table `workout_plan_time`
--

CREATE TABLE `workout_plan_time` (
  `PlanChoose_id` int(11) NOT NULL,
  `PlanStart_date` datetime DEFAULT NULL,
  `workoutPlan_state` varchar(9) NOT NULL,
  `user_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `workout_plan_time`
--

INSERT INTO `workout_plan_time` (`PlanChoose_id`, `PlanStart_date`, `workoutPlan_state`, `user_id`, `plan_id`) VALUES
(1, '2022-10-24 08:17:35', 'Completed', 1, 3),
(3, '2022-10-24 08:32:11', 'Abandoned', 6, 3),
(4, '2022-10-24 10:48:11', 'Completed', 1, 4),
(5, '2022-11-04 13:31:40', 'Active', 5, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calculator_bmibfp`
--
ALTER TABLE `calculator_bmibfp`
  ADD PRIMARY KEY (`resultCalcBmiBfp_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `calculator_dcr`
--
ALTER TABLE `calculator_dcr`
  ADD PRIMARY KEY (`resultCalcDcr_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `exercises`
--
ALTER TABLE `exercises`
  ADD PRIMARY KEY (`exercise_id`);

--
-- Indexes for table `exercises_result`
--
ALTER TABLE `exercises_result`
  ADD PRIMARY KEY (`exercisesResult_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `exercise_id` (`exercise_id`);

--
-- Indexes for table `plans_has_exercices`
--
ALTER TABLE `plans_has_exercices`
  ADD KEY `exercise_id` (`exercise_id`),
  ADD KEY `plan_id` (`plan_id`),
  ADD KEY `plan_id_2` (`plan_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `user_accounts`
--
ALTER TABLE `user_accounts`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_username` (`user_username`);

--
-- Indexes for table `workout_plans`
--
ALTER TABLE `workout_plans`
  ADD PRIMARY KEY (`plan_id`);

--
-- Indexes for table `workout_plan_time`
--
ALTER TABLE `workout_plan_time`
  ADD PRIMARY KEY (`PlanChoose_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `plan_id` (`plan_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calculator_bmibfp`
--
ALTER TABLE `calculator_bmibfp`
  MODIFY `resultCalcBmiBfp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `calculator_dcr`
--
ALTER TABLE `calculator_dcr`
  MODIFY `resultCalcDcr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `exercises`
--
ALTER TABLE `exercises`
  MODIFY `exercise_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT for table `exercises_result`
--
ALTER TABLE `exercises_result`
  MODIFY `exercisesResult_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user_accounts`
--
ALTER TABLE `user_accounts`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `workout_plans`
--
ALTER TABLE `workout_plans`
  MODIFY `plan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `workout_plan_time`
--
ALTER TABLE `workout_plan_time`
  MODIFY `PlanChoose_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `calculator_bmibfp`
--
ALTER TABLE `calculator_bmibfp`
  ADD CONSTRAINT `calculator_bmibfp_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_accounts` (`user_id`);

--
-- Constraints for table `exercises_result`
--
ALTER TABLE `exercises_result`
  ADD CONSTRAINT `exercises_result_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_accounts` (`user_id`),
  ADD CONSTRAINT `exercises_result_ibfk_2` FOREIGN KEY (`exercise_id`) REFERENCES `exercises` (`exercise_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
