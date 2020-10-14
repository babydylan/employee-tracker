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

connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${ err.stack}`);
        return;
    }
    console.log(`connected as id ${ connection.threadId}`);
});

app.listen(PORT, () => {
	console.log(`Server listening on: http://localhost:${ PORT}`);
});
