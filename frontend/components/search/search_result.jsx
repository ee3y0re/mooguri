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
    /* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="200" height="200" version="1.1" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet" class="" aria-hidden="true" focusable="false"><defs id="no-results-bottom-right-Defs1029"><clipPath id="no-results-bottom-right-ClipPath1037"><path id="no-results-bottom-right-Path1031" d="M126.4,161c-3-3.7-9-12.5-9-12.5L114,141c0,0-4-12.4-4.3-17.1c-0.6-9.3,1.9-16,5.6-24.5     c7.2-16.3,21.8-27.1,40.5-31.8l3.8-1.5l1.2-1.4l-14.5-48.9l-4.9-12.1c-2.9,0.5-8.4,2.9-11.1,3.6c-12.1,3.2-22,8.6-32.1,13.9     C87,27.8,69.3,45.2,69.3,45.2S52.8,62.3,47.8,74.8c-1.6,4.7-3,9.5-4,14.3C42,96,40.7,111.6,39.4,119c-1.4,8,2.8,27.8,2.8,27.8     s3,11.6,5.7,18.7c4.4,11.3,10.8,21.8,18.9,30.9c0,0,24.3-12.4,26.2-13.9s16.4-9,17.6-9.6c1.2-0.6,12.6-4.4,12.6-4.4l6-2.8     c0.2-0.3,0.3-0.7,0.4-1.1C129.6,164.4,126.5,161,126.4,161" fill="#000000" class=""></path></clipPath></defs><g id="no-results-bottom-right-G1030" transform="matrix(1,0,0,1,0,0)"><image id="no-results-bottom-right-Image1032" width="200" height="200" alt="" transform="matrix(1,0,0,1,0,0)" clip-path="url(&quot;#no-results-bottom-right-ClipPath1037&quot;)" xlink:href="https://img0.etsystatic.com/site-assets/brand-refresh/textures/yellow/300px/yellow-texture-10.jpg"></image></g></svg> */
    <div>
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
            <h1>We couldn't find any results for "{searchCompareRef}"</h1>
            <br />
            <span>Try searching something else instead?</span>
          </div> :
          null
      }
    </div>
  );
};

export default withRouter(SearchResult);