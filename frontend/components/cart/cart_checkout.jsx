import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import { fetchUserCartProducts, deleteProductInCart } from "../../actions/cart_actions";
// import CartCheckoutItem from "./cart_checkout_items";
import IndividualCart from "./individual_cart_item";
import EmptyCart from "./empty_cart";

const CartCheckout = () => {

  /* container and variables*/
  // // mstp
  const activeSession = useSelector(state => {
    return state.session.id;
  })
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


  const currentCart = useSelector((state) => {
    return state.entities.carts;
  })

  /* mdtp */
  const dispatch = useDispatch();
  /* moving to order confirmation component */
  const proceedToCheckout = useHistory();

  /* state */
  const [updateFlag, setOffUpdateFlag] = useState(false)
  // const [discTotal, setDiscTotal] = useState(0);
  // const [subTotal, setSubTotal] = useState(0);
  // const [grandTotal, setGrandTotal] = useState(0);

  /* componentDidMount and componentwillunmount*/
  useEffect(() => {
    dispatch(fetchUserCartProducts());
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

  const handleDeleteCartItem = (id) => {
    dispatch(deleteProductInCart(id));
  }

  const refreshCartList = () => {
    setOffUpdateFlag(true);
  }
  
  /* number of items in cart */
  // let cartAmt = 0;
  // for (let i = 0; i < cartIds.length; i++) {
  //   let keyNum = cartIds[i];
  //   cartAmt += currentCart[keyNum].qty
  // }
  
  /* total calculations */

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

  /* completing checkout */
  // const completeCheckout = () => {
  //   const cartItems = Object.keys(currentCart);
  //   for (let i = 0; i < cartItems.length; i++) {
  //     dispatch(deleteProductInCart([cartItems[i]]));
  //   }
  //   proceedToCheckout.push("/checkout-complete")
  //   // toggleCheckoutMessage(true);
  // }

  return (
    // for main divs, avoid giving position absolute
    <div className="checkout-main-contain">
      {
        cartIds.length === 0 || !activeSession ?
          <EmptyCart /> :
          <div className="checkout-flex-box-width-1400px">
            <div className="checkout-single-item">
              <div>
                <div className="checkout-title-and-main-redirect">
                  <h1>
                    {
                      cartIds.length === 1 ?
                      // cartAmt === 1 ?
                      "1 item in your cart" :
                      `${cartIds.length} items in your cart`
                      // `${cartAmt} items in your cart`
                    }
                  </h1>
                  <button className="checkout-bold-heading">
                    <Link to="/">Keep Shopping</Link>
                  </button>
                </div>
                <div className="checkout-two-column">
                  {/* cart item of single cart item instead mapping cart items */}
                  {/* map cart item component here */}
                  <ul className="checkout-products-container">
                    {
                      cartIds.map((cartId, idx) => {
                        let cartProduct = cartProducts[idx];
                        return (
                          <li key={cartId}>
                            <IndividualCart
                              cartProduct={cartProduct}
                              // cartId={cartId}
                              associatedCart={currentCart[cartId]}
                              priceFormatter={priceFormatter}
                              refreshCartList={refreshCartList}
                              handleDeleteCartItem={handleDeleteCartItem}
                            />
                          </li>
                        )
                      })
                    }
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