import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import './App.css';
import LoginPage from './Components/LoginPage';
import SignUpForm from './Components/SignUpForm';
import {HashRouter, Route, Router, Switch, Redirect,Link} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';




class App extends Component {
  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          iconElementRight={<Link style={{ color: 'white' }} to='/login'>Login</Link>}
        />
        <Header />
        <Main />
      </div>
    );
  }
}

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={SignUpForm}/>
      <Route  path="/login" component={LoginPage}/>
    </Switch>
  </main>
)

const Header = () => (
  <header>
    <nav>




    </nav>
  </header>
)
// const Home = () => <h1>Hello from Home!</h1>
// const Address = () => <h1>We are located at 555 Jackson St.</h1>
export default App;
