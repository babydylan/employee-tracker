const inquirer = require("inquirer")
const mysql = require("mysql");
require("console.table")


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_db"
  });

	connection.connect(function (err) {
		if (err) {
      throw err;
    }
    console.log("connected as id " + connection.threadId + "\n");
		start();
	});

function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Departments",
        "View All Roles",
				"Add Employee",
				"Add Department",
				"Add Role",
				"Update Employee Role",
				"Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          allEmps();
          break;

        case "View All Employees By Department":
          allDeps();
          break;

        case "View All Employees Manager":
          allRoles();
          break;

        case "Add Employee":
          addEmp();
					break;
					
        case "Remove Employee":
          addDep();
          break;

        case "Update Employee Role":
          addRole();
					break;
					
        case "Update Employee Manager":
          updateEmpRole();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });
}


function allEmps() {
return connection.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name as department_name, 
    concat(managers.first_name, " ", managers.last_name) as manager
    FROM employee 
    JOIN employee as managers ON employee.manager_id = managers.id
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id
    ORDER BY employee.id`,
    (err, results) => {
      if (err) {
        throw err;
      }
      console.table(results);
      return start();
    }
  );
}

function allDeps() {
  return connection.query(
    "SELECT name FROM department",
    (err, results) => {
      if (err) {
        throw err;
      }
      console.table(results);
      return start();
    }
  );
}

function allRoles() {

}

function addEmp() {

}

function addDep() {

}

function addRole() {

}

function updateEmpRole() {

}
