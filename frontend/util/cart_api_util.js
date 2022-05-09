export const fetchUserCartItems = () => { //@cart_items
  return $.ajax({
    url: "/api/carts",
    method: "GET"
  });
};

export const addItemToCart = (cart) => { //@cart
  return $.ajax({
    url: "/api/carts",
    method: "POST",
    data: { cart }
  });
};

export const deleteItemOnCart = (cartItemId) => { //@cart but id in route
  return $.ajax({
    url: `/api/carts/${cartItemId}`,
    method: "DELETE"
  });
};