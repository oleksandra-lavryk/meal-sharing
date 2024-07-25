CREATE DATABASE meal_sharing;
SET SCHEMA 'meal_sharing';
--
-- Table structure for table `meal`
--
CREATE TABLE meal (
  id int check (id > 0) NOT NULL GENERATED ALWAYS AS IDENTITY,
  title varchar(255) NOT NULL,
  description text,
  location varchar(255) DEFAULT NULL,
  when_time timestamp(0) NOT NULL,
  max_reservations int check (max_reservations > 0) NOT NULL,
  price decimal(10,2) NOT NULL,
  created_date date NOT NULL,
  PRIMARY KEY (id)
)  ;


LOCK TABLES meal WRITE;

INSERT INTO meal (title, description, location, when_time, max_reservations, price, created_date) VALUES 
('Pizza Margherita','Pizza margherita, as the Italians call it, is a simple pizza hailing from Naples. When done right, margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt.','Smallegade 36','2022-03-23 12:00:00',3,79.00,'2022-03-22'),
('Ratatouille','Ratatouille is traditionally made with simple, easily accessible ingredients: courgettes, eggplants, green and red peppers, tomatoes, onions, garlic, and parsley. The name ratatouille stems from the old Occitan word ratatolha, and the French word touiller, both meaning to toss, or to stir up, referring to the cooking process in which the ingredients are first simmered separately—seasoned with salt, pepper, and olive oil—and then tossed together and stirred into a vibrant vegetable medley.','Falkoner Alle 9','2022-03-24 10:44:00',2,115.00,'2022-03-22'),
('Tuna salad','Tuna salad is a light and fresh comfort food classic. Made with a few simple ingredients such as canned tuna, mayonnaise, onion and celery, it’s the perfect combination of creamy and crispy.','Sundevedsgade 2','2022-03-28 00:00:00',4,129.00,'2022-03-26'),('Greek salad','Is a popular salad in Greek cuisine generally made with pieces of tomatoes, cucumbers, onion, green bell pepper slices, feta cheese (usually served as a slice on top of the other ingredients), and olives (typically Kalamata olives) and dressed with salt, Greek oregano, and olive oil.','Sønder Blvd. 76','2022-03-28 00:00:00',4,89.00,'2022-03-26'),
('Dragon Roll','The festive dragon roll is a tasty uramaki sushi roll featuring avocado, unagi, and shrimp tempura. Made to look like a dragon, this inside-out sushi roll is traditionally filled with eel and cucumber with slices of avocado designed to look like the scales of the dragon.','Kystvejen 1','2022-03-30 10:30:00',5,130.00,'2022-03-29'),
('Carbonara','Carbonara is an Italian pasta dish from Rome made with eggs, hard cheese, cured pork, and black pepper.','Kastrup Strandpark 65','2022-07-08 00:00:00',5,135.00,'2022-07-03'),
('Salmon grill','Grilled salmon made with limon and garlic sauce','Sonder Allè','2022-06-24 00:00:00',12,59.00,'2022-06-03'),
('Kartofler','','Denmark ','2022-06-03 00:00:00',1,49.00,'2022-06-03'),
('Борщ','Мамин борщ','Миргород, Україна','2022-06-04 00:00:00',15,100500.00,'2022-06-04'),
('Fried rice','Rice fried with fresh vegetables, egg, and homemade sauces.(Vegan also available on request)','Valby vej 3, vest amager','2022-06-24 00:00:00',20,100.00,'2022-06-14');

UNLOCK TABLES;

--
-- Table structure for table `reservation`
--

DROP TABLE IF EXISTS reservation;

CREATE TABLE reservation (
  id int check (id > 0) NOT NULL GENERATED ALWAYS AS IDENTITY,
  number_of_guests int check (number_of_guests > 0) NOT NULL,
  created_date date NOT NULL,
  contact_phonenumber varchar(255) NOT NULL,
  contact_name varchar(255) NOT NULL,
  contact_email varchar(255) NOT NULL,
  meal_id int check (meal_id > 0) NOT NULL,
  PRIMARY KEY (id)
,
  CONSTRAINT fk_meal_reservation FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE ON UPDATE CASCADE
)  ;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS review;

CREATE TABLE review (
  id int check (id > 0) NOT NULL GENERATED ALWAYS AS IDENTITY,
  title varchar(255) NOT NULL,
  description text NOT NULL,
  created_date date NOT NULL,
  stars int check (stars > 0) NOT NULL,
  meal_id int check (meal_id > 0) NOT NULL,
  PRIMARY KEY (id)
,
  CONSTRAINT fk_meal_review FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE ON UPDATE CASCADE
)  ;



