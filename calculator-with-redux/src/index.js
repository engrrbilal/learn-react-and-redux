// import React from 'react';
// import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux'

// import App from './app/container/App';
// import store from "./app/store";

// // import basicCounter from './Redux-Tasks/basicCounter'

// ReactDOM.render(
//    <Provider store={store} >
//       <App />
//    </Provider>,
//     // <basicCounter/>,
//    document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import BasicCalculator from './app/container/BasicCalculator';

import './index.css';

const  basicCalculator = (state = 0, action) => {
  
    switch (action.type) {
      case 'ADD': {
        return state = state + action.payload;
      }
      case 'SUB': {
        return state=state-action.payload
      }
      case 'DIV': {
        return state=action.payload/action.payload
      }
      case 'MUL': {
        return state=action.payload*action.payload
      }      
      default: return state;
    }
  }
  
  let store = createStore(basicCalculator);
  
  // store.subscribe(() => {
  //   console.log(store.getState())
  // })
  
  // store.dispatch({
  //    type: 'ADD',
  //    payload:2
  //   })
  // store.dispatch({
  //    type: 'SUB',
  //    payload:1
  //   })
  
  // store.dispatch({
  //    type: 'DIV',
  //    payload:2
  //    })
  // store.dispatch({
  //    type: 'MUL',
  //    payload: 2
  //    })
  
  
  ReactDOM.render(
    <Provider store={store}>
      <div>
            <BasicCalculator />
              {/* <div>
              <button onClick={() => store.dispatch({ type: 'ADD',payload:1 })}>Add</button>
              <br />
              <button onClick={() => store.dispatch({ type: 'SUB',payload:1 })}>Subtract</button>
              <br />
              <button onClick={() => store.dispatch({ type: 'DIV',payload:2 })}>Divide</button>
              <br />
              <button onClick={() => store.dispatch({ type: 'MUL',payload:2 })}>Multiply</button><br />
             </div> */}
           </div>
    </Provider>
    , document.getElementById('root'));