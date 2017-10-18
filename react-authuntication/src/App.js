import * as firebase from 'firebase';

import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm'

import {Button} from './components/Button';
import {Spinner} from './components/Spinner';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBBrildjRFVT9XlO1gBuC8tWpMI3C-TF5Q",
      authDomain: "react-authuntication.firebaseapp.com",
      databaseURL: "https://react-authuntication.firebaseio.com",
      projectId: "react-authuntication",
      storageBucket: "",
      messagingSenderId: "1093896046941"
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    });
}

renderContent() {
  switch (this.state.loggedIn) {
      case true:
      console.log("log out");
          return (
            <Button onClick={() => firebase.auth().signOut()}>
                Log Out
            </Button>
          );
      case false:
      console.log("sign in............");      
          // return <LoginForm s={() => this.setState({ loggedIn: true })} />;
          return <LoginForm />;          
      default:
          return <Spinner/>;
  }
}

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Authuntication in React</h1>
        </header>
        <LoginForm/> */}
        {this.renderContent()}
      </div>
    );
  }
}
export default App;
