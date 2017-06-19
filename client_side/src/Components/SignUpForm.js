import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
var request = require('superagent');


class SignUpForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        name :null,
        emailId :null,
        password: null
      }
    }

  handleUserNameChange = (e)=>{
    this.setState({
        name: e.target.value

    });
  }
  handlePasswordChange = (e)=>{
    this.setState({
        password: e.target.value

    });
  }

  handleEmailIdChange = (e)=>{
    this.setState({

        emailId: e.target.value

    });

  }

  registration = () =>{
    let URL = "http://localhost:8080/signUp/";
        request
          .post(URL)
          .send({user:{
              name: this.state.name,
              emailId: this.state.emailId,
              password: this.state.password
          }})
          .end((err,res)=>{
            if(err){
            console.log("err", err)
              this.setState({error: err})
            }
            //console.log("1", res.body[0].movie_name);

            else{
            console.log(res);
            }
          });

    console.log("user", this.state.name, "email", this.state.emailId);
  }

  render(){
    return(
    <div>
    <Card className = "container">
      <form action='/'>
        <h2>Sign UP</h2>

        <TextField
          floatingLabelText="Name"
          name={this.state.name}
          onChange={this.handleUserNameChange.bind(this)}
        />
        <br/>
        <TextField
          floatingLabelText="Email Id"
          name={this.state.emailId}
          onChange={this.handleEmailIdChange.bind(this)}
        />
        <TextField
          floatingLabelText="Password"
          name={this.state.password}
          onChange={this.handlePasswordChange.bind(this)}
        />
        <br/>
        <RaisedButton label="submit" onClick={this.registration.bind(this)}  primary/>
        <CardText><a>Already have an account ?</a><Link to="/login">Log in</Link> </CardText>
        

      </form>
    </Card>

    </div>
  )
  }
}

export default SignUpForm;
