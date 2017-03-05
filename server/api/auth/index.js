module.exports = function(app, passport){
	
	app.get("/login", function(req,res){
		res.send("login");
	});
	
}