import * as SessionApiUtil from '../util/session_api_util'

export const RECEIEVE_CURRENT_USER = "RECEIEVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// //action creators return actions which are objects with a type and payload
export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIEVE_CURRENT_USER,
    currentUser
  }
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  }
};

// export const signup = (user) => (dispatch) => {
//   return SessionApiUtil.signup(user)
//     .then((user) => dispatch(receiveCurrentUser(user))),
//     error => (
//       dispatch(receiveErrors(error.responseJSON))
//     )
// }


//incorrect
export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user)
    //promise is supposed to wrap around dispatching action for user and error
    //make sure both the user portion and error portion properly return separately
    .then(
      (modUser) => { 
        return dispatch(receiveCurrentUser(modUser))
      },
      (error) => {
        return dispatch(receiveErrors(error.responseJSON))
      }
    )
}

// // implicit
// export const login2 = (user) => (dispatch) => {
//   return SessionApiUtil.login(user)
//     .then(
//       user => dispatch(receiveCurrentUser(user)),
//       error => dispatch(receiveErrors(error.responseJSON))
//     )
// }

// // explicit
// export const login3 = (user) => (dispatch) => {
//   return SessionApiUtil.login(user)
//     .then(
//       (user) => {
//         return dispatch(receiveCurrentUser(user))
//       }, 
//       (err) => {
//         return dispatch(receiveErrors(err.responseJSON))
//       }
//     )
// };

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));
}