import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./home/home"
import ModalContainer from "./modal/modal";
import AuthContainer from "./auth/auth_container";
import ProductSingularContainer from "./product/product_singular_container";

//state change and props change cause rerender
//always import containers not presentational EXCEPT child presentational
  //threading
  //User show > user index > user container; just direct import presentation from show
  
export default class App extends React.Component {

  render(){
    return (
      <div className="from-app">
        <h1 className="logo">
          <Link to="/" id="logo-link">Mooguri</Link>
        </h1>
        <ModalContainer /> 
        <AuthContainer />

        <Switch>

          {/* do user auth later
          <Route path="/login" component={LoginFormContainer}/>
          <Route path="/signup" component={SignupFormContainer} /> */}

          <Route path="/products/:productId" component={ProductSingularContainer} />
          <Route path="/" component={Home} />
        </Switch>

      </div>
    );
  }
};