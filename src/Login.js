import React, { Component } from "react";
import { Link } from "react-router-dom";
class login extends Component {
  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form>
          <div className="">
            <label>Email</label> <br />
            <input type="email" name="email" /> <br />
          </div>
          <div>
            <label>Password</label> <br />
            <input type="password" name="password" /> <br />
          </div>

          <button type="button">Login</button>
          <br />

          <Link to="/SignUp">
            <SignUp />
          </Link>
        </form>
      </div>
    );
  }
}

export default login;
