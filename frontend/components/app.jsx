import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./login/login_form_container";
import SignupFormContainer from "./signup/signup_form_container";

//state change and props change cause rerender
//always import containers not presentational EXCEPT child presentational
  //threading
  //User show > user index > user container; just direct import presentation from show
const App = () => {
  return (
    <div className="from-app">
      {/* needs to show the login button */}
      <ModalContainer /> 
      <h1 className="logo">Mooguri</h1>
      <GreetingContainer />
      {/* <Switch>
      // other routes really
        <Route path="/login" component={LoginFormContainer}/>
        <Route path="/signup" component={SignupFormContainer} />
      </Switch> */}
    </div>
  );
};

export default App;