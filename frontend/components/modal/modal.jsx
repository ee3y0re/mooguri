import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../login/login_form_container";
import SignupFormContainer from "../signup/signup_form_container";
import ReviewFormContainer from "../review/review_form_container";



const Modal = ({ modal, closeModal, ...args }) => {
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
      component = <LoginFormContainer />;
      break;
    case "Sign Up":
      component = <SignupFormContainer />;
      break;
    case "Create Review":
      component= <ReviewFormContainer productId={args}/>;
      //need a break or else will keep going to default null
      break;
    default:
      return null; //if neither signin or login, close modal
  }

  return (
    //clicking outside of modal closes modal
    <div className="modal-background" onClick={closeModal}>
      {/* prevent modal closing when clicking inside */}
      <div className="modal-child" onClick={(e) => e.stopPropagation()}> 
        {/* from the switch statement of what kind of component to show */}
        { component }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

/* exporting a connected version of our Modal component so that we can have access 
to our modal slice of state and the ability to dispatch the closeModal action */
export default connect(mapStateToProps, mapDispatchToProps)(Modal);