import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exect path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
