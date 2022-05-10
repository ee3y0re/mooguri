import {
  RECEIVE_CART_ITEMS, 
  RECEIVE_CART_ITEM, 
  DELETE_CART_ITEM
} from "../actions/cart_actions";

const CartsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch(action.type) {
  case RECEIVE_CART_ITEMS:
    return action.carts;
  case RECEIVE_CART_ITEM:
    return action.cart
  case DELETE_CART_ITEM:
    delete nextState[action.cartItemId];
    return nextState;
  default:
    return state;
  }
}

export default CartsReducer;