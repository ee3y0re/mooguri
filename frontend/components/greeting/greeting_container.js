import { connect } from "react-redux";
import { logout } from "../../actions/session_actions"
import { openModal } from "../../actions/modal_actions";
import Greeting from "./greeting";

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  let allUsers = state.entities.users;
  //GreetingContainer passes as props to the presentational component currentUser from the state
  return {
    currentUser: allUsers[currentUserId]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    openModal: (modal) => dispatch(openModal(modal))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
