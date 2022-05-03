import React from "react";
// container imports
import { useSelector, useDispatch } from "react-redux";
// use the value in the url to be able to map the products
import { useLocation } from "react-router";
// import the action for getting all products
import { fetchProducts } from "../../actions/product_actions";

const SearchResult = () => {
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