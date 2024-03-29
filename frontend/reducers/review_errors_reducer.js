import {
  RECEIVE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS,
} from "../actions/reviewActions";

const ReviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_REVIEW:
      return [];
    case RECEIVE_REVIEW_ERRORS:
      return action.errors;
    case CLEAR_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
}

export default ReviewErrorsReducer;