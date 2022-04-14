/*
purpose to conditionally render comp or redirect depending on if user logged in
need to check 
  if app state has currentUser property
  if try, redirect to main "/"
  otherwise render specific comp
*/

import React from "react";
import { Route } from "react-router";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// be able to set component assignment to container
// passing in the path of the route belonging to the component
// loggedIn comes from mapStateToProps
// exact i think is the path
const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  )
}

const mapStateToProps = (state) => {
  return { loggedIn: Boolean(state.session.id) } //checking if state session id exists
}

export const AuthRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Auth)
);

export const ProtectedRoute = withRouter(
  connect(
    mapStateToProps,
    null
  )(Protected)
);