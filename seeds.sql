INSERT INTO department (name)
VALUES 
("Marketing"), 
("Finance"),
("Game Design"),
("Management");

INSERT INTO role (title, salary, department_id)
VALUES 
("Designer", 40000, 1),
("Developer", 60000, 2),
("Art", 20000, 3),
("Marketing Manager", 100000, 4);

INSERT INTO employee (role_id, first_name, last_name, manager_id)
VALUES 
(1, "Dylan", "Nguyen", null),
(2, "Ares", "Ham", 1);