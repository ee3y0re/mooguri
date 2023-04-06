import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserCartProducts } from "../../actions/cart_actions";
import SearchBar from "../search/SearchBar";
import ModalContainer from "../modal/modal";
import AuthContainer from "../auth/AuthContainer";
import "./NavBar.scss";

const NavBar = () => {
  const currentCart = useSelector((wholeState) => {
    return wholeState.entities.carts;
  });
  const activeSession = useSelector((state) => {
    return state.session.id;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (activeSession) dispatch(fetchUserCartProducts());
  }, []);

  let cartVal = Object.values(currentCart);
  let cartNum;
  let cartNumClass;
  if (cartVal.length === 0) {
    cartNumClass = "nav-cart-empty";
  } else {
    cartNum = cartVal.length;
    cartNumClass = "nav-cart-counter";
  }

  return (
    <section id="nav">
      <div className="nav-container">
        <Link to="/" className="nav-link">
          <h1 className="nav-logo">MOOguri</h1>
        </Link>
        <div className="nav-wrapper">
          {/* <ModalContainer /> */}
          <AuthContainer />
          <Link to="/checkout" className="nav-cart-link">
            <p className={cartNumClass}>{cartNum}</p>
            <svg className="nav-cart-icon" viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
          </Link>
        </div>
      <div className="test-dummy3">
        <SearchBar />
        {/* <ul id="nav-cat-list">
            <li className="nav-cat-list-items">Mother's Day Gifts</li>
            <li className="nav-cat-list-items">Jewelry &amp; Accessories</li>
            <li className="nav-cat-list-items">Clothing &amp; Shoes</li>
            <li className="nav-cat-list-items">Home &amp; Living</li>
            <li className="nav-cat-list-items">Wedding &amp; Party</li>
            <li className="nav-cat-list-items">Toys &amp; Entertainment</li>
            <li className="nav-cat-list-items">Art &amp; Collectibles</li>
            <li className="nav-cat-list-items">Craft Supplies</li>
            <li className="nav-cat-list-items">Gifts &amp; Gift Cards</li>
          </ul> */}
      </div>
      </div>
    </section>
  );
};

export default NavBar;
