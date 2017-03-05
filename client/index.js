import React, {Component} from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {browserHistory} from "react-router";

require("./favicon.ico");
import RouterConfig from "./routes";
import configureStore from "./store";


const store = configureStore();

render(
	<Provider store = {store}>
		<RouterConfig history = {browserHistory}>
		</RouterConfig>
	</Provider>,
	document.getElementById("react")
);