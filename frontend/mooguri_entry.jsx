import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";

// // // testing start
//you have to test thunk actions to make sure actions and api util both work correctly
// import { signup, login, logout } from "./actions/session_actions";
// import { fetchProducts, fetchProduct } from "./actions/product_actions";
// // going straight to action rather than the thunk action will send the action to reducer but will not make ajax request to save user
// import { receiveCurrentUser } from "./actions/session_actions"
import { fetchReviews, fetchReview, createReview, updateReview, deleteReview } from "./actions/review_actions"
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


  // // testing start
  // // import or initialize function
  // // window.function = function
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.fetchProducts = fetchProducts;
  // window.fetchProduct = fetchProduct;
  // // check responseJSON
  window.fetchReviews = fetchReviews;
  window.fetchReview = fetchReview;
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // // //testing ended
})