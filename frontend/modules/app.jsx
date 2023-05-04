import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./home/Home";
import ProductContainer from "./product/ProductContainer";
import Category from "./category/Category";
import SearchResult from "./navbar/search/SearchResult";
import CartCheckout from "./cart/cart_checkout";
import Directory from "./footer/Footer";
import Nav from "./navbar/NavBar";
import CompleteCheckout from "./cart/complete_checkout";
import "./globalStyles.scss";

//state change and props change cause rerender
//always import containers not presentational EXCEPT child presentational
//threading
//User show > user index > user container; just direct import presentation from show

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div id="from-app">
      <Nav />
      <Switch>
        <Route path="/search" component={SearchResult} />
        <Route path="/products/:productId" component={ProductContainer} />
        <Route path="/categories/:categoryId" component={Category} />
        <Route path="/checkout" component={CartCheckout} />
        <Route path="/checkout-complete" component={CompleteCheckout} />
        <Route path="/" component={Home} />
      </Switch>
      <Directory />
    </div>
  );
};

export default App;
