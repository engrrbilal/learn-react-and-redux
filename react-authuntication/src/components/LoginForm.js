import React from 'react';
import * as firebase from 'firebase';

import {TextField} from 'material-ui';
import {Button} from './Button';
import {Spinner} from './Spinner';
class LoginForm extends React.Component{
        state = {
            email:"",
            password:"", 
            error: '',
            loading: false
        }
    SignInHandler() {
        console.log("signing...")
        const { email, password } = this.state;
        
        this.setState({ error: ' ', loading: true});        

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSucess.bind(this))
        .catch(() => {
            console.log('Creating new User...')
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSucess.bind(this))
                .catch(this.onLoginFail.bind(this));
                console.log("User Has created and signed in...")
                
        });
    }
    onLoginFail() {
        this.setState({ error: "Auth error!", loading: false });
    }

    onLoginSucess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
        console.log('success')
        // this.props.s()
        // console.log("s",this.props.s())
    }
    renderButton(){
        if (this.state.loading) {
            return <Spinner/>;
        }
        return (
            <Button onClick={this.SignInHandler.bind(this)}>
                Login
            </Button>
        );
    }
    render() {
        return(
            <div>
                <TextField hintText="info@gmail.com" 
                   value={this.state.email}
                   onChange={ev => this.setState({email: ev.target.value})}
                   floatingLabelText="Email:"
                   floatingLabelFixed={false}
                />
                <br />
                <TextField
                    hintText="Password" id="password"
                    value={this.state.password}
                    onChange={ev => this.setState({password:ev.target.value})}
                    floatingLabelText="Password:"
                    type="password"
                />
                <br />
                <div>
                {this.renderButton()}

                </div>
                {/* <RaisedButton label="Sign In" primary={true} onClick={this.SignInHandler.bind(this)} /> */}
                {/* {<RaisedButton label="SignUp" primary={true} style={style} onClick={this.signUpHandler.bind(this)}/>} */}
            </div>
        );
    }
}
export default LoginForm