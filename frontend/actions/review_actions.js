import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";

const receiveReviews = (reviewsPayload) => {
  return {
    type: RECEIVE_REVIEWS,
    reviewsPayload
  }
}
const receiveReview = (reviewPayload) => {
  return {
    type: RECEIVE_REVIEW,
    reviewPayload
  }
}
const removeReview = () => {
  return {
    type: REMOVE_REVIEW
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const clearReviewErrors = () => {
  return {
    type: CLEAR_REVIEW_ERRORS
  }
}

// use the below thunk action creator to test

export const fetchReviews = () => (dispatch) => {
  // review_actions.js: 34 Uncaught TypeError: _util_review_api_util__WEBPACK_IMPORTED_MODULE_0__ is not a function
  // ReviewApiUtil(function()) should be ReviewApiUtil.function()
  return ReviewApiUtil.fetchReviews()
    .then((reviews) => { return dispatch(receiveReviews(reviews)) });
}
export const fetchReview = (reviewId) => (dispatch) => {
  return ReviewApiUtil.fetchReview(reviewId)
    .then((review) => { return dispatch(receiveReview(review)) });
}
export const createReview = (review) => (dispatch) => {
  return ReviewApiUtil.createReview(review)
    .then(
      (review) => { return dispatch(receiveReview(review)) },
      (error) => { return dispatch(receiveErrors(error.responseJSON)) }
    );
}
export const updateReview = (review) => (dispatch) => {
  return ReviewApiUtil.updateReview(review)
    .then(
      (review) => { return dispatch(receiveReview(review)) },
      (error) => { return dispatch(receiveErrors(error.responseJSON)) }
    );
}
export const deleteReview = (reviewId) => (dispatch) => {
  return ReviewApiUtil.deleteReview(reviewId)
    .then(() => { return dispatch(removeReview()) });
}

// test with the following:
// dispatch(thunkActionCreatorFunctionName(argument))
// without reducer: check action section and ensure payload is as expected
// with reducers: check next state updated and still simple
// test clearing errors after you have error reducers