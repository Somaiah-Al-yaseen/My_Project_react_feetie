-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2023 at 04:47 PM
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
-- Database: `feetie`
--

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `BillID` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `OrderDate` timestamp NULL DEFAULT current_timestamp(),
  `OrderStatus` varchar(50) DEFAULT NULL,
  `TotalPrice` decimal(10,2) DEFAULT NULL,
  `ProductId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bill`
--

INSERT INTO `bill` (`BillID`, `UserID`, `OrderDate`, `OrderStatus`, `TotalPrice`, `ProductId`) VALUES
(1, 9, '2023-10-08 13:09:03', '111', 111.00, 0),
(2, 9, '2023-10-08 19:33:51', 'deliverd', 6.00, 0);

-- --------------------------------------------------------

--
-- Table structure for table `bill_products`
--

CREATE TABLE `bill_products` (
  `product_id` int(11) NOT NULL,
  `bill_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bill_products`
--

INSERT INTO `bill_products` (`product_id`, `bill_id`, `quantity`) VALUES
(1, 1, 2),
(2, 2, 8),
(1, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cartId` bigint(20) UNSIGNED NOT NULL,
  `UserId` bigint(20) NOT NULL,
  `ProductId` bigint(20) NOT NULL,
  `Qunatity` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `CategoryID` int(11) NOT NULL,
  `CategoryName` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CategoryID`, `CategoryName`, `image`) VALUES
(1, 'Women\'s Shoes', 'images/cat-1.png'),
(2, 'Men\'s Shoes', 'images/cat-2.png'),
(3, 'Kids\' Shoes', 'images/cat-3.png');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductID` int(11) NOT NULL,
  `ProductName` varchar(100) DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `CategoryID` int(11) DEFAULT NULL,
  `StockQuantity` int(11) DEFAULT NULL,
  `Image` varchar(255) DEFAULT NULL,
  `sales` bigint(20) NOT NULL,
  `sale price` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductID`, `ProductName`, `Description`, `Price`, `CategoryID`, `StockQuantity`, `Image`, `sales`, `sale price`) VALUES
