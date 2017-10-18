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
  const myLogger = (store) => (next) => (action) => {
      console.log("Logged Action: ",action);
      next(action);
    }
  
    export default mathReducer;