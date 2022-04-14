import { RECEIVE_PRODUCT, RECEIVE_PRODUCTS } from "../actions/product_actions"

const ProductsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PRODUCT:
      nextState[action.product.id] = action.product;
      return nextState;
    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, action.products)
    default:
      return state;
  }
}

export default ProductsReducer;