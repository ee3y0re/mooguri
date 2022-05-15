import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart, deleteItemOnCart } from "../../actions/cart_actions";

const CartCheckoutItem = ({wholeCart}) => {
  const currentUserId = useSelector((state) => {
    return state.session.id
  })
  const dispatch = useDispatch();

  const cartIds = Object.keys(wholeCart);
  const cartItems = Object.values(wholeCart);

  let cartInventory = {};
  for (let i = 0; i < cartItems.length; i++) {
    let productObj = cartItems[i];
    if (cartInventory[productObj.id] === undefined) {
      cartInventory[productObj.id] = {
        "sellerId": productObj.sellerId,
        "name": productObj.productName,
        "photoUrl": productObj.photoUrl,
        "price": productObj.price,
        "availability": productObj.availability,
        "cartId": [cartIds[i]],
        "qty": 1
      }
    } else {
      cartInventory[productObj.id]["qty"] += 1;
      cartInventory[productObj.id]["cartId"].push(cartIds[i]);
    }
  }
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

  const [checkoutCart, updateQty] = useState(cartInventory)

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

  const handleDeleteCartItem = (item) => {
    const carts = item.cartId;
    for (let i = 0; i < carts.length; i++) {
      dispatch(deleteItemOnCart(carts[i]));
    }
  }

  const numArrCreate = (num) => {
    let numArr = [];
    for (let i = 1; i <= num; i++) {
      numArr.push(i);
    }
    return numArr;
  }

  const handleUpdateQty = (e, itemId) => {
    e.preventDefault();
    let newCheckoutCart = Object.assign({}, checkoutCart);
    let focusProduct = newCheckoutCart[itemId]
    let oldAmt = focusProduct.qty;
    let newAmt = Number(e.target.value);
    newCheckoutCart[itemId].qty = newAmt;
    if (newAmt < oldAmt) {
      for (let i = 0; i < (oldAmt - newAmt); i++) {
        dispatch(deleteItemOnCart(focusProduct.cartId.pop()))
      }
    } else if (newAmt > oldAmt) {
      let addObj = {
        cart_item_id : itemId,
        buyer_id : currentUserId
      }
      for (let i = 0; i < (newAmt - oldAmt); i++) {
        dispatch(addItemToCart(addObj));
      }
    }
    updateQty(newCheckoutCart);
  }
  

  return (
    <ul className="checkout-products-container">
      {
        Object.keys(cartInventory)?.map((itemId, idx) => {
          let item = cartInventory[itemId];
          return(
            <li key={item.name + idx} >
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
                      onClick={() => handleDeleteCartItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="checkout-dropdown-container">
                    <select 
                      name="qty" 
                      value={checkoutCart[itemId].qty}
                      className="checkout-dropdown" 
                      onChange={(e) => handleUpdateQty(e, itemId)}
                    >
                      {
                        numArrCreate(item.availability).map((optionVal, i) => {
                          return (
                            <option 
                              value={optionVal}
                              key={i}
                            >
                              {optionVal}
                            </option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <span className="checkout-bold-heading">
                    ${priceFormatter(
                      Math.round((item.price * item.qty) * 100) / 100
                    )}
                  </span>
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