import React from "react";
import { closeModal } from "../../actions/modalActions";
import { connect } from "react-redux";
import LoginFormContainer from "../auth/form/LoginFormContainer";
import SignupFormContainer from "../auth/form/SignUpFormContainer";
import "./Modal.scss";

const Modal = ({ closeModal, modal }) => {
  /* If our modal slice is null, we'll return null from our component, 
  effectively making it non-existent.  */
  if (!modal) {
    return null;
  } //if no modal, it should be closed

  let component; //variable to save indication of login or signup
  /* Otherwise, we have a switch statement which will choose what component we 
  put inside of our .modal-child div which is inside of our .modal-background 
  div. */
  switch (modal) {
    case "Log In":
      component = <LoginFormContainer keyword={modal} />;
      break;
    case "Sign Up":
      component = <SignupFormContainer keyword={modal} />;
      break;
    default:
      return null; //if neither signin or login, close modal
  }

  // add close button to modal

  return (
    //clicking outside of modal closes modal
    <div className="modal-background" onClick={closeModal}>
      {/* prevent modal closing when clicking inside */}
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {/* from the switch statement of what kind of component to show */}
        {component}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

/* exporting a connected version of our Modal component so that we can have access 
to our modal slice of state and the ability to dispatch the closeModal action */
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
