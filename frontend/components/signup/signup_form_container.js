import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  let allUsers = state.entities.users;
  return {
    currentUser: allUsers[currentUserId],
    errors: state.errors.session,
    formType: "Sign Up"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupForm));