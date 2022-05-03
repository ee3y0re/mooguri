import React, { useEffect } from "react";
// container imports
import { useSelector, useDispatch } from "react-redux";
// use the value in the url to be able to map the products
import { withRouter, useLocation, Link } from "react-router-dom";
// import the action for getting all products
import { fetchProducts } from "../../actions/product_actions";

const SearchResult = () => {
  // // set up the part of state that returns after calling fetchProducts
  const possibleProducts = useSelector((wholeState) => {
    return wholeState.entities.products;
  });
  // // set up a variable for using dispatch
  const makeFetchProducts = useDispatch();
  // // assign value from url that will be used to select specific products
  let searchLocation = useLocation();
  // // parse the previous line into a string for reference in select products
  let searchExtractParams = new URLSearchParams(searchLocation.search);
  // // get the value of the key in the search; key is "abbySpeak"
  // // replace each plus sign with a space to effectively compare with the other products
  let searchCompareRef = searchExtractParams
    .get("abbySpeak").replace("+", " ").toLowerCase();

  // // find a way to call the fetching of products
  useEffect(() => {
    makeFetchProducts(fetchProducts);
  });

  let counter = 0;
  return (
    <div id="search-results-container">
        {
          Object.values(possibleProducts)?.map((productEle) => {
            const productName = productEle.productName.toLowerCase();
            if (productName.includes(searchCompareRef)) {
              counter += 1;
              return (
                <div className="product-index-row-list-items-container" key={productEle.id.toString()}>
                  <li className="product-index-row-list-items">
                    <Link to={`/products/${productEle.id}`}><img src={productEle.photoUrl} alt={`${productEle.name}`} className="product-index-thumbnail" /></Link>
                  </li>
                </div>
              )
            }
          })
        }

    </div>
  );
};

export default withRouter(SearchResult);