var express = require('express'),
	router	= express.Router(),
	app 	= express();

var indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Server connection
app.listen(3000, function() {
	console.log("Server started on port 3000");
});

app.use("/", indexRoutes);

