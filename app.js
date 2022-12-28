var express = require('express'),
	router	= express.Router(),
	app 	= express();

var indexRoutes = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

// Server connection
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})

app.use("/", indexRoutes);

