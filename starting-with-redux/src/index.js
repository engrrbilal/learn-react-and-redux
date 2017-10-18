import React from 'react';
import ReactDOM from 'react-dom';
//step#1 create store
import { createStore} from 'redux';
//reducer will handel the state

//Task1 Simple Calculator with Redux

const reducer = (state,action) => {
  switch (action.type) {
    case "ADD":
      state = state + action.payload;
      break;
    case "SUB":
      state = state - action.payload;
      break;
    case "MUL":
      state = state * action.payload;
       break;
    case "DIV":
      state = state / action.payload;
       break;
  }
    return state;
}
//it will get 2 parameters newstate,intialstate(optioanal)
//and new state will stored in the store that return from reducer
//In the place of second parameter(1) we typically use arrays,objects etc
const store = createStore(reducer, 10);
//We update the store
store.subscribe(()=> {
  console.log("Store Updated",store.getState());

});

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