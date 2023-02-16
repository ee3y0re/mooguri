import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCategoryProducts } from "../../actions/category_actions";
import { fetchProducts } from "../../actions/product_actions";
import CategoryProduct from "./CategoryProduct";

const Category = (props) => {
  useEffect(() => {
    dispatch(listCategoryProducts(props.match.params.categoryId));
    dispatch(fetchProducts());
  }, []);

  const category = useSelector((state) => state.entities.categories);
  const allProducts = useSelector((state) =>
    Object.values(state.entities.products)
  );
  const dispatch = useDispatch();

  if (!category || !allProducts) return null
  const products = allProducts && allProducts?.filter((product) =>
    category && category.productIds?.includes(product.id)
  );

  return (
    <div>
      <h1>{category.name}</h1>
      <h2>Find something you love</h2>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map((product) => {
            return (
              <CategoryProduct
                key={product.id}
                id={product.id}
                name={product.productName}
                price={product.price}
                seller={product.sellerId}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Category;
