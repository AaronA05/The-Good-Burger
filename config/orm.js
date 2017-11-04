   // * In the `orm.js` file, create the methods that will 
   //execute the necessary MySQL commands in the controllers. 
   // These are the methods you will need to use in order to retrieve and 
   //store data in your database.

   //   * `selectAll()` 
   //   * `insertOne()` 
   //   * `updateOne()` 

   // * Export the ORM object in `module.exports`.
var connection = require("./connection.js");

   var orm = {
   	selectAll: function(tableInput, cb){
   		var queryString = "SELECT * FROM " + tableInput + ";";
   		connection.query(queryString, function(err, data){
   			if(err) throw err;
   			console.log(data);
   			cb(data);
   		})
   	}, 
   	insertOne: function(tableInput, value, cb){
   		var queryString = "INSERT INTO " +tableInput+ " (burger) VALUE " + "(' "+value+" ')";
   		connection.query(queryString, function(err, data){
   			if(err) throw err;
   			console.log("Inserted!");
   			cb(data);
   		})
   	},
   	updateOne: function(tableInput, cond, cb){
   		var queryString = "UPDATE " +tableInput+ " SET eaten = true WHERE id=" +cond+ ";";
   		connection.query(queryString, function(err, data){
   			if(err) throw err;
   			console.log("Updated!");
   			cb(data);
   		})
   	}
   }



module.exports = orm;