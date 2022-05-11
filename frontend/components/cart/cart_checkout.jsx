import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUserCartItems } from "../../actions/cart_actions";
import CartCheckoutItem from "./cart_checkout_items";

const CartCheckout = () => {

  /* container */
  const currentCart = useSelector((wholeState) => {
    return wholeState.entities.carts;
  });
  const activeSession = useSelector((state) => {
    return state.session.id
  })
  const dispatch = useDispatch();

  /* componentDidMount */
  useEffect(() => {
    dispatch(fetchUserCartItems());
  },[]); //empty array only has useEffect run on mount and unmount

  console.log(activeSession)

  return (
    <div className="checkout-main-contain">
      <div className="checkout-flex-box-width-1400px">
        <div className="checkout-single-item">
          {
            !activeSession ?
            <div className="checkout-null">
              <header className="checkout-title-and-main-redirect">
                <h1 className="checkout-null-header">Your cart is empty.</h1>
              </header>
              <div className="checkout-null-flexbox">
                <Link 
                  to="/" 
                  id="checkout-null-link"
                >
                  Discover something unique to fill it up
                </Link>
                <p>
                  Mooguri offsets carbon emissions from being a demo site.
                </p>
              </div>
            </div>:
            <div>
              <header className="checkout-title-and-main-redirect">
                <h1>{Object.keys(currentCart).length} items in your cart</h1>
                <button className="checkout-bold-heading">
                  <Link to="/">Keep Shopping</Link>
                </button>
              </header>
              <div className="checkout-two-column">
                <CartCheckoutItem wholeCart={currentCart} />
                <aside className="checkout-payment-container">
                  <div className="checkout-payment-padding">
                    <h2 className="checkout-bold-heading">How you'll pay</h2>
                    <ul>
                      <li>Payment 1: Visa, Master, Amex, and Discover</li>
                      <li>Payment 2: Paypal</li>
                      <li>Klarna</li>
                    </ul>
                    <div className="price-line">
                      <span className="checkout-bold-heading">Item(s) total</span>
                      <span className="price-num">$99.99</span>
                    </div>
                    <div className="price-line" id="checkout-discount">
                      <span className="checkout-bold-heading">Shop discount (THANKU25)</span>
                      <span className="price-num">-25%</span>
                    </div>
                    <div className="price-line">
                      <span>Subtotal</span>
                      <span>$99.99</span>
                    </div>
                    <div className="price-line" id="checkout-shipping">
                      <span>Shipping</span>
                      <span>FREE</span>
                    </div>
                    <button id="auth-submit-button">Proceed to checkout</button>
                  </div>
                </aside>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default CartCheckout