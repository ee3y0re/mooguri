//need connect to link presentational container and component container
import { connect } from "react-redux";
//remember to import the action you want to pass into props
import { login } from "../../actions/session_actions";
//remember to import the presentational component itself
import LoginForm from "./login_form";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  let allUsers = state.entities.users;
  return {
    currentUser: allUsers[currentUserId],
    errors: state.errors.session,
    formType: "Log In"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));