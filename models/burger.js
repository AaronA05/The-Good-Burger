    // * Inside `burger.js`, import `orm.js` into `burger.js`

    // * Also inside `burger.js`, create the code that will call the 
    // ORM functions using burger specific input for the ORM.

    // * Export at the end of the `burger.js` file.

    var orm = require("../config/orm.js");

    var burger = {
    	selectAll: function(cb){
    		orm.selectAll("burgers", function(data){
    		  cb(data);
    		});
    	},
    	insertOne: function(value, cb){
    		orm.insertOne("burgers", value, cb);
    	},
    	updateOne: function(value, cb){
    		orm.updateOne("burgers", value, cb);
    	}
    }

  
  module.exports = burger;