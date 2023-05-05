import { connect } from "react-redux";
import { signup, clearSessionErrors } from "../../actions/sessionActions";
import SignupForm from "./AuthForm";
import { withRouter } from "react-router-dom";
import { closeModal } from "../../actions/modalActions";

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  let allUsers = state.entities.users;
  return {
    currentUser: allUsers[currentUserId],
    errors: state.errors.session,
    formType: "Sign Up",
    stateStart: {
      username: "",
      email: "",
      password: "",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignupForm));
