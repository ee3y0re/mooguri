import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import { fetchUserCartItems, deleteItemOnCart } from "../../actions/cart_actions";
// import CartCheckoutItem from "./cart_checkout_items";
import EmptyCart from "./empty_cart";

const CartCheckout = () => {

  /* container and variables*/
  // // mstp
  const cartIds = useSelector((wholeState) => {
    return Object.keys(wholeState.entities.carts);
  });
  // console.log("cartIds", cartIds);
  //['1', '2', '3', '4', '5', '6', '7', '8']
  const cartProducts = useSelector((state) => {
    return Object.values(state.entities.carts);
  });
  // console.log("cartProducts", cartProducts);
  /*
  [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  0: {
        id: 2, 
        productName: 'Cheese Flight from KeystoneFarmsCheese', 
        description: 'Any four 8 oz. blocks of cheese from our Best Sell…d box. 
        Sorry, we do not ship to Hawaii or Alaska.', price: 54.5, category: 'cheese', 
        …
      }
  1: {
        id: 2, 
        productName: 'Cheese Flight from KeystoneFarmsCheese', 
        description: 'Any four 8 oz. blocks of cheese from our Best Sell…d box. 
        Sorry, we do not ship to Hawaii or Alaska.', price: 54.5, category: 'cheese', 
        …
      }
  etc. etc.
  "product_name"
  "description"
  "price"
  "category"
  "seller_id"
  "availability"

  */
  // // mdtp
  const dispatch = useDispatch();
  // // moving to order confirmation component
  const proceedToCheckout = useHistory();

  /* state */
  const [collectPrices, setCollectPrices] = useState([]);
  const [grandQty, setGrandQty] = useState(0);
  const [discTotal, setDiscTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  /* componentDidMount and componentwillunmount*/
  useEffect(() => {
    dispatch(fetchUserCartItems());
  },[]); //empty array only has useEffect run on mount and unmount

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

  // const cartItems = Object.values(currentCart);
  // let itemsTotal = 0;
  // for (let i = 0; i < cartItems.length; i++) {
  //   itemsTotal += cartItems[i].price;
  // }
  // /* for presenting items total */
  // let finItemsTotal = priceFormatter(Math.round(itemsTotal * 100) / 100)
  // /* for accurate math measure */
  // let mathDiscount = itemsTotal / 4;
  // /* for presenting shop discount deduction */
  // let shopDiscount = priceFormatter(Math.round((itemsTotal / 4) * 100) / 100);
  // /* for presenting subtotal */
  // let subTotal = priceFormatter(
  //   Math.round((itemsTotal - mathDiscount) * 100) / 100
  // );

  // /* completing checkout */
  // const completeCheckout = () => {
  //   const cartItems = Object.keys(currentCart);
  //   for (let i = 0; i < cartItems.length; i++) {
  //     dispatch(deleteItemOnCart([cartItems[i]]));
  //   }
  //   proceedToCheckout.push("/checkout-complete")
  //   // toggleCheckoutMessage(true);
  // }

  return (
    // for main divs, avoid giving position absolute
    <div className="checkout-main-contain">


      {
        cartIds.length === 0 ?
          <EmptyCart /> :
          <div className="checkout-flex-box-width-1400px">
            <div className="checkout-single-item">
              <div>
                <div className="checkout-title-and-main-redirect">
                  <h1>## of items in your cart</h1>
                  <button className="checkout-bold-heading">
                    <Link to="/">Keep Shopping</Link>
                  </button>
                </div>
                {/* originally from cart item component */}
                <div className="checkout-two-column">

                  {/* map the products first */}
                  <ul className="checkout-products-container">
                    {/* {
                      Object.keys(cartInventory)?.map((itemId, idx) => {
                        let item = cartInventory[itemId];
                        return (
                          <li key={item.name + idx} > */}
                            <h2 className="checkout-bold-heading">
                              Seller Id: ##
                            </h2>
                            <div className="checkout-flex-box-product-info">
                              <div className="cart-item-img-contain">
                                {/* <Link to={`/products/${item.id}`}> */}
                                  <img
                                    id="checkout-prod-thumbnail"
                                    // src={item.photoUrl}
                                    alt="placeholder"
                                  />
                                {/* </Link> */}
                              </div>
                              <div className="checkout-flexbox-name-space-price">
                                <div className="checkout-flex-box-prod-mid">
                                  {/* <Link
                                    to={`/products/${itemId}`}
                                    className="cart-item-link"
                                  > */}
                                    <span>Product Name##</span>
                                  {/* </Link> */}
                                  <button
                                    // onClick={() => handleDeleteCartItem(item)}
                                  >
                                    Remove
                                  </button>
                                </div>
                                <div className="checkout-dropdown-container">
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
                                  {/* ${priceFormatter(
                                    Math.round((item.price * item.qty) * 100) / 100
                                  )} */}
                                </span>
                              </div>
                            </div>
                          {/* </li> */}
                        {/* )
                      })
                    } */}
                  </ul>

                  {/* set up payment box */}
                  {/* <div className="checkout-payment-container">
                    <div className="checkout-payment-padding">
                      <h2 className="checkout-bold-heading">How you'll pay</h2>
                      <ul>
                        <li>Payment 1: Visa, Master, Amex, and Discover</li>
                        <li>Payment 2: Paypal</li>
                        <li>Klarna</li>
                      </ul>
                      <div className="price-line">
                        <span className="checkout-bold-heading">
                          Item(s) total
                        </span>
                        <span className="price-num">${finItemsTotal}</span>
                      </div>
                      <div className="price-line" id="checkout-discount">
                        <span className="checkout-bold-heading">
                          Shop discount (THANKU25)
                        </span>
                        <span className="price-num">-${shopDiscount}</span>
                      </div>
                      <div className="price-line">
                        <span>Subtotal</span>
                        <span>${subTotal}</span>
                      </div>
                      <div className="price-line" id="checkout-shipping">
                        <span>Shipping</span>
                        <span id="shipping-price">FREE</span>
                      </div>
                      <button onClick={completeCheckout} id="auth-submit-button">Proceed to checkout</button>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
      }


    </div>
  )
}

export default withRouter(CartCheckout);