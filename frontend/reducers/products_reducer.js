import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/productActions";
import { RECEIVE_REVIEW } from "../actions/review_actions";

const ProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PRODUCT:
      nextState[action.product.id] = action.product;
      return nextState;
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.products);
    case RECEIVE_REVIEW:
      nextState[action.review.productId].reviews.push(action.review);
      return nextState;
    default:
      return state;
  }
}

export default ProductsReducer;