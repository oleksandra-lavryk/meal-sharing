CREATE DATABASE  IF NOT EXISTS `meal_sharing`;
USE `meal_sharing`;
DROP TABLE IF EXISTS `meal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text,
  `location` varchar(255) DEFAULT NULL,
  `when_time` datetime NOT NULL,
  `max_reservations` int(10) unsigned NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meal`
--

LOCK TABLES `meal` WRITE;
/*!40000 ALTER TABLE `meal` DISABLE KEYS */;
INSERT INTO `meal` VALUES (1,'Pizza Margherita','Pizza margherita, as the Italians call it, is a simple pizza hailing from Naples. When done right, margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.','Smallegade 36','2022-03-23 12:00:00',3,79.00,'2022-03-22'),(11,'Ratatouille','Ratatouille is traditionally made with simple, easily accessible ingredients: courgettes, eggplants, green and red peppers, tomatoes, onions, garlic, and parsley. The name ratatouille stems from the old Occitan word ratatolha, and the French word touiller, both meaning to toss, or to stir up, referring to the cooking process in which the ingredients are first simmered separately—seasoned with salt, pepper, and olive oil—and then tossed together and stirred into a vibrant vegetable medley.','Falkoner Alle 9','2022-03-24 10:44:00',2,115.00,'2022-03-22'),(21,'Tuna salad','Tuna salad is a light and fresh comfort food classic. Made with a few simple ingredients such as canned tuna, mayonnaise, onion and celery, it’s the perfect combination of creamy and crispy.','Sundevedsgade 2','2022-03-28 00:00:00',4,129.00,'2022-03-26'),(31,'Greek salad','Is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, green bell pepper slices, feta cheese (usually served as a slice on top of the other ingredients), and olives (typically Kalamata olives) and dressed with salt, Greek oregano, and olive oil.','Sønder Blvd. 76','2022-03-28 00:00:00',4,89.00,'2022-03-26'),(41,'Dragon Roll','The festive dragon roll is a tasty uramaki sushi roll featuring avocado, unagi, and shrimp tempura. Made to look like a dragon, this inside-out sushi roll is traditionally filled with eel and cucumber with slices of avocado designed to look like the scales of the dragon.','Kystvejen 1','2022-03-30 10:30:00',5,130.00,'2022-03-29'),(51,'Carbonara','Carbonara is an Italian pasta dish from Rome made with eggs, hard cheese, cured pork, and black pepper.','Kastrup Strandpark 65','2022-07-08 00:00:00',5,135.00,'2022-07-03'),(81,'Salmon grill','Grilled salmon made with limon and garlic sauce','Sonder Allè','2022-06-24 00:00:00',12,59.00,'2022-06-03'),(91,'Kartofler','','Denmark ','2022-06-03 00:00:00',1,49.00,'2022-06-03'),(101,'Борщ','Мамин борщ','Миргород, Україна','2022-06-04 00:00:00',15,100500.00,'2022-06-04'),(111,'Fried rice','Rice fried with fresh vegetables, egg, and homemade sauces.(Vegan also available on request)','Valby vej 3, vest amager','2022-06-24 00:00:00',20,100.00,'2022-06-14');
/*!40000 ALTER TABLE `meal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS `reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `number_of_guests` int(10) unsigned NOT NULL,
  `created_date` date NOT NULL,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_meal_reservation` (`meal_id`),
  CONSTRAINT `fk_meal_reservation` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservation`
--

LOCK TABLES `reservation` WRITE;
/*!40000 ALTER TABLE `reservation` DISABLE KEYS */;
INSERT INTO `reservation` VALUES (1,3,'2022-03-23','50280081','Line','line@test.dk',1),(11,2,'2022-03-22','50480090','Torben','torben@test.dk',11),(21,4,'2022-05-31','10280081','Ben','ben@test.dk',31),(31,5,'2022-06-03','123456','Sally','Sal',51),(41,2,'2022-06-04','111222333','Микола','Рллилдьиошл',41),(51,1,'2022-06-06','121212','Sasuki','12dsdd@jdjf',21),(61,2,'2022-06-06','122334','Sasuku danuki muki','qwwe',21),(71,1,'2022-06-06','sac','dsc','sac',21),(81,1,'2022-06-14','52425412','divya','div@ya.com',91),(91,5,'2022-06-14','63256352','Divya','div@ya.com',111);
/*!40000 ALTER TABLE `reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_date` date NOT NULL,
  `stars` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_meal_review` (`meal_id`),
  CONSTRAINT `fk_meal_review` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (11,'Torben','Unfortunately I didn\'t like it. I\'ll try something else.\n\n\n','2022-03-26',2,1),(21,'Lisa','I thought it would taste better.\n','2022-03-24',3,11),(31,'Peter','Awsome food. I recommend.','2022-03-23',5,31),(41,'Simon','That was perfect','2022-06-03',4,11);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;


