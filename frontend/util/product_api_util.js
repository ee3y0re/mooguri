export const fetchProducts = () => {
  return $.ajax({
    url: "/api/products",
    method: "GET"
  });
};

export const fetchProduct = (productId) => {
  return $.ajax({
    url: `/api/products/${productId}`,
    method: "GET"
  });
};