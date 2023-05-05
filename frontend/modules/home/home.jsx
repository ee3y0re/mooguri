import React from "react";
import CategoriesList from "../category/CategoryList";
import ProductListContainer from "../product/list/ProductListContainer";
import ProductList2Container from "../product/list/ProductList2Container";
import './Home.scss'

const Home = () => {

  return (
    <div id="home-container">
      <div id="ribbon"></div>
      <main id="front-page">
        {/* <CategoriesList displayBanner={true}/>
        <ProductListContainer />
        <CategoriesList displayBanner={false} className="categories-list-two"/>
        <ProductList2Container /> */}
      </main>
    </div>
  );
};

export default Home;
