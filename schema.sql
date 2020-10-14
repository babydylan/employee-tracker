DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL,
name varchar (30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE role (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR (30) NOT NULL,
salary DECIMAL (9, 2) NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR (30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES role(id),
FOREIGN KEY (manager_i

INSERT INTO department (name)
VALUES 
("Marketing"), 
("Finance"),
("Game Design"),
("Management");

INSERT INTO role (title, salary, department_id)
VALUES 
("Designer", 40000, 1),
("Developer", 60000, 3),
("Art", 20000, 3),
("Marketing Manager", 100000, 1);

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES 
(2, "Dylan", "Nguyen", null),
(2, "Ares", "Ham", 1),
(3, "Tob", "Pin", 1),
(1, "Joggy", "Gonzo", 5),
(4, "Ant", "Gray", null);


d) REFERENCES employee(id)
);