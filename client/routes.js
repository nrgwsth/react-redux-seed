import React, {Component} from "react";
import {Router, Route, IndexRoute} from "react-router";

import Home from "./containers/Home";
import Login from "./containers/Login";

export default class RouterConfig extends Component{
	render(){
		return(
			<Router history = {this.props.history}>
				<Route path="/" component = {Home} />
				<Route path = "/login" component = {Login} />
			</Router>
		);
	}
}