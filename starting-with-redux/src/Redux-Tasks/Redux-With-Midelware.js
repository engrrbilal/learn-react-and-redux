//To run paste all the code in index.js file 
// it is using two reducers mathreducer and userReducer 

import React from 'react';
import ReactDOM from 'react-dom';
//step#1 create store
import { createStore,combineReducers,applyMiddleware} from 'redux';
import logger from 'redux-logger'
//reducer will handel the state
const mathReducer = (state={
    result: 1,
    lastValues: []
},action) => {
  switch (action.type) {
    case "ADD":
    //   state.result += action.payload;

        state = {
            // result:state.result
            // intialValues:state.lastValues
            ...state,
            result:state.result+ action.payload,
            lastValues:[...state.lastValues,action.payload]
        }
        // state.lastValues.push(action.payload) it is muttable
      break;
    case "SUB":
      state = {
            // result:state.result,
            // intialValues:state.lastValues
            ...state,
            result:state.result- action.payload,
             lastValues:[...state.lastValues,action.payload]
        };
      break;
    case "MUL":
      state = {
            // result:state.result
            // intialValues:state.lastValues
            ...state,
            result:state.result * action.payload,
            lastValues:[...state.lastValues,action.payload]
        }
       break;
    case "DIV":
      state = {
            // result:state.result
            // intialValues:state.lastValues
            ...state,
            result:state.result / action.payload,
            lastValues:[...state.lastValues,action.payload]
        }
       break;
  }
    return state;
}

const userReducer = (state={
    name: "Bilal",
    age: 23
},action) => {
  switch (action.type) {
     case"SET_NAME":
        state = {
          ...state,
          name:action.payload
        }
        break;
      case "SET_AGE":
        state = {
          ...state,
          age: action.payload
        };
        break;
   }
      return state
}
const myLogger = (store) => (next) => (action) => {
  console.log("Logged Action: ",action);
  next(action);
}
//and new state will stored in the store that return from reducer
//In the place of second parameter(1) we typically use arrays,objects etc
const store = createStore(combineReducers(
  {mathReducer,userReducer})
,{},applyMiddleware(logger));
//We update the store
store.subscribe(()=> {
  // console.log("Store Updated",store.getState());

});

store.dispatch({
  type:"ADD",
  payload:10
})
store.dispatch({
  type:"ADD",
  payload:10
})
store.dispatch({
    type:"SUB",
    payload:5
})

store.dispatch({
    type:"MUL",
    payload:10
})

store.dispatch({
    type:"DIV",
    payload:15
})

store.dispatch({
    type:"SET_AGE",
    payload:24
})