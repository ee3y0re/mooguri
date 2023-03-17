import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

import {
  listAllCategories,
  listCategoryProducts
} from "./actions/category_actions" // near the top

document.addEventListener("DOMContentLoaded", () => {
  let store;
  // // check to see if there is a window.currentUser
  if (window.currentUser) {
    // // If there is, create a preloadedState like below:
    const preloadedState = {
      entities: {
        // entities: users: 1: { user }
        users: { [window.currentUser.id]: window.currentUser },
      }, // // session: id: 1
      session: { id: window.currentUser.id },
    };
    // // Pass this preloadedState to configureStore.
    store = configureStore(preloadedState);
    // Remove currentUser from the window
    delete window.currentUser;
  } else {
    // If there is no window.currentUser, then configureStore without any arguments.
    store = configureStore();
  }

  // // uncomment below to see state while testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.listAllCategories = listAllCategories
  window.listCategoryProducts = listCategoryProducts

  const root = document.getElementById("root");
  // const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);
});
