import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
// import thunk from "redux-thunk";
// import Promise from "redux-promise-middleware";

import math from "./reducers/mathReducer";
// let m = 
// console.log(m)
export default createStore(
    combineReducers({
         math
    }),
    applyMiddleware(logger())
);