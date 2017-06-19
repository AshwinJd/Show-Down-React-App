import React from 'react';
import { Card, CardTitle,  CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';


class LoginPage extends React.Component{
  render(){
    return(
  <div>
    <Card className = "container">
      <form action='/'>
        <h2>Login</h2>

        <TextField
          floatingLabelText="Name"
        />
        <br/>
        <TextField
          floatingLabelText="Password"
        />

        <br/>
        <RaisedButton label="submit"  primary/>
        <CardText><a>Don't have an Account. ?</a><Link to="/">Sign Up</Link> </CardText>


      </form>
    </Card>
  </div>
)
}
}


export default LoginPage;
