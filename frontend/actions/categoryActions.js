// import functions from api util
// import all as alias from location
import * as CategoryApiUtil from "../util/category_api_util";

// create constants to pass to reducers
// export constant which equals to string
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY_PRODUCTS = "RECEIVE_CATEGORY_PRODUCTS";

// create regular action creators with defined type
// function that takes in type of data, 
  // assigns stringified constant to type as key value pair,
  // then just the key with the data, shorted for data: data
// #2
const receiveCategories = (categories) => {
  return {
    type: "RECEIVE_CATEGORIES",
    categories
  }
}

const receiveCategoryProducts = (categoryProducts) => {
  return {
    type: "RECEIVE_CATEGORY_PRODUCTS",
    categoryProducts,
  };
}

// create thunk action creators involving dispatch
// will be exporting these functions to be used in frontend, similar to util
// return api request from api util
// which then returns promise simlar top action thunk creator
// #1
export const listAllCategories = () => (dispatch) => {
  return CategoryApiUtil.fetchAllCategories()
    .then((categories) => { return dispatch(receiveCategories(categories))}) 
}

export const listCategoryProducts = (categoryId) => (dispatch) => {
  return CategoryApiUtil.fetchProductsForCategories(categoryId)
    .then((products) => { return dispatch(receiveCategoryProducts(products))})
} 

// test by adding the following to the entry file
/*
import * as CategoryFunct from "./actions/categoryActions" // near the top

... 

  window.getState = store.getState; 
  window.dispatch = store.dispatch;
  window.listAllCategories = CategoryFunct.listAllCategories
  window.listCategoryProducts = CategoryFunct.listCategoryProducts
*/