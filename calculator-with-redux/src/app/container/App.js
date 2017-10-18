// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import {render} from "react-dom";
import {connect} from 'react-redux'
import {addnumber,subnumber} from "../actions/mathActions"

class App extends React.Component {
  constructor(props){
      super(props);
      this.State={
       numArray:[]
      }
  }

  // inputHandler(ev){
  //     this.setState({
  //      inputValue:this.target.value
  //    });
  //    console.log("inputValue",inputValue)
  // }
  render() {
      return(
          <div> {this.props.Calculator} <br />
              <div>
                <input type="number" 
                onChange={(ev) =>this.setState({numArray:Number(ev.target.value)})}
                />
                {/* <input type="number" 
                onChange={(ev) =>this.setState({numArray: Number(ev.target.value)})}
                /> */}
                <button onClick={() =>this.props.Add(this.state.numArray)}>ADD</button>
                <button onClick={()=>this.props.Sub(this.state.numArray)}>SUB</button>
                <button onClick={()=>this.props.Div(this.state.numArray)}>DIV</button>
                <button onClick={()=>this.props.Mul(this.state.numArray)}>MUL</button>
             </div>
          </div>
      );
  }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        math: state.math
    };
};
// const mapDispatchToProps = (dispatch) => {
//     return{
//         SetName: (name) => {
//             // console.log('asa',setName(name, dispatch))
//             dispatch(setName(name));
//             // setName(name, dispatch);
//         }
//     };
// };
function mapDispatchToProps(dispatch) {
  return {
      Add: (numArray) => dispatch({ type: "ADD",payload:numArray }),
      Sub: (numArray) => dispatch({ type: "SUB",payload:numArray}),
      Div: (numArray) => dispatch({ type: "DIV",payload:numArray }),
      Mul: (numArray) => dispatch({ type: "MUL",payload:numArray })
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App)

// export default App