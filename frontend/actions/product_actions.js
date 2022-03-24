import * as ProductApiUtil from "../util/product_api_util"

export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const RECEIVE_PRODUCT = "RECEIVE_PRODUCT";

const receiveProducts = (products) => {
  return {
    type: RECEIVE_PRODUCTS,
    products
  }
  
}
const receiveProduct = (product) => {
  return {
    type: RECEIVE_PRODUCT,
    product
  }
}

export const fetchProducts = () => (dispatch) => {
  return ProductApiUtil.fetchProducts()
    .then((products) => dispatch(receiveProducts(products)));
};

export const fetchProduct = (productId) => (dispatch) => {
  debugger
  return ProductApiUtil.fetchProduct(productId)
    .then((product) => dispatch(receiveProduct(product)));
};