import React from 'react';
import cookie from 'react-cookie';
import AppBar from 'material-ui/AppBar';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
var request = require('superagent');


const styles = {
  appBar: {
    textAlign: 'center'
  }
}


class LoginPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      username: null,
      password: null,
    }
  }

  handleUserName = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  authenticate = () =>{
    let URL = "http://localhost:8080/login/";
    request
      .post(URL)
      .send({user: {
        username : this.state.username,
        password : this.state.password,
      }})
      .end((err,res)=>{
        if(err){
          console.log(err);
        }
        else {

          console.log(res.body);

        }
      })
      console.log("Name",this.state.username,"pass",this.state.password);
  }

  render(){
    return(
  <div>
    <AppBar
      title="Show Down"
      style={styles.appBar}
      iconElementRight={<Link style={{ color: 'white' }} to='/login'>Login</Link>}
    />
    <Card className = "container">

      <form action='/'>
        <h2>Login</h2>

        <TextField
          floatingLabelText="UserName"
          onChange = {this.handleUserName.bind(this)}
        />
        <br/>
        <TextField
          floatingLabelText="Password"
          type="password"
          onChange = {this.handlePassword.bind(this)}
        />

        <br/>
        <RaisedButton label="submit" onClick={this.authenticate.bind(this)}  primary/>
        <CardText><a>Don't have an Account. ?</a><Link to="/">Sign Up</Link> </CardText>


      </form>
    </Card>
  </div>
)
}
}


export default LoginPage;
