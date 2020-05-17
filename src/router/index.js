import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Weather from '../pages/weather/weather';
import App from '../App';

class MyRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/weather" exact component={Weather} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default MyRouter;
