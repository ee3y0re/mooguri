import React from "react";
import "./Auth.scss";
import Button from "../../modules/buttons/Button";

const Auth = ({ currentUser, logout, openModal }) => {
  const SignOut = () => {
    return (
      <Button styleKey="clear" onClick={logout}>
        Sign Out
      </Button>
    );
  };

  const SignIn = () => {
    return (
      <Button styleKey="clear" onClick={() => openModal("Log In")}>
        Sign In
      </Button>
    );
  };
  return currentUser ? SignOut() : SignIn();
};

export default Auth;
