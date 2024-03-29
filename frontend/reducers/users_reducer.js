//keeps track of all users
import { RECEIEVE_CURRENT_USER } from "../actions/sessionActions";

const UsersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIEVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser,
      });
    default:
      return state;
  }
};

export default UsersReducer;
