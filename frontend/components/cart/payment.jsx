import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteProductInCart } from "../../actions/cart_actions";

const Payment = ({ currentCart, itemsTotalProp, priceFormatter }) => {
  const dispatch = useDispatch();
  /* moving to order confirmation component */
  const proceedToCheckout = useHistory();
  /* for presenting items total */
  let itemsTotal = priceFormatter(Math.round(itemsTotalProp * 100) / 100)
  /* for accurate math measure */
  let mathDiscount = itemsTotal / 4;
  /* for presenting shop discount deduction */
  let shopDiscount = priceFormatter(Math.round((itemsTotal / 4) * 100) / 100);
  /* for presenting subtotal */
  let subTotal = priceFormatter(
    Math.round((itemsTotal - mathDiscount) * 100) / 100
  );

  /* completing checkout */
  const completeCheckout = () => {
    const cartItems = Object.keys(currentCart);
    for (let i = 0; i < cartItems.length; i++) {
      dispatch(deleteProductInCart([cartItems[i]]));
    }
    proceedToCheckout.push("/checkout-complete")
    // toggleCheckoutMessage(true);
  }

  return(
    // <div>From payment</div>
    <div className="checkout-payment-container">
      <div className="checkout-payment-padding">
        <h2 className="checkout-bold-heading">How you'll pay</h2>
        <ul>
          <li>Visa, Master, Amex, and Discover</li>
          <li>Paypal</li>
          <li>Klarna</li>
        </ul>
        <div className="price-line">
          <span className="checkout-bold-heading">
            Item(s) total
          </span>
          <span className="price-num">${itemsTotal}</span>
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
  )
}

export default Payment;