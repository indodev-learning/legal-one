import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Call from './Call';
import Agent from './Agent';
import NotFound from './NotFound';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/agent/:id" component={Agent} />
        <Route exact path="/call/:number" component={Call} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;