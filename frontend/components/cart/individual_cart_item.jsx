import React from "react";
import { Link } from "react-router-dom";

const IndividualCart = ({cartProduct, cartId, handleDeleteCartItem}) => {
  console.log("cart id", cartId)
  // console.log("cart", specificCart)
  return(
    // <div>To Do List
    //   <ol>
    //     <li>map products here</li>
    //     <li>figure out how to display a rendering total</li>
    //     <li>figure out how to create drop down of options that update back</li>
    //     <li>sync the dropdown with total and discount etc</li>
    //   </ol>
    // </div>



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
            <span className="DELETETHIS">
              {cartProduct.qty}
            </span>
            {/* <select
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
            </select> */}
          </div>
          <span className="checkout-bold-heading">
            ##some sort of price
            {/* ${priceFormatter(
              Math.round((product.price * cart.qty) * 100) / 100
            )} */}
          </span>
        </div>
      </div>
    </div>
  )
};

export default IndividualCart;