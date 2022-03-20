//keeps track of current user
import {
  RECEIEVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions"

/* 
{entities: {…}, session: {…}, errors: {…}}
entities:
  users:
    undefined: //WHY DOES THE ID KEEP GETTING UNDEFINED
      email: "vanillabean@abbymail.com"
      password: "BestIceCreamEver"

errors:
  session: []
session:
  id: undefined //AHHH WHY IS THE ID UNDEFINED
*/

const SessionReducer = (state = { id: null }, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIEVE_CURRENT_USER:
      debugger
      return Object.assign({}, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      newState[id] = null;
      return newState;
    default:
      return state;
  }
}

export default SessionReducer