import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalContainer from "./modal/modal";
import GreetingContainer from "./greeting/greeting_container";

//currently trying aws set up
//need to import from util to fetch all products since splash page shows products
import { fetchProducts } from "../util/product_api_util";
import ProductSnapshotContainer from "./product/products_snapshot_container";
import ProductSingularContainer from "./product/product_singular_container";

//state change and props change cause rerender
//always import containers not presentational EXCEPT child presentational
  //threading
  //User show > user index > user container; just direct import presentation from show
  
export default class App extends React.Component {

  render(){
    return (
      <div className="from-app">
        {/* needs to show the login button */}
        <ModalContainer /> 
        <h1 className="logo">Mooguri</h1>
        <GreetingContainer />

        <Switch>

          {/* do user auth later
          <Route path="/login" component={LoginFormContainer}/>
          <Route path="/signup" component={SignupFormContainer} /> */}

          <Route path="/products/:productId" component={ProductSingularContainer} />
          <Route path="/" component={ProductSnapshotContainer} />
        </Switch>

      </div>
    );
  }

};