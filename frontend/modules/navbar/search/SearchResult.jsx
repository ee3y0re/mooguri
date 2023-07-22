import React, { useEffect } from "react";
// container imports
import { useSelector, useDispatch } from "react-redux";
// use the value in the url to be able to map the products
import { withRouter, useLocation, Link } from "react-router-dom";
// import the action for getting all products
import { fetchProducts } from "../../../actions/productActions";
import Container from "../../../components/container/Container";
import ProductItem from "../../../components/list/ProductItem";
import "./SearchResult.scss";

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
    .get("abbySpeak")
    .replace("+", " ")
    .toLowerCase();

  // // find a way to call the fetching of products
  useEffect(() => {
    makeFetchProducts(fetchProducts);
  });

  let counter = 0;
  let searchDeclare = "";
  !searchCompareRef
    ? (searchDeclare = "All Categories")
    : (searchDeclare = searchCompareRef);

  return (
    <div
      id={`${
        !Object.values(possibleProducts).length ? "results-error" : "results"
      }`}
    >
      <Container className="results-container">
        <h2 className="results-header">
          Here are your results for "{searchDeclare}"
        </h2>
        <ul className="results-list">
          {Object.values(possibleProducts)?.map((product) => {
            const productName = product.productName.toLowerCase();
            if (productName.includes(searchCompareRef)) {
              counter += 1;
              return (
                <ProductItem
                  className="results-item"
                  key={product.id}
                  id={product.id}
                  imgSrc={product.photoUrl}
                  name={product.productName}
                  price={product.price}
                  seller={product.sellerId}
                />
              );
            }
          })}
        </ul>
        {!counter ? (
          <div className="search-error-container">
            <div className="search-error-text">
              <p>We couldn't find any results for "{searchCompareRef}"</p>
              <br />
              <p>Try searching something else instead?</p>
            </div>
          </div>
        ) : null}
      </Container>
    </div>
  );
};

export default withRouter(SearchResult);
