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
      <div id="from-app">
        <div className="nav-container">
          <div id="nav-general">
            <h1 className="logo">
              <Link to="/" id="logo-link">MOOguri</Link>
            </h1>
            {/* TODO: create search component and change value to "Search" that disappears after clicking*/}
            <input type="text" value="Search and Cart Under Construction" id="temp-search" className="temp"/>
            <ModalContainer /> 
            <AuthContainer />
            {/* TODO: create cart componentturn into button after */}
            <div id="cart-logo-container">
              <span className="temp" id="shop-logo">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm5-17H5.665l-.687-3.21A1 1 0 004 1H1a1 1 0 000 2h2.191l2.831 13.21a.962.962 0 00.064.159c.017.053.038.105.063.155a.979.979 0 00.133.153.926.926 0 00.088.1c.058.041.12.077.185.105.034.022.07.042.107.06A.993.993 0 007 17h11a1 1 0 00.958-.713l3-10A1.001 1.001 0 0021 5zm-2.244 5H16V7h3.656l-.9 3zM7.819 15l-.6-3H9v3H7.819zM11 12h3v3h-3v-3zm0-2V7h3v3h-3zM9 7v3H6.82l-.6-3H9zm8.256 8H16v-3h2.156l-.9 3z"></path>
                </svg>
              </span>
            </div>   

          </div>          
        </div>

        <div id="nav-categories-container-underline">
          <div className="temp" id="nav-categories-container">
            <ul id="nav-cat-list">
              <li className="nav-cat-list-items">Categories</li>
              <li className="nav-cat-list-items">Are</li>
              <li className="nav-cat-list-items">Under</li>
              <li className="nav-cat-list-items">Construction</li>
              <li className="nav-cat-list-items">Unfortunately</li>
              <li className="nav-cat-list-items">*Sweats*</li>
            </ul>
          </div>          
        </div>


        <Switch>

          {/* TODO: protected routes */}
          {/* <Route path="/login" component={LoginFormContainer}/>
          <Route path="/signup" component={SignupFormContainer} /> */}

          <Route path="/products/:productId" component={ProductSingularContainer} />
          <Route path="/" component={Home} />
        </Switch>

      </div>
    );
  }
};