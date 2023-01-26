import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { app } from "./reducer/app";

export const store = createStore(app, composeWithDevTools(applyMiddleware(thunk)));
