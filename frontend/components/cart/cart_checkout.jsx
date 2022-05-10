import React from "react";

const CartCheckout = () => {
  return (
    <div className="checkout-main-contain">
      <div className="checkout-flex-box-width-1400px">
        <div className="checkout-single-item">
          <header className="checkout-title-and-main-redirect">
            <h1>99 items in your cart</h1>
            <button>Keep Shopping</button>
          </header>
          <div className="checkout-two-column">
            <article className="checkout-products-container">
              <h2>Seller's name</h2>
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
                  <span>$99.99</span>
                </div>
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
    </div>
  )
}

export default CartCheckout