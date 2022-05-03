import React from "react";
// container imports
import { useSelector, useDispatch } from "react-redux";
// use the value in the url to be able to map the products
import { useLocation } from "react-router";
// import the action for getting all products
import { fetchProducts } from "../../actions/product_actions";

const SearchResult = () => {
  // // set up the part of state that returns after calling fetchProducts
  // // set up a variable for using dispatch
  // // assign value from url that will be used to select specific products
  // // parse the previous line into a string for reference in select products
  // // find a way to call the fetching of products
  return (
    <div>Search Result</div>
    /*
      {
        arrayOfAllProducts?.map((product) => {
          return (
            <div className="product-index-row-list-items-container" key={product.id.toString()}>
              <li className="product-index-row-list-items">
                <Link to={`/products/${product.id}`}><img src={product.photoUrl} alt={`${product.name}`} className="product-index-thumbnail" /></Link>
              </li>
            </div>
          )
        })
      }
    */
  );
};

export default SearchResult;