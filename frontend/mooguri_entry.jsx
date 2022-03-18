import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<>I am from the entry file.</>, root);

  //just for testing, delete before hand
  window.signup = signup;
  window.login = login;
  window.logout = logout;

})