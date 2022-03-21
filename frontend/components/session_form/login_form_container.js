//to use Link, you need both react and link
import React from "react";
import { Link } from "react-router-dom";
//need connect to link presentational container and component container
import { connect } from "react-redux";
//remember to import the action you want to pass into props
import { login } from "../../actions/session_actions";
//remember to import the presentational component itself
import SessionForm from "./session_form";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "Login",
    // we want to render signup so we need to link to signup based on app and not backend route
    // navLink: <Link to={"/api/session"}>Login</Link>
    navLink: <Link to="/signup">Sign Up</Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);