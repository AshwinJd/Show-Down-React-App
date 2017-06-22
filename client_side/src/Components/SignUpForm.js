import React from 'react';
import AppBar from 'material-ui/AppBar';

// import { Link } from 'react-router-dom';
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

class SignUpForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
        name :null,
        emailId :null,
        password: null,
        password2: null,
        errorPass2: null,
        errorPass: null,
        errorName: null,
        errorEmail: null,
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
  handlePassword2Change = (e)=>{
    this.setState({
        password2: e.target.value

    });
  }

  handleEmailIdChange = (e)=>{
    this.setState({

        emailId: e.target.value

    });

  }

  registration = () =>{
    if(this.state.name == null || this.state.emailId == null || this.state.password==null){
      console.log('error');
      this.setState({
        errorName: "This Field is required",
        errorEmail: "This Field is required",
        errorPass: "This Field is required",
        errorPass2:"This Field is required",
      })

    }

    if(this.state.password !== this.state.password2)
    {
      this.setState({
        errorPass: "Passwords not match",
        errorPass2: "Passwords not match",
      })
    }

    else {
      this.setState({
        errorName: null,
        errorEmail:null,
        errorPass: null,
        errorPass2:null,
      })
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
            this.props.history.push('/login');
            }
          });
      }
    console.log("user", this.state.name, "email", this.state.emailId,"Password",this.state.password);
  }

  render(){
    return(
    <div>
      <AppBar
        style={styles.appBar}
        title="Show Down"
        iconElementRight={<Link style={{ color: 'white' }} to='/login'>Login</Link>}
      />
    <Card className = "container">
      <form action='/'>
        <h2>Sign UP</h2>

        <TextField
          floatingLabelText="Name"
          name={this.state.name}
          errorText={this.state.errorName}
          onChange={this.handleUserNameChange.bind(this)}
        />
        <br/>
        <TextField
          floatingLabelText="Email Id"
          name={this.state.emailId}
          errorText={this.state.errorEmail}
          onChange={this.handleEmailIdChange.bind(this)}
        />
        <TextField
          floatingLabelText="Password"
          name={this.state.password}
          type="password"
          errorText={this.state.errorPass}
          onChange={this.handlePasswordChange.bind(this)}
        />
        <br/>
        <TextField
          floatingLabelText="Confirm Password"
          name={this.state.password2}
          type="password"
          errorText={this.state.errorPass2}
          onChange={this.handlePassword2Change.bind(this)}
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
