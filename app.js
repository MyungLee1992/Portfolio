var express = require('express'),
	router	= express.Router(),
	app 	= express();

var indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Server connection
app.listen(/*process.env.PORT*/3000, process.env.IP, function() {
	console.log("Server started on port " + process.env.PORT );
});

app.use("/", indexRoutes);

