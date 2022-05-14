import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItemOnCart } from "../../actions/cart_actions";

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

  let cartInventory = {};
  for (let i = 0; i < cartItems.length; i++) {
    /* cartItems is an array of product objects */
    /*
      {
        productId: {
          sellerId,
          name,
          photoUrl,
          price,
          qty
        }
      }
    */
    let productObj = cartItems[i];
    if (cartInventory[productObj.id] === undefined) {
      cartInventory[productObj.id] = {
        "sellerId" : productObj.sellerId,
        "name" : productObj.productName,
        "photoUrl" : productObj.photoUrl,
        "price" : productObj.price,
        "qty" : 1
      }
    } else {
      cartInventory[productObj.id]["qty"] += 1;
    }
  }

  console.log(Object.keys(cartInventory))

  return (
    <ul className="checkout-products-container">
      {
        Object.keys(cartInventory)?.map((itemId, idx) => {
          let item = cartInventory[itemId];
          return(
            <li key={idx} >
              <h2 className="checkout-bold-heading">
                Seller Id: {item.sellerId}
              </h2>
              <div className="checkout-flex-box-product-info">
                <div className="cart-item-img-contain">
                  <Link to={`/products/${item.id}`}>
                    <img
                      id="checkout-prod-thumbnail"
                      src={item.photoUrl}
                      alt="placeholder"
                    />
                  </Link>
                </div>
                <div className="checkout-flexbox-name-space-price">
                  <div className="checkout-flex-box-prod-mid">
                    <Link 
                      to={`/products/${itemId}`} 
                      className="cart-item-link"
                    >
                      <span>{item.name}</span>
                    </Link>
                    <button 
                      onClick={() => dispatch(deleteItemOnCart(cartIds[idx]))}
                    >
                      Remove
                    </button>
                  </div>
                  <span>&times;{item.qty}</span>
                  <span className="checkout-bold-heading">${priceFormatter(item.price * item.qty)}</span>
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