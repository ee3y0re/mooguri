export const fetchProducts = () => {
  return $.ajax({
    url: "/api/products",
    method: "GET"
  });
};

export const fetchProduct = (product) => {
  return $.ajax({
    url: `/api/product/${product.id}`,
    method: "GET"
  });
};