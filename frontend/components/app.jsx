import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContiner from "./session_form/signup_form_container";

//state change and props change cause rerender
//always import containers not presentational EXCEPT child presentational
  //threading
  //User show > user index > user container; just direct import presentation from show
const App = () => {
  return (
    // <div className="from-app">

    //   <GreetingContainer />

    //   <Route path="/login" component={LoginFormContainer}/>
    //   <Route path="/signup" component={SignUpFormContiner}/>
    // </div>
    <div>App Page Coming Soon</div>
  );
};

export default App;