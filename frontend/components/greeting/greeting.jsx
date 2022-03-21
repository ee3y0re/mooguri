import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const completedLogin = () => {
    return (
      <div className="complete-login">
        <h1>Welcome back, {`${currentUser.username}`}!</h1>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  const needLogin = () => {
    return (
      <nav>
        <h1>Explore what's unique and one of a kind, here.</h1>
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/login">Log In</Link>
      </nav>
    )
  }
  return currentUser? completedLogin() : needLogin();
}

export default Greeting;
