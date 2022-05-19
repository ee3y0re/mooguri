import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateProductInCart } from "../../actions/cart_actions";

const IndividualCart = ({
  cartProduct, 
  associatedCart,
  priceFormatter,
  handleDeleteCartItem,
  refreshCartList
}) => {

  const dispatch = useDispatch();

  const [updatedQty, setQty] = useState(cartProduct.qty);

  const numArrCreate = (max) => {
    let returnArr = [];
    for (let i = 1; i <= max; i++) {
      returnArr.push(i);
    }

    return returnArr;
  }

  const handleUpdateQty = (e) => {
    e.preventDefault();
    setQty(e.currentTarget.value);
    const newCart = {
      buyer_id : associatedCart.buyerId,
      cart_item_id : associatedCart.cartItemId,
      qty : updatedQty
    }
    updateProductInCart(newCart)
    refreshCartList()
  }

  return(
    <div>
      <h2 className="checkout-bold-heading">
        Seller Id: {cartProduct.sellerId}

      </h2>
      <div className="checkout-flex-box-product-info">
        <div className="cart-item-img-contain">
          <Link to={`/products/${cartProduct.id}`}>
            <img
              id="checkout-prod-thumbnail"
              src={cartProduct.photoUrl}
              alt="placeholder"
            />
          </Link>
        </div>
        <div className="checkout-flexbox-name-space-price">
          <div className="checkout-flex-box-prod-mid">
            <Link
              to={`/products/${cartProduct.id}`}
              className="cart-item-link"
            >
              <span>{cartProduct.productName}</span>
            </Link>
            <button
              onClick={() => handleDeleteCartItem(cartId)}
            >
              Remove
            </button>
          </div>
          <div className="checkout-dropdown-container">
            <select
              name="qty"
              value={updatedQty}
              className="checkout-dropdown"
              onChange={(e) => handleUpdateQty(e)}
            >
              {
                numArrCreate(cartProduct.availability).map((optionVal, i) => {
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
              // Math.round((product.price * cart.qty) * 100) / 100
              Math.round((cartProduct.price * updatedQty) * 100) / 100
            )}
          </span>
        </div>
      </div>
    </div>
  )
};

export default IndividualCart;