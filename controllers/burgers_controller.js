// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res){
	burger.selectAll(function(data){
		console.log(data);
		res.render("index", {data});
	})
})

router.post("/burgers/update", function(req, res){
	burger.updateOne(req.body.id, function(data){
		console.log(data);
		res.redirect("/");
	})
});

router.post("/burgers/create", function(req, res){
	burger.insertOne(req.body.burger, function(data){
		res.redirect("/");
	})
})


module.exports = router;