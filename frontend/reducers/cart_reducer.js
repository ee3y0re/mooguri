import {
  RECEIVE_CART_PRODUCTS, 
  RECEIVE_CART_PRODUCT, 
  DELETE_CART_PRODUCT
} from "../actions/cart_actions";

const CartsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
  case RECEIVE_CART_PRODUCTS:
    return action.carts;
  case RECEIVE_CART_PRODUCT:
    return action.cart
  case DELETE_CART_PRODUCT:
    delete nextState[action.cartItemId];
    return nextState;
  default:
    return state;
  }
}

export default CartsReducer;