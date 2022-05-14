import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import { fetchUserCartItems, deleteItemOnCart } from "../../actions/cart_actions";
import CartCheckoutItem from "./cart_checkout_items";
import EmptyCart from "./empty_cart";

const CartCheckout = () => {

  /* container */
  const currentCart = useSelector((wholeState) => {
    return wholeState.entities.carts;
  });
  const dispatch = useDispatch();

  /* display checkout message toggle */
  // const [checkoutMessage, toggleCheckoutMessage] = useState(false)

  /* moving to completing checkout */
  const proceedToCheckout = useHistory();

  /* componentDidMount */
  useEffect(() => {
    dispatch(fetchUserCartItems());
  },[]); //empty array only has useEffect run on mount and unmount

  /* pricing */
  const priceFormatter = (num) => {
    let numWord = String(num);
    let numWordSplit = numWord.split(".");
    let afterDec = "";
    if (!numWordSplit[1]) {
      afterDec = "00";
    } else if (numWordSplit[1].length === 1) {
      afterDec = numWordSplit[1];
      afterDec += "0";
      numWordSplit.pop();
    } else {
      afterDec = numWordSplit[1];
      numWordSplit.pop();
    }
    numWordSplit.push(afterDec);
    return numWordSplit.join(".");
  }
  const cartItems = Object.values(currentCart);
  let itemsTotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    itemsTotal += cartItems[i].price;
  }
  /* for presenting items total */
  let finItemsTotal = priceFormatter(Math.round(itemsTotal * 100) / 100)
  /* for accurate math measure */
  let mathDiscount = itemsTotal / 4;
  /* for presenting shop discount deduction */
  let shopDiscount = priceFormatter(Math.round((itemsTotal / 4) * 100) / 100);
  /* for presenting subtotal */
  let subTotal = priceFormatter(
    Math.round((itemsTotal - mathDiscount) * 100) / 100
  );

  const completeCheckout = () => {
    const cartItems = Object.keys(currentCart);
    for (let i = 0; i < cartItems.length; i++) {
      dispatch(deleteItemOnCart([cartItems[i]]));
    }
    proceedToCheckout.push("/checkout-complete")
    // toggleCheckoutMessage(true);
  }

  return (
    // for main divs, avoid giving position absolute
    <div className="checkout-main-contain">
      {
        cartItems.length === 0 ?
        <EmptyCart /> :
        <div className="checkout-flex-box-width-1400px">
          <div className="checkout-single-item">
            <div>
              <div className="checkout-title-and-main-redirect">
                <h1>{Object.keys(currentCart).length} items in your cart</h1>
                <button className="checkout-bold-heading">
                  <Link to="/">Keep Shopping</Link>
                </button>
              </div>
              <div className="checkout-two-column">
                <CartCheckoutItem wholeCart={currentCart} />
                <div className="checkout-payment-container">
                  <div className="checkout-payment-padding">
                    <h2 className="checkout-bold-heading">How you'll pay</h2>
                    <ul>
                      <li>Payment 1: Visa, Master, Amex, and Discover</li>
                      <li>Payment 2: Paypal</li>
                      <li>Klarna</li>
                    </ul>
                    <div className="price-line">
                      <span className="checkout-bold-heading">
                        Item(s) total
                      </span>
                      <span className="price-num">${finItemsTotal}</span>
                    </div>
                    <div className="price-line" id="checkout-discount">
                      <span className="checkout-bold-heading">
                        Shop discount (THANKU25)
                      </span>
                      <span className="price-num">-${shopDiscount}</span>
                    </div>
                    <div className="price-line">
                      <span>Subtotal</span>
                      <span>${subTotal}</span>
                    </div>
                    <div className="price-line" id="checkout-shipping">
                      <span>Shipping</span>
                      <span id="shipping-price">FREE</span>
                    </div>
                    <button onClick={completeCheckout} id="auth-submit-button">Proceed to checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default withRouter(CartCheckout);