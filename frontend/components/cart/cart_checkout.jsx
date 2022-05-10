import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCartItems } from "../../actions/cart_actions"

const CartCheckout = () => {

  /* container */
  const currentCart = useSelector((wholeState) => {
    return wholeState.entities.carts;
  });
  const dispatch = useDispatch();

  /* componentDidMount */
  useEffect(() => {
    dispatch(fetchUserCartItems());
  },[]); //empty array only has useEffect run on mount and unmount

  const cartIds = Object.keys(currentCart);
  const cartItems = Object.values(currentCart);

  return (
    <div className="checkout-main-contain">
      <div className="checkout-flex-box-width-1400px">
        <div className="checkout-single-item">
          <header className="checkout-title-and-main-redirect">
            <h1>99 items in your cart</h1>
            <button className="checkout-bold-heading">Keep Shopping</button>
          </header>
          <div className="checkout-two-column">

            {/* {
              cartItems?.map((item, idx) => {
                return(
                  <li key={cartIds[idx]}>
                    {item.productName}
                  </li>
                )
              })
            } */}

            <article className="checkout-products-container">
              <h2 className="checkout-bold-heading">Seller's name</h2>
              <div className="checkout-flex-box-product-info">
                <img id="checkout-prod-temp" src={window.placeholder} alt="placeholder" />
                <div className="checkout-flexbox-name-space-price">
                  <div className="checkout-flex-box-prod-mid">
                    <span>
                      This is for the product name but I am trying to have the 
                      title fill up this space because I don't think I will add a 
                      quantity property :p
                    </span>
                    <button>Remove</button>
                  </div>
                  <span className="checkout-bold-heading">$99.99</span>
                </div>
              </div>
            </article>



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
      </div>
    </div>
  )
}

export default CartCheckout