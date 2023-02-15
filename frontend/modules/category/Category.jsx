import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listCategoryProducts } from "../../actions/category_actions";

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
      <ul>
        <li>
          <img
            src={placeholder}
            alt="placeholder image"
            style={{
              width: "100%",
              maxWidth: "300px",
              maxHeight: "300px",
              objectFit: "cover",
            }}
          />
          <h3>product title</h3>
          <p>product price</p>
          <p>product seller</p>
        </li>
      </ul>
    </div>
  );
};

export default Category;
