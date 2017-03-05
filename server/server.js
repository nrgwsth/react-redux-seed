"use strict";

const express = require("express");

const app = express();

const logger = require("logger");

const dotenv = require("dotenv");

const passport = require("passport");

dotenv.config();

const PORT = process.env.PORT || 3000;

const webpack = require("webpack");

const mongoose = require("mongoose");

const path = require("path");

const config = require("../webpack.config.js");

const compiler = webpack(config);

app.use(express.static(path.join(__dirname, "/build")));

app.use(require('cookie-parser')());

app.use(require('body-parser').urlencoded({ extended: true }));

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.initialize());

app.use(passport.session());

//connect to mlab mongo server
mongoose.connect(process.env.NODE_ENV == "development" ? "mongodb://localhost/reactlogin" : process.env.MONGO_URI, function(err){
  if(err) throw err;
   console.log("connected to mlab mongo server");
});

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(function(req,res,next){
	logger.info("Request for " + req.originalUrl);
	next();
});

require("./api/auth/index")(app, passport);

require("./api/index")(app);


app.listen(PORT, function(){
	logger.info(`server is listening on port ${PORT}`);
});