import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/home";
import ProductSingularContainer from "./product/product_singular_container";
import Category from "../modules/category/Category"
import SearchResult from "./search/search_result";
import CartCheckout from "./cart/cart_checkout";
import Directory from "./footer/directory";
import Nav from "./nav/nav";
import CompleteCheckout from "./cart/complete_checkout";

//state change and props change cause rerender
//always import containers not presentational EXCEPT child presentational
//threading
//User show > user index > user container; just direct import presentation from show

const App = () => {
  return (
    <div id="from-app">
      <Nav />
      <Switch>
        <Route path="/search" component={SearchResult} />
        <Route
          path="/products/:productId"
          component={ProductSingularContainer}
        />
        <Route
          path="/categories/:categoryId"
          component={Category}
        />
        <Route path="/checkout" component={CartCheckout} />
        <Route path="/checkout-complete" component={CompleteCheckout} />
        <Route path="/" component={Home} />
      </Switch>
      <Directory />
    </div>
  );
};

export default App;
