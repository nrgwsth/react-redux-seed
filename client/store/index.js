"use strict";

import {createStore, applyMiddleware, compose} from "redux";
import ReduxThunk from "redux-thunk";
import createLogger from "redux-logger";
import reducer from "../reducers";

const debug = process.env.NODE_ENV === "development" ? true : false;

export default function configureStore(intialState = {user:null}){
	const middleware = [ReduxThunk];
	if(debug) middleware.push(createLogger());
	const store = createStore(reducer, intialState, compose(applyMiddleware(ReduxThunk)));
	return store;
}