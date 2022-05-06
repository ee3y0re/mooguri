import React from "react";

const CartCheckout = () => {
  return (
    <div className="checkout-main-contain">
      <div className="flex-box-width-1400px">
        <header className="checkout-title-and-main-redirect">
          <h1># item(s) in your cart</h1>
          <button>Keep Shopping</button>
        </header>
        <div className="checkout-two-column">
          <article className="checkout-products-container">
            <h2>Seller's name</h2>
            <div className="checkout-flex-box-product-info">
              <img id="checkout-prod-temp" src={window.placeholder} alt="placeholder" />
              <div className="checkout-flex-box-prod-mid">
                <span>Product Name</span>
                <button>Remove</button>
              </div>
              <span>Product Price</span>
            </div>
          </article>
          <aside className="checkout-payment-container">
            <h1>How you'll pay</h1>
            <ul>
              <li>Payment 1: Visa, Master, Amex, and Discover</li>
              <li>Payment 2: Paypal</li>
              <li>Klarna</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default CartCheckout