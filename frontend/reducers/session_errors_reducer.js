//keep track of error messages
import { RECEIEVE_CURRENT_USER, RECEIVE_ERRORS } from "../actions/session_actions";

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIEVE_CURRENT_USER:
      // debugger;
      return [];
    default:
      return state;
  }
}

export default SessionErrorsReducer;