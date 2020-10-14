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

        case "View All Departments":
          allDeps();
          break;

        case "View All Roles":
          allRoles();
          break;

        case "Add Employee":
          addEmp();
					break;
					
        case "Add Department":
          addDep();
          break;

        case "Add Role":
          addRole();
					break;
					
        case "Update Employee Role":
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
  return connection.query(
    `SELECT role.title, role.salary, department.name as department_name 
    FROM role JOIN department ON role.department_id = department.id`,
    (err, results) => {
      if (err) {
        throw err;
      }
      console.table(results);
      return start();
    }
  );
}

function addEmp() {
  connection.query("SELECT title, id FROM role", (err, roles) => {
    if (err) {
      throw err;
    }
    const roleNames = roles.map(row => {
      return {
        name: row.title,
        value: row.id
      };
    });

    connection.query(
      "SELECT id, concat(first_name, ' ', last_name) AS name FROM employee",
      (err, employees) => {
        if (err) {
          throw err;
        }
        const managerNames = employees.map(nem => {
          return {
            name: nem.name,
            value: nem.id
          };
        });
        managerNames.unshift({
          name: "No Manager",
          value: null
        });
        return inquirer
          .prompt([
            {
              name: "empFirst",
              type: "input",
              message: "What is the employee's first name?"
            },
            {
              name: "empLast",
              type: "input",
              message: "What is the employee's last name?"
            },
            {
              name: "roleId",
              type: "list",
              message: "What is the employee's role?",
              choices: roleNames
            },
            {
              name: "managerId",
              type: "list",
              message: "Who does this employee report to?",
              choices: managerNames
            }
          ])
          .then(answer => {
            return connection.query(
              "INSERT INTO employee SET ?",
              {
                first_name: answer.empFirst,
                last_name: answer.empLast,
                role_id: answer.roleId,
                manager_id: answer.managerId
              },
              err => {
                if (err) {
                  throw err;
                }
                console.log("Employee added successfully!");
                return start();
              }
            );
          });
      }
    );
  });
}

function addDep() {
  return inquirer
  .prompt({
    name: "depName",
    type: "input",
    message: "What is the name of the department?"
  })
  .then(answer => {
    return connection.query(
      "INSERT INTO department SET ?",
      {
        name: answer.depName
      },
      err => {
        if (err) {
          throw err;
        }
        console.log("Department added successfully!");
        return start();
      }
    );
  });
}

function addRole() {

}

function updateEmpRole() {

}
