import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'
import {AppBar,TextField, RaisedButton} from 'material-ui';
class App extends Component {
  ref = firebase.database().ref();
  constructor(props){
    super(props);
    this.state = {
      name: "",
      nameArray:{}
    }
  }
  // clickHandler(){
  //   this.ref.child("users").push({name: this.state.name});
  //   this.setState({name:""})
  // }
  
  componentDidMount() {
    this.ref.child("users").on("value", (snapshot) => {
      let data = snapshot.val();
      if(data)this.setState({ nameArray: data })      
    })   
  }
  textHandler(ev){
    this.setState({
      name:ev.target.value
    });
  }
  
  sendToFirebase(ev) {
    ev.preventDefault();
    this.ref.child("users").push({ name: this.state.name });
    this.setState({name:""})
  }
  render() {
const style = {
  margin: 12,
};    
    return (
      <div className="App">
        <div>
        <AppBar
          title="Public-Chat-App"
           iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <form onSubmit={this.sendToFirebase.bind(this)}>
          <TextField
            hintText="Name" onChange={this.textHandler.bind(this)}
          />
          {/* <RaisedButton label="ADD" primary={true} style={style} onClick={this.clickHandler.bind(this)}/> */}
          <input type="submit" value="Send" />
       </form>
         <ul style={{listStyle:'none'}}>
            {Object.keys(this.state.nameArray).map((val) => {
              return <li key={val}>{this.state.nameArray[val].name}</li>
            })}
          </ul>
        </div> 
  
      </div>
    );
  }
}


export default App;

//work is going on to make a awsome public chat app
