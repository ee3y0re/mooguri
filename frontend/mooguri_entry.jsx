import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";


// // // testing start
// test thunk actions to make sure actions and api util both work correctly
// // // testing end


document.addEventListener("DOMContentLoaded", () => {

  let store;
  //check to see if there is a window.currentUser
  if (window.currentUser) {
    //If there is, create a preloadedState like below:
    const preloadedState = {
      entities: { // entities: users: 1: { user }
        users: { [window.currentUser.id]: window.currentUser }
      }, //session: id: 1
      session: { id: window.currentUser.id}
    };
    //Pass this preloadedState to configureStore.
    store = configureStore(preloadedState)
    // Remove currentUser from the window
    delete window.currentUser;
  } else {
    // If there is no window.currentUser, then configureStore without any arguments.
    store = configureStore();
  }


  const root = document.getElementById("root");
  // const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
})