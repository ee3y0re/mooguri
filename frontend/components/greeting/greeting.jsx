import React from "react";

const Greeting = ({ currentUser, logout, openModal }) => {
  const completedLogin = () => {
    return (
      <div className="complete-login">
        <h1>Welcome back, {`${currentUser.username}`}!</h1>
        <button id="logout-button" onClick={logout}>Logout</button>
      </div>
    );
  }

  const needLogin = () => {
    return (
      <nav className="nav">
        <button id="login-button" onClick={() => openModal("Log In")}>Login</button>
      </nav>
    )
  }
  return currentUser ? completedLogin() : needLogin();
}

export default Greeting;
