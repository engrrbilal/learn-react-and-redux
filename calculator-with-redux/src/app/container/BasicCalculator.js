import React from 'react';
import {connect} from 'react-redux';


function mapStateToProps(state) {
        return {
            Calculator : state
        }
    }


function mapDispatchToProps(dispatch) {
    return {
        Add: (num) => dispatch({ type: "ADD",payload:num}),
        Sub: (num) => dispatch({ type: "SUB",payload:num}),
        Div: (num) => dispatch({ type: "DIV",payload:num}),
        Mul: (num) => dispatch({ type: "MUL",payload:num})
    }
}
class BasicCalculator extends React.Component {
    constructor(props){
        super(props);
        this.State={
         num:0
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
                  onChange={(ev) =>this.setState({num:Number(ev.target.value)})}
                  />
                  <br/><br/>
                  <button onClick={() =>this.props.Add(this.state.num)}>ADD</button>
                  <button onClick={()=>this.props.Sub(this.state.num)}>SUB</button>
                  <button onClick={()=>this.props.Div(this.state.num)}>DIV</button>
                  <button onClick={()=>this.props.Mul(this.state.num)}>MUL</button>
               </div>
            </div>
        );
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BasicCalculator);
