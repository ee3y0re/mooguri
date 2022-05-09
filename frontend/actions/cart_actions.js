import * as CartApiUtil from "../util/cart_api_util";

// constants to be exported to reducers
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";

// regular action creators
const receiveCartItems = () => {
  return {
    type: "RECEIVE_CART_ITEMS",
    carts
  };
};

const receiveCartItem = (cart) => {
  return {
    type: "RECEIVE_CART_ITEM",
    cart
  };
};

const deleteCartItem = (cartItemId) => {
  return {
    type: "DELETE_CART_ITEM",
    cartItemId
  };
};