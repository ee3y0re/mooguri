import React from "react";

const CartCheckoutItem = ({wholeCart}) => {
  const cartIds = Object.keys(wholeCart);
  const cartItems = Object.values(wholeCart);
  console.log("cartIds", cartIds);
  console.log("cartItems", cartItems);

  return (
    <ul>
      {
        cartItems?.map((item, idx) => {
          return(
            <li key={cartIds[idx]} >
              <h2 className="checkout-bold-heading">
                Seller Id: {item.sellerId}
              </h2>
              <div className="checkout-flex-box-product-info">
                <img 
                  id="checkout-prod-temp" 
                  src={item.photoUrl} 
                  alt="placeholder" 
                />
                <div className="checkout-flexbox-name-space-price">
                  <div className="checkout-flex-box-prod-mid">
                    <span>{item.productName}</span>
                    <button>Remove</button>
                  </div>
                  <span className="checkout-bold-heading">{item.price}</span>
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  );
};

export default CartCheckoutItem;