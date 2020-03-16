var express 		= require("express"),
	router 			= express.Router();

// root routes
router.get("/", (req, res) => {
	res.render("landing");
});

module.exports = router;