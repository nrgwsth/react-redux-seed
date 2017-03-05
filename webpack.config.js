const path = require("path");

module.exports = {

	entry: "./client/index",
	output: {
		path: path.join(__dirname, "build"),
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: "babel-loader",
			exclude: /node_modules/
		}, {
			test: /\.ico$/,
			loader: 'file-loader?name=[name].[ext]'
		}]
	}
}