import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/product_actions"
import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW
} from "../actions/review_actions";

const ProductsReducer = (state = {}, action) => {
  debugger
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PRODUCT:
      debugger
      nextState[action.product.id] = action.product;
      return nextState;
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.products)
    // TODO: refactor
    case RECEIVE_REVIEWS:
      debugger
      return Object.assign({}, state, action.reviews)
    case RECEIVE_REVIEW:
      debugger
      nextState[action.review.id] = action.review;
      return nextState;
    case REMOVE_REVIEW:
      // debugger
      delete nextState[action.reviewId];
      return nextState;
    default:
      debugger
      return state;
  }
}

export default ProductsReducer;