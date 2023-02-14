export const fetchAllCategories = () => {
  return $.ajax({
    url: "/api/categories",
    method: "GET"
  });
};

export const fetchProductsForCategories = (categoryId) => {
  return $.ajax({
    url: `/api/categories/${categoryId}`,
    method: "GET"
  });
}

// place these on window at mooguri_entry.jsx to test like so
// window.fetchAllCategories = fetchAllCategories;
// window.fetchProductsForCategories = fetchProductsForCategories
// then run the functions in chrome dev tool console