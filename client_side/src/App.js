import React, { Component } from 'react';
import './App.css';
import LoginPage from './Components/LoginPage';
import SearchPage from './Components/SearchPage';
import HomePage from './Components/HomePage';
import SignUpForm from './Components/SignUpForm';
import {Route,  Switch} from 'react-router-dom'




class App extends Component {
  render() {
    return (
      <div>
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
      <Route  path="/home" component={HomePage}/>
      <Route path="/search" component={SearchPage}/>
    </Switch>
  </main>
)

export default App;
