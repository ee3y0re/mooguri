import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCategoryProducts } from "../../actions/category_actions";
import CategoryProduct from "./CategoryProduct";

const Category = (props) => {
  useEffect(() => {
    dispatch(listCategoryProducts(props.match.params.categoryId));
  }, []);

  const categoryResponse = useSelector((state) => state.entities.categories);
  const dispatch = useDispatch();
  const category = {
    id: categoryResponse && categoryResponse.id,
    name: categoryResponse && categoryResponse.name,
  };
  const products = categoryResponse && categoryResponse.products;

  return (
    <div>
      <h1>{category.name}</h1>
      <h2>Find something you love</h2>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map((product) => {
            return (
              <CategoryProduct
                id={product.id}
                name={product.product_name}
                price={product.price}
                seller={product.seller_id}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Category;