(1, 'Vans Ward Lo Suede Sneaker', 'Hit up the skate park or show off your casual street style in the women\'s Ward low-top sneaker from Vans. This mixed material low-top pairs perfectly with jeans and hoodies.', 64.99, 1, 0, 'images/product-1.png', 0, 0),
(2, 'Nike Court Vision Low Next Nature Sneaker', 'In love with the classic look of \'80s basketball but have a thing for the fast-paced culture of today\'s game? Meet the Nike Court Vision Low Next Nature sneaker. Stitched overlays inspired by the hook-shot look of old-school b-ball catch the eye, while the recycled materials lend a sustainable touch. ', 79.96, 1, 0, 'images/product-2.png', 0, 0),
(3, 'Lucky Brand Divahna Sneaker', 'Classic and casual, the Divahna sneakers from Lucky Brand are a staple. These kicks are crafted with a quality leather material, feature a timeless silhouette, and are complete with intricate stitching so you can look stylish, sleek, and sophisticated. ', 64.99, 1, 0, 'images/product-3.png', 0, 0),
(4, 'Betsey Johnson Suton Highwall Bling Platform Sneaker', 'Exude rockstar vibes in the Sydney Highwall Bling platform sneaker from Betsey Johnson. This oxford silhouette sneaker features rhinestone-embellished upper and a low platform heel for a modest lift.', 88.99, 1, 0, 'images/product-4.png', 1, 0),
(5, 'Betsey Johnson Kane Sneaker', 'Get ready for that special day in style with the Kane sneaker from Betsey Johnson. The rhinestone detailing and laidback silhouette are great for a bachelorette trip look. ', 78.99, 1, 0, 'images/product-5.png', 1, 0),
(6, 'Vintage Havana Hailey High Platform Sneaker', 'The Hailey High platform sneaker by Vintage Havana is your ticket to the limelight. With sparkling upper, star stud trim and textured platform, this high-top lace-up will make you the talk of the town.', 144.99, 1, 0, 'images/product-6.png', 0, 0),
(7, 'Pastry Glam Pie High-Top Sneaker', 'Add some sparkle to the streets with the Glam Pie high-top sneaker from Pastry. A padded collar and mesh lining keeps this sneaker breathable and comfortable!', 64.99, 1, 0, 'images/product-7.png', 0, 0),
(8, 'Vans Asher Slip-On Sneaker', 'Flaunt classic style with the women\'s Asher slip-on sneaker from Vans. These versatile white kicks will be easy to pair with anything in your wardrobe! ', 59.99, 1, 0, 'images/product-8.png', 0, 0),
(9, 'Kelly & Katie Peyton Loafer', 'The Peyton loafer from Kelly & Katie offers a stylish flair to accent a number of your fave looks. This versatile pair sports a cushioned footbed to pad your steps so they are as functional as they are stylish. ', 39.98, 1, 0, 'images/product-9.png', 0, 0),
(10, 'Dr. Scholl\'s Laurel Chelsea Boot', 'Western-inspired and versatile enough for any outfit, the Laurel Chelsea boot from Dr. Scholl\'s will quickly become a staple in your rotation. This ankle bootie features a footbed crafted from algae-infused BLOOM® foam to reverse the effects of water pollution by working with natural resources like algae to create sustainable materials, generate clean water, and maintain healthy ecosystems.', 69.99, 1, 0, 'images/product-10.png', 1, 0),
(11, 'Clarks Charlten Grace Bootie', 'The Charlten Grace booties prove that simple shoes can look sophisticated. Complete with intricate stitching, a classic silhouette, and a linked detail that makes this pair a must-have for the fall season. ', 89.99, 1, 0, 'images/product-11.png', 0, 0),
(12, 'Cole Haan Grand Crosscourt Traveler Sneaker', 'Accent a casual look or bring laidback charm to a semiformal ensemble with the Grand Crosscourt Traveler sneaker from Cole Haan. The sleek look provides a great jumping off point to create new fits, while the cushioned footbed brings a comfortable level.', 109.99, 2, 0, 'images/product-12.png', 1, 0),
(13, 'Cole Haan Zerogrand WFA Stitchlite Sneaker', 'Experience unrivalled comfort wearing the Zerogrand WFA Stitchlite sneaker from Cole Haan. Featuring a multi-media construction with ergonomic tongue, EVA footbed and distinctive ZERØGRAND 5.0 diamond shaped cut out design, this lace-up sneaker offers the flexibility and comfort to allow all-day use.', 129.98, 2, 0, 'images/product-13.png', 0, 0),
(14, 'Stacy Adams Maddox Oxford', 'The elegance of the Stacy Adams Maddox oxford is sure to put your looks above the rest. Be it the burnished cap toe, perfing details or the gentle stacked heel, this oxford is sure to be the front runner of style.\r\n\r\n', 119.99, 2, 0, 'images/product-14.png', 0, 0),
(15, 'Vince Camuto Esmail Driving Loafer', 'Enhance your casual ensemble with the Esmail driving loafers from Vince Camuto. These quality slip-ons feature a classic moccasin silhouette that adds a comfortable accessory to any laid-back look. \r\n\r\n', 69.99, 2, 0, '\r\nimages/product-15.png\r\n', 1, 0),
(16, 'Mix No. 6 Bache Oxford', 'Bring versatile edge to your outfit with the Bache oxford from Mix No. 6. These borderline dress shoes features a sporty midsole that casualizes the traditional upper. Stitched accents add a hint of texture.\r\n\r\n', 59.99, 2, 0, 'images/product-16.png', 0, 0),
(17, 'Cole Haan 2.ZeroGrand StitchLite Wingtip Oxford', 'Add an upgraded touch to your tailored look with the 2.ZeroGrand wingtip oxford from Cole Haan. With its lightweight GRAND.ØS cushioned footbed and foam midsole, this knit pair provides daylong comfort.\r\n\r\n', 89.98, 2, 0, 'images/product-17.png', 0, 0),
(18, 'Crown Vintage Edsul Sneaker', 'The rhythmic sound of new copies is paired with the high-speed clicking of your coworker’s keyboard; a reminder that the workday is nearing its end. You’re glad you decided to wear your Edsul oxford-inspired sneakers from Crown Vintage so when you leave the office, you’ll be ready for happy hour. The sweet relief of the weekend is just a few hours away. \r\n', 59.99, 2, 0, 'images/product-18.png', 0, 0),
(19, 'Crown Vintage Paysen Chelsea Boot', 'Chelsea boots are a staple in any closet. The Paysen boots from Crown Vintage are crafted from leather and feature the classic double panel details, making them the ideal pair.\r\n\r\n', 59.99, 2, 0, 'images/product-19.png', 0, 0),
(20, 'Adidas Daily 3.0 Sneaker - Men\'s', 'Give a fresh, sporty touch to your everyday look with the Adidas Daily 3.0 sneaker that features modern and comfortable design elements. Featuring canvas upper with brand logo and contrast stripe detailing, this trainer shoe offers a contemporary style and is completed with lace-up closure, OrthoLite sockliner for cushioned comfort and traction sole.\r\n\r\n', 59.99, 2, 0, 'images/product-20.png', 0, 0),
(21, 'Hey Dude Wally Serape Desert Horizon Slip-On Sneaker - Men\'s', 'Show off your individuality with these kicks from Hey Dude. The Wally Serape slip-on sneakers are crafted with a lightweight material, a flexible silhouette, and an easily accessible no-lace closure. A comfortable addition that will upgrade your casual footwear collection. \r\n', 39.98, 2, 0, 'images/product-21.png\r\n', 0, 0),
(22, 'Hey Dude Wally Stitch Slip-On', 'Highlight a casual look with the Wally Stitch slip-on from Hey Dude. The Flex & Fold technology allows for freedom of movement, while the cushioned footbed and lightweight sole add to the comfort. \r\n\r\n', 54.98, 2, 0, 'images/product-22.png\r\n', 0, 0),
(23, 'Nike Court Borough Mid High-Top Sneaker', 'Cool kids will love wearing the Court Borough Mid sneakers from Nike. These basketball shoes feature a versatile design and mesh lining for a breathable fit.\r\n\r\n', 56.96, 3, 0, 'images/product-23.png\r\n', 0, 0),
(24, 'Vans Ward Sneaker', 'Let your little trendsetter add another classic sneaker to their shoe collection with the Vans Ward low-top sneaker. This pair features a casual silhouette, a sporty midsole, and a playful hue, perfect for their everyday \'fits!\r\n', 49.99, 3, 0, 'images/product-24.png\r\n', 1, 0),
(25, 'Kelly & Katie Lil Sophia High-Top Sneaker', 'Your little one deserves to sparkle and shine! Let them do so in a stylish way by adding the LIl Sophia high-top sneakers to their collection. These playful kicks feature a sleek goldtone hue, a classic silhouette, and a zipper closure for easy access. \r\n', 29.99, 3, 0, 'images/product-25.png\r\n', 0, 0),
(26, 'Puma Jada Sneaker', 'Keep those little feet comfortable in the Jada sneaker from Puma. Made from colorful canvas, this lace-up features a Kinder-Fit® sockliner for added comfort, a breathable mesh lining, and durable rubber sole for their new go-to.\r\n', 29.98, 3, 0, 'images/product-26.png\r\n', 0, 0),
(27, 'Skechers Microspec Max Epic Brights Sneaker', 'These colorful Microspec Max Epic Brights sneakers from skechers are a cute and casual option that your little one will love. Crafted from a mesh material for breathability and complete with a hook & loop strap for easy access.\r\n', 34.98, 3, 0, 'images/product-27.png\r\n', 1, 0),
(28, 'Roxy Porto Slingback Sandal', 'When your child wants to slip into a summery style but needs a secure fit, reach for the Porto flip flops from Roxy. Casual and comfortable, this easily accessible choice features a classic silhouette, colorful straps, and a slingback design. \r\n', 7.98, 3, 0, 'images/product-28.png\r\n', 0, 0),
(29, 'Bearpaw Elle Boot', 'Make her the best-dressed baby this winter with the Elle boot by Bearpaw. This glittery suede pair is treated with NeverWet® technology and features ripple tread rubber sole.\r\n', 39.99, 3, 0, 'images/product-29.png\r\n', 0, 0),
(30, 'FABKIDS Fuzzy Bootie', 'Bring a toasty highlight to their look with the Fuzzy bootie from FABKIDS. A classic silhouette ensures a versatile addition, while the faux fur lining and memory foam footbed pad their steps. \r\n', 35.99, 3, 0, 'images/product-30.png\r\n', 0, 0),
(31, 'Kelly & Katie Chloe Gladiator Sandal', 'Add a playful pop to your child\'s ensemble with the Chloe gladiator sandals from Kelly & Katie. These sweet shoes mix together a classic silhouette with different metallic colors on each strap for fun detail. \r\n', 9.98, 3, 0, 'images/product-31.png\r\n', 1, 0),
(32, 'Joules Junior Flip Flop', 'Liven up their warm weather wardrobe with the Junior flip flop from Joules. This bright pair adds color to any look, while the traction sole protects against slips and falls. \r\n', 12.98, 3, 0, 'images/product-32.png\r\n', 0, 0),
(33, 'Kelly & Katie Layla Flat', 'Complete your little one\'s formal wear by adding these pretty white flats from Kelly & Katie to their closet. The Layla shoes feature an intricate lace detail, a floral embellishment on the toe, and a sparkle fabric that will tie their look together in a wholesome way. \r\n', 19.98, 3, 0, 'images/product-33.png\r\n', 0, 0),
(34, 'Keds Kickstart Celebrations Crib Shoe', 'Add some shine to her adorable looks with the Kickstart Celebrations crib shoe from Keds. Styled with shimmery upper, this classic style features hook and loop closure and alternative laces for convenience. The memory foam footbed and flexible rubber sole keep her feet comfy all day.\r\n', 39.99, 4, 0, 'images/product-34.png\r\n', 0, 0),
(35, 'BILLY Footwear Little Kid Short Wrap Zipper Sandal', 'Give a cool update to her little wardrobe with the Short-Wrap Zipper sandal from Billy. The strappy fisherman-inspired silhouette with short-wrap zipper, adjustable buckle closure and a padded footbed makes this sandal ideal for all-day use. Its adaptive closure ensures an accessible fit.\r\n', 39.99, 4, 0, 'images/product-35.png\r\n', 0, 0),
(36, 'BILLY Footwear Little Kid Billy Jogger Sneaker', 'Little ones highlight a fave active look with the Billy Jogger sneaker from BILLY Footwear. The innovative FlipTop Technology with a handy Adaptive zipper closure ensures a secure fit that\'s easy to put on and take off, while the lightweight mesh design and cushioned insole provides a comfy fit. \r\n', 49.99, 4, 0, 'images/product-36.png\r\n', 0, 0),
(37, 'BILLY Footwear Little Kid Classic Lace Low-Top Sneaker', 'Sporty yet elegant, the Classic Lace low-top sneaker from Billy keeps her comfy all day. This zippered sneaker showcases a lightweight memory foam footbed to cushion her little feet and a rubber sole to offer better grip on most surfaces. Its adaptive closure ensures an accessible fit.\r\n', 49.99, 4, 0, 'images/product-37.png\r\n', 1, 0),
(38, 'BILLY Footwear Little Kid Short Wrap Low II Sneaker', 'Keep your little one racing comfortable in the Short Wrap Low II sneaker from BILLY Footwear. The wrap-around adaptive zipper closure ensures accessible on/off, while the memory foam insole provides extra padding. \r\n', 49.99, 4, 0, 'images/product-38.png\r\n', 0, 0),
(39, 'BILLY Footwear River Sandal', 'Bring comfort to outdoor fun with the River sandal from Billy. This breathable sandal comes with a center zipper to enable easy entry and a bungee lace closure to ensure a secure fit. The rubber sole enhances footing even on rough terrains. Its adaptive closure ensures an accessible fit.\r\n', 54.99, 4, 0, 'images/product-39.png\r\n', 0, 0),
(40, 'Converse Chuck Taylor All Star Cribster Sneaker', 'Your little one will look absolutely adorable in the Chuck Taylor All Star Cribster sneaker from Converse. This bold pair features a cushioned footbed with hook and loop straps for an easy on-and-off!\r\n\r\n', 29.96, 4, 0, 'images/product-40.png\r\n', 0, 0),
(41, 'Sperry Intrepid Boat Shoe', 'Whether on land or sea, the Sperry Intrepid is a winner\'s choice. This casual cool kids boat shoe will look great on your little kid and keep him dry. It can even function as a cute crib shoe!\r\n\r\n', 35.99, 4, 0, 'images/product-41.png\r\n', 1, 0),
(42, 'Sperry Lanyard Boat Shoe', 'Whether on land or at sea, the Sperry Lanyard is a winner\'s choice! This casual boat shoe will look great on your little one, and the hidden closure makes it easy to take on and off.\r\n\r\n', 49.99, 4, 0, 'images/product-42.png\r\n', 0, 0),
(43, 'Stride Rite Benji Slip', 'The Benji slip-ons by Stride Rite are perfect for your little one. The classic silhouette and neutral hue makes this a versatile option that matches with almost everything, while the removable memory foam insole provides extra comfort. \r\n', 37.99, 4, 0, 'images/product-43.png\r\n', 0, 0),
(44, 'Stride Rite Taye 2.0 Sneaker', 'Keep little feet comfy in the Taye 2.0 sneaker by Stride Rite. Its classic look proves versatile, while the cushioned insole and hook and loop strap, complete with elastic laces, provide a padded, secure fit. \r\n', 34.99, 4, 0, 'images/product-44.png\r\n', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `ReviewID` int(11) NOT NULL,
  `ProductID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL,
  `Rating` int(11) DEFAULT NULL,
  `ReviewText` text DEFAULT NULL,
  `ReviewDate` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `FirstName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `ShippingAddress` text DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `IsAdmin` bigint(20) NOT NULL,
  `IsDeleted` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserId`, `FirstName`, `LastName`, `Email`, `Password`, `ShippingAddress`, `phone`, `IsAdmin`, `IsDeleted`) VALUES
(2, 'baidaa', 'ali', 'ba@a.com', '123', 'abaa', 1233, 0, 0),
(3, 'aaaaaq', 'aaaaaaa', 'baaaa@a.com', '123456789', 'aaaaa', 54, 0, 0),
(4, 'Baidaa', 'aaaaaaaaa', 'a@a.com', '$2y$10$GT7vUnHUMw.HXjTvf4G14ueY4dxaoTyO.Tc7t7Q4bGP2dEZ8rJMb6', '1111111', 222219, 0, 0),
(5, 'Salah', 'Amro', 'a@a.com', '$2y$10$WbYyIoE6lpT07IaMi7ugPeov7UuaHdVWVaGdbQrTaMQUxYDuZE./6', 'Aqaba', 98765432, 0, 0),
(6, 'Baidaa', 'Ahmad', 'b@b.com', '$2y$10$NJb0tUdU7rekuH8Nv5M6cuvy1cST1bLN0AiZBTfFrJ0cek3mmM3Xq', 'Amman', 98765409, 0, 0),
(7, 'Ramaa', 'Ahmadd', 'r@r.com', 'Orange@1234', 'Karak', 93564782, 0, 0),
(8, 'SalmaA', 'Ahmad', 's@s.com', NULL, 'Irbid', 98654787658, 0, 0),
(9, 'osama', 'alrqebat', 'osama@gmail.com', '$2y$10$HJhBvWX7AB67l6f6p1h4XuCn6YwKU4jlnYXb1u4o0k9drsyhA/K2u', 'aqaba', 788888886, 0, 0),
(10, 'hala', 'nazeeh', 'ha@a.com', '$2y$10$7q99Rkuu/zhAEtSZ2xiZ9OvYGbaZoNLZJXAi7RoveOO28XgV4HVxK', 'gjhb', 5653, 0, 0),
(11, 'sara', 'alrqebat', 'somiayaseen59@gmail.com', '$2y$10$2aIFGDnzNchJ.NOMRw.P9.DExWmoTcE2SD22wgFCbVdT2NYLhtWrq', 'aqaba', 798765665, 0, 0),
(12, 'mona', 'alnwaysah', 'monaa@gmail.com', '$2y$10$BstuwurIS6Sg1UC/oYvQjOc58bEX1WEhBEDfTblmE.QXIkl6Za.0S', 'irbid', 788888888, 0, 0),
(13, 'dema', 'al-yaseen', 'dema@gmail.com', 'Asdf@1234', 'alkarak', 788888888, 0, 0),
(14, 'qanta', 'al-yaseen', 'qanta@gmail.com', '$2y$10$Q2N4jaGS73yxijMTxjTLI.MClcECayhg7v5P3xOJdUEzXa30DfEwS', 'aqaba', 788888888, 0, 0),
(15, 'sara', 'Alkhalaf', 'Baidaa@gmail.com', 'Qwer@1234', 'Aqaba', 796960490, 0, 0),
(16, 'Ahmad', 'al-yaseen', 'Ahmad@gmail.com', '$2y$10$Tu/RbQk6kO9mRIB56Q/tO.VKk.2R/GD1BM1MyYxdPmWwomiuplp7q', 'aqaba', 788888888, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`BillID`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CategoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `CategoryID` (`CategoryID`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`ReviewID`),
  ADD KEY `reviews_userid_foreign` (`UserID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bill`
--
ALTER TABLE `bill`
  MODIFY `BillID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cartId` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `CategoryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `ReviewID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `bill_ibfk_1` FOREIGN KEY (`BillID`) REFERENCES `products` (`ProductID`);

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`CategoryID`) REFERENCES `products` (`ProductID`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_userid_foreign` FOREIGN KEY (`UserID`) REFERENCES `users` (`UserId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
