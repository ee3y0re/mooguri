//keeps track of all users
import { RECEIEVE_CURRENT_USER } from "../actions/session_actions";

const UsersReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIEVE_CURRENT_USER:
      // debugger
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
    default:
      return state;
  }
}

export default UsersReducer;