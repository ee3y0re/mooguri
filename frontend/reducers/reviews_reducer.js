import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions";


const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.reviews)
    case RECEIVE_REVIEW:
      // debugger
      nextState[action.review.id] = action.review;
      return nextState;
    case REMOVE_REVIEW:
      // debugger
      delete nextState[action.reviewId];
      return nextState;
    default:
      return state;
  }
}

export default ReviewsReducer;

// you forgot to create review seed
// test update with a line like the following: {id: 5, body: 'testing update', reviewerId: 4, productId: 1}