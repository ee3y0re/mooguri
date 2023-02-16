import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCategoryProducts } from "../../actions/category_actions";
import { fetchProducts } from "../../actions/product_actions";
import CategoryProduct from "./product/CategoryProduct";
import "./Category.scss"

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
    <div id="category" className="container">
      <h1 className="heading">{category.name}</h1>
      <h2 className="subheading">Find something you love</h2>
      <ul className="list">
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
