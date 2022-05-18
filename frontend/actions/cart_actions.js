import * as CartApiUtil from "../util/cart_api_util";

// constants to be exported to reducers
export const RECEIVE_CART_PRODUCTS = "RECEIVE_CART_PRODUCTS";
export const RECEIVE_CART_PRODUCT = "RECEIVE_CART_PRODUCT";
export const DELETE_CART_PRODUCT = "DELETE_CART_PRODUCT";

// regular action creators
const receiveCartProducts = (carts) => {
  return {
    type: "RECEIVE_CART_PRODUCTS",
    carts
  };
};

const receiveCartProduct = (cart) => {
  return {
    type: "RECEIVE_CART_PRODUCT",
    cart
  };
};

const deleteCartProduct = (cartItemId) => {
  return {
    type: "DELETE_CART_PRODUCT",
    cartItemId
  };
};

// thunk action creators
export const fetchUserCartProducts = () => (dispatch) => {
  return CartApiUtil.fetchUserCartProducts()
    .then((carts) => dispatch(receiveCartProducts(carts)));
}

export const addProductToCart = (cart) => (dispatch) => {
  return CartApiUtil.addProductToCart(cart)
    .then((cart) => dispatch(receiveCartProduct(cart)));
}

export const updateProductInCart = (cart) => (dispatch) => {
  return CartApiUtil.updateProductInCart(cart)
    .then(cart => dispatch(receiveCartProduct(cart)))
}

export const deleteProductInCart = (cartItemId) => (dispatch) => {
  return CartApiUtil.deleteProductInCart(cartItemId)
    .then(() => dispatch(deleteCartProduct(cartItemId)))
}