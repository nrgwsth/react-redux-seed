function generateHTML(){
	return `
		<!DOCTYPE html>
		<html>
			<head>
				<title>
					React Login Component
				</title>

			</head>

			<body>
				<div id="react">
				</div>

				<script src = "/bundle.js"></script>
			</body>
		</html>
	`
}

module.exports = function(app){

	app.get("/", function(req,res){
		res.send(generateHTML());
	});

}