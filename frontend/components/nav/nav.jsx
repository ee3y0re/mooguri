import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCartProducts } from "../../actions/cart_actions";
import { Link } from "react-router-dom";
import SearchBar from "../search/search_bar";
import ModalContainer from "../modal/modal";
import AuthContainer from "../auth/auth_container";

const Nav = () => {
  const currentCart = useSelector((wholeState) => {
    return wholeState.entities.carts;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserCartProducts());
  }, []);

  // let cartIds = Object.keys(currentCart);
  // let cartAmt = 0;
  // for (let i = 0; i < cartIds.length; i++) {
  //   let keyNum = cartIds[i];
  //   cartAmt += currentCart[keyNum].qty
  // }
  // let cartNumClass;
  // if (cartAmt === 0) {
  //   cartNumClass = "no-cart-counter";
  // } else {
  //   cartNumClass = "cart-counter"
  // }
  let cartVal = Object.values(currentCart);
  let cartNum;
  let cartNumClass;
  if (cartVal.length === 0) {
    cartNumClass = "no-cart-counter";
  } else {
    cartNum = cartVal.length;
    cartNumClass = "cart-counter"
  }

  return (
    <div>
      <div className="nav-container">
        <div id="nav-general">
          <h1 className="logo">
            <Link to="/" id="logo-link">MOOguri</Link>
          </h1>
          <SearchBar />
          <ModalContainer />
          <AuthContainer />
          <Link to="/checkout" id="cart-counter-link">
            {/* <div className="cartSweater"> */}
              <div className="cart-logo-container">
                <div className={cartNumClass}>{cartNum}</div>
              {/* <div className={cartNumClass}>{cartAmt}</div> */}
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22a2 2 0 100-4 2 2 0 000 4zm7 0a2 2 0 100-4 2 2 0 000 4zm5-17H5.665l-.687-3.21A1 1 0 004 1H1a1 1 0 000 2h2.191l2.831 13.21a.962.962 0 00.064.159c.017.053.038.105.063.155a.979.979 0 00.133.153.926.926 0 00.088.1c.058.041.12.077.185.105.034.022.07.042.107.06A.993.993 0 007 17h11a1 1 0 00.958-.713l3-10A1.001 1.001 0 0021 5zm-2.244 5H16V7h3.656l-.9 3zM7.819 15l-.6-3H9v3H7.819zM11 12h3v3h-3v-3zm0-2V7h3v3h-3zM9 7v3H6.82l-.6-3H9zm8.256 8H16v-3h2.156l-.9 3z"></path>
                </svg>
              </div>
            {/* </div> */}
          </Link>
        </div>
      </div>
      <div id="nav-categories-container-underline">
        <div className="temp" id="nav-categories-container">
          <ul id="nav-cat-list">
            <li className="nav-cat-list-items">Mother's Day Gifts</li>
            <li className="nav-cat-list-items">Jewelry &amp; Accessories</li>
            <li className="nav-cat-list-items">Clothing &amp; Shoes</li>
            <li className="nav-cat-list-items">Home &amp; Living</li>
            <li className="nav-cat-list-items">Wedding &amp; Party</li>
            <li className="nav-cat-list-items">Toys &amp; Entertainment</li>
            <li className="nav-cat-list-items">Art &amp; Collectibles</li>
            <li className="nav-cat-list-items">Craft Supplies</li>
            <li className="nav-cat-list-items">Gifts &amp; Gift Cards</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;