import React from "react";

const CartCheckoutItem = ({wholeCart}) => {
  const cartIds = Object.keys(wholeCart);
  const cartItems = Object.values(wholeCart);
  console.log("cartIds", cartIds);
  console.log("cartItems", cartItems);

  return (
    <div>From cart checkout item</div>
  );
};

export default CartCheckoutItem;