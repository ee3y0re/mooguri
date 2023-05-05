import React from "react";
import "./Auth.scss";
import Button from "../../components/buttons/Button";

const Auth = ({ currentUser, logout, openModal }) => {
  const SignOut = () => {
    return (
      <Button styleKey="clear" clickEvent={logout}>
        Sign Out
      </Button>
    );
  };

  const SignIn = () => {
    return (
      <Button styleKey="clear" clickEvent={() => openModal("Log In")}>
        Sign In
      </Button>
    );
  };
  return currentUser ? SignOut() : SignIn();
};

export default Auth;
