import React from 'react'
import {RaisedButton} from 'material-ui';
const Button = ({ onClick, children }) => {
    return (
             <RaisedButton label={children} 
             primary={true} 
             onClick={onClick}
             />
            // <AppBar
            //   title={<span style={styles.title}>DashBoard</span>}
            //   iconElementLeft={<FontIcon className="muidocs-icon-action-home" />}
            //   iconElementRight={<FlatButton label="Log out" />}
            //   onClick={onClick}
            //   />
    );
};
// {<RaisedButton label="SignUp" primary={true} style={style} onClick={this.signUpHandler.bind(this)}/>}
export { Button};