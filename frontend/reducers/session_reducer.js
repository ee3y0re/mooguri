//keeps track of current user
import {
  RECEIEVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions"

const _nullState = {
  id: null
}

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIEVE_CURRENT_USER:
      return Object.assign({}, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return _nullState;
    default:
      return state;
  }
}

export default SessionReducer