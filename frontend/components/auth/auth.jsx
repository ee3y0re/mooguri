import React from "react";
import "./Auth.scss";
import Button from "../../modules/buttons/Button";

const Auth = ({ currentUser, logout, openModal }) => {
  const SignOut = () => {
    return (
      // <button className="button-drk" onClick={logout}>
      //   SignOut
      // </button>
      <Button>Sign Out</Button>
    );
  };

  const SignIn = () => {
    return (
      // <button className="button-lgt" onClick={() => openModal("Log In")}>
      //   Sign In
      // </button>
      <Button isTransparent>Sign In</Button>
    );
  };
  return currentUser ? SignOut() : SignIn();
};

export default Auth;
