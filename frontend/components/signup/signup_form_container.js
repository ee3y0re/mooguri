import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  // debugger
  return {
    errors: state.errors.session,
    formType: "Sign Up"
  };
};

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupForm));