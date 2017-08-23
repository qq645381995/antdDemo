import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import {Router, Route, Link, hashHistory, useRouterHistory, IndexRoute, Redirect, IndexRedirect} from 'react-router';
// Render the main component into the dom ReactDOM.render(<App />,
// document.getElementById('app'));
import Main from 'components/Main.js';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRedirect to="demo"/>
      <Route path='demo' component={Main}/>
    </Route>
  </Router>, document.getElementById('app'));
