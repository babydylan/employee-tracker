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