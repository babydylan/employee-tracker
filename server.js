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
		if (err) throw err;
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
        "View All Employees By Department",
        "View All Employees Manager",
				"Add Employee",
				"Remove Employee",
				"Update Employee Role",
				"Update Employee Manager",
				"Exit"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View All Employees":
          allEmp();
          break;

        case "View All Employees By Department":
          allEmpByDep();
          break;

        case "View All Employees Manager":
          allEmpManagers();
          break;

        case "Add Employee":
          addEmp();
					break;
					
        case "Remove Employee":
          remEmp();
          break;

        case "Update Employee Role":
          updateEmpRole();
					break;
					
        case "Update Employee Manager":
          updateEmpManager();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });
}


function allEmp() {

}

function allEmpByDep() {

}

function allEmpManagers() {

}

function addEmp() {

}

function remEmp() {

}

function updateEmpRole() {

}

function updateEmpManager() {

}
