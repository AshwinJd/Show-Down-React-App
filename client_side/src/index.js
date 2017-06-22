import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter, Router} from 'react-router-dom'
// import history from './history';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import { Router,IndexRoute, Route, browserHistory, Switch } from 'react-router';
// import HomePage from './Components/HomePage';
// import LoginPage from './Components/LoginPage';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHashHistory from 'history/createHashHistory';
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
