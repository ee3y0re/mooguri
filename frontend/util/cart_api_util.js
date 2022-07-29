export const fetchUserCartProducts = () => { //@cart_items
  return $.ajax({
    url: "/api/carts",
    method: "GET"
  });
};

export const addProductToCart = (cart) => { //@cart
  return $.ajax({
    url: "/api/carts",
    method: "POST",
    data: { cart }
  });
};

export const updateProductInCart = (cart) => {
  return $.ajax({
    url: `/api/carts/${cart.id}`,
    method: "PATCH",
    data: { cart }
  })
}

export const deleteProductInCart = (cartItemId) => { //@cart but id in route
  return $.ajax({
    url: `/api/carts/${cartItemId}`,
    method: "DELETE"
  });
};

// to action thunk creators! :D