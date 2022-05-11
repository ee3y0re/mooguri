import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemOnCart } from "../../actions/cart_actions"

const CartCheckoutItem = ({wholeCart }) => {
  const dispatch = useDispatch();

  const cartIds = Object.keys(wholeCart);
  const cartItems = Object.values(wholeCart);

  return (
    <ul className="checkout-products-container">
      {
        cartItems?.map((item, idx) => {
          return(
            <li key={cartIds[idx]} >
              <h2 className="checkout-bold-heading">
                Seller Id: {item.sellerId}
              </h2>
              <div className="checkout-flex-box-product-info">
                <div className="cart-item-img-contain">
                  <img 
                    id="checkout-prod-temp" 
                    src={item.photoUrl} 
                    alt="placeholder" 
                  />
                </div>
                <div className="checkout-flexbox-name-space-price">
                  <div className="checkout-flex-box-prod-mid">
                    <span>{item.productName}</span>
                    <button 
                      onClick={() => dispatch(deleteItemOnCart(cartIds[idx]))}
                    >
                      Remove
                    </button>
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