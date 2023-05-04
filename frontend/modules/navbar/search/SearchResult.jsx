import React, { useEffect } from "react";
// container imports
import { useSelector, useDispatch } from "react-redux";
// use the value in the url to be able to map the products
import { withRouter, useLocation, Link } from "react-router-dom";
// import the action for getting all products
import { fetchProducts } from "../../../actions/productActions";

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
  // // replace each plus sign with a space to effectively compare with the 
  // //  other products
  let searchCompareRef = searchExtractParams
    .get("abbySpeak").replace("+", " ").toLowerCase();

  // // find a way to call the fetching of products
  useEffect(() => {
    makeFetchProducts(fetchProducts);
  });

  let counter = 0;
  let searchDeclare = "";
  !searchCompareRef ? 
    searchDeclare = "All Categories" : 
    searchDeclare = searchCompareRef;

  return (
    <div id="search-res-comp">
      <div id="search-header-container">
        <h1>Here are your results for "{searchDeclare}"</h1>
      </div>
      <div id="search-results-container">
        <ul id="search-items-list-container">
          {
            Object.values(possibleProducts)?.map((productEle) => {
              const productName = productEle.productName.toLowerCase();
              if (productName.includes(searchCompareRef)) {
                counter += 1;
                return (
                  <li
                    className="li-search-results"
                    key={productEle.id.toString()}
                  >
                    <div className="search-results-links">
                      <Link
                        className="cap-link"
                        to={`/products/${productEle.id}`}
                      >
                        <div className="search-result-image-container">
                          <img
                            src={productEle.photoUrl}
                            alt={`${productEle.name}`}
                            className="product-index-thumbnail"
                          />
                        </div>
                        <br />
                        <br />
                        <h1 className="search-result-title">
                          {productEle.productName}
                        </h1>
                        <p className="search-results-price">
                          ${productEle.price}
                        </p>
                      </Link>
                    </div>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
      {
        !counter ?
          <div id="search-footer-container">
            <div id="search-error-bg"></div>
            <div id="search-error-text">
              <h1>We couldn't find any results for "{searchCompareRef}"</h1>
              <br />
              <span>Try searching something else instead?</span>
            </div>
          </div> :
          null
      }
    </div>
  );
};

export default withRouter(SearchResult);