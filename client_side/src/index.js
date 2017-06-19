import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter, Route, Router, Switch, Redirect} from 'react-router-dom'
// import history from './history';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import { Router,IndexRoute, Route, browserHistory, Switch } from 'react-router';
import routes from './routes';
// import HomePage from './Components/HomePage';
// import LoginPage from './Components/LoginPage';
import SignUpForm from './Components/SignUpForm';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHashHistory from 'history/createHashHistory';
import { Card, CardTitle } from 'material-ui/Card';
const history = createHashHistory();

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history ={history}>
    <HashRouter>
      <App />

    </HashRouter>
    </Router>


  </MuiThemeProvider>,
  document.getElementById('root'));
  registerServiceWorker();


  // const HomePage = () => (
  //   <h1>HASjdkasj</h1>
  // );
