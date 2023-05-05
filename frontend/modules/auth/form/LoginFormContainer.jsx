//need connect to link presentational container and component container
import React from "react";
import { connect } from "react-redux";
//remember to import the action you want to pass into props
import { login, clearSessionErrors } from "../../../actions/sessionActions";
import { openModal, closeModal } from "../../../actions/modalActions";
import Button from "../../../components/buttons/Button";
//remember to import the presentational component itself
import AuthForm from "./AuthForm";

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  let allUsers = state.entities.users;
  return {
    currentUser: allUsers[currentUserId],
    errors: state.errors.session,
    formType: "Log In",
    stateStart: {
      email: "",
      password: "",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <Button
        className="auth-sign-up"
        onClick={() => dispatch(openModal("Sign Up"))}
      >
        Sign Up
      </Button>
    ),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
