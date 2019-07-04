DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (11, "thigh high socks", "women's dept", 9.99, 30),
	   (21, "tanktop", "women's dept", 11.99, 15),
	   (31, "corset", "women's lingerie", 19.99, 10),
	   (41, "fishnets", "women's lingerie", 9.99, 50),
	   (51, "converse sneakers", "footwear", 29.99, 25),
	   (61, "face lotion with spf", "cosmetics", 9.99, 18),
	   (71, "bathbomb", "cosmetics", 5.99, 30),
	   (81, "athletic pants", "women's athletics", 9.99, 10),
	   (91, "sports bra", "women's athletics", 19.99, 12),
	   (101, "foaming handwash", "toiletries", 6.99, 14)

       