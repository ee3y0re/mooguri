//need connect to link presentational container and component container
import React from "react";
import { connect } from "react-redux";
//remember to import the action you want to pass into props
import { login, clearSessionErrors } from "../../actions/session_actions";
//remember to import the presentational component itself
import LoginForm from "./login_form";
import { openModal, closeModal } from "../../actions/modalActions";

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  let allUsers = state.entities.users;
  return {
    currentUser: allUsers[currentUserId],
    errors: state.errors.session,
    formType: "Log In",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button id="signup-button" onClick={() => dispatch(openModal("Sign Up"))}>
        Sign Up
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
