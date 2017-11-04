   // * Inside the `connection.js` file, setup the code to connect Node to MySQL.

   // * Export the connection.

var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Teacher12",
	database: "burger_db"
});

connection.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
});

module.exports = connection;