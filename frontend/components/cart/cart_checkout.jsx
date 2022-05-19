import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";
import { fetchUserCartProducts, deleteProductInCart } from "../../actions/cart_actions";
// import CartCheckoutItem from "./cart_checkout_items";
import IndividualCart from "./individual_cart_item";
import EmptyCart from "./empty_cart";
import Payment from "./payment";

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

  /* state */
  const [itemsTotal, setItemsTotal] = useState(0);

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

  // const refreshCartList = () => {
  //   setOffUpdateFlag(true);
  // }
  
  /* number of items in cart */
  // let cartAmt = 0;
  // for (let i = 0; i < cartIds.length; i++) {
  //   let keyNum = cartIds[i];
  //   cartAmt += currentCart[keyNum].qty
  // }
  let itemsTotalCopy = 0;
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
                        let associatedCart = currentCart[cartId]
                        itemsTotalCopy += (cartProduct.price * associatedCart.qty)
                        return (
                          <li key={cartId}>
                            <IndividualCart
                              cartProduct={cartProduct}
                              // cartId={cartId}
                              associatedCart={associatedCart}
                              priceFormatter={priceFormatter}
                              // refreshCartList={refreshCartList}
                              handleDeleteCartItem={handleDeleteCartItem}
                            />
                          </li>
                        )
                      })
                    }
                  </ul>
                  <Payment 
                    priceFormatter={priceFormatter}
                    currentCart={currentCart} 
                    itemsTotalProp={itemsTotalCopy}
                  />
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default withRouter(CartCheckout);