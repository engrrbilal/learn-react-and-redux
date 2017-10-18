//To run paste all the code in index.js file 

import redux from 'redux';
import {createStore} from 'redux'

const basicCounter = (state=0,action) => {
    switch(action.type) {
        case "INCREMENT":
          state = state + 1;
          break;
        case "DECREMENT":
          state = state - 1
          break;
    }
    return state
}

const store = createStore(basicCounter)

store.subscribe(()=>{
    console.log("store updated:",store.getState());
})

store.dispatch ({
    type:"INCREMENT"
})
store.dispatch ({
    type:"DECREMENT"
})

export default basicCounter