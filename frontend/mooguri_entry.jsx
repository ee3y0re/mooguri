import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

//for testing
//you have to test thunk actions to make sure actions and api util both work correctly
import { signup, login, logout } from "./actions/session_actions"
//going straight to action rather than the thunk action will send the action to reducer but will not make ajax request to save user
// import { receiveCurrentUser } from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  // ReactDOM.render(<>I am from the entry file.</>, root);
  ReactDOM.render(<Root store={store} />, root);


  //just for testing, delete beforehand
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
})