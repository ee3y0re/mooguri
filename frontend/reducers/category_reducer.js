// // import constants
// // use function that takes in default state and specified action
// // make sure state is preserved
// // create a copy of state to manpulate
// // use a switch statement to determine how state will change
// // export the reducer

// // these are the imported actions with their types
import {
  RECEIVE_CATEGORIES,
  RECEIVE_CATEGORY_PRODUCTS,
} from "../actions/category_actions";

const CategoryReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  // // Object.assign will create a copy of state to an empty {}
  // // at this time, we may not need it right now because we are not deleting, creating, or updating state
  // let changeState = Object.assign({}, state);
  // switched based on the action type
  // 4
  debugger
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      nextState = Object.assign({}, nextState, action.categories);
      return nextState;
    // case RECEIVE_CATEGORY_PRODUCTS:
    //   return nextState;
    default:
      return state;
  }
};

export default CategoryReducer;
