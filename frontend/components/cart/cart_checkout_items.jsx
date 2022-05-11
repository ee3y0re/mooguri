import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemOnCart } from "../../actions/cart_actions"

const CartCheckoutItem = ({wholeCart}) => {
  const dispatch = useDispatch();

  const cartIds = Object.keys(wholeCart);
  const cartItems = Object.values(wholeCart);

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
                  <span className="checkout-bold-heading">${priceFormatter(item.price)}</span>
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