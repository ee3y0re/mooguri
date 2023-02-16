import React from "react";
import { Link } from "react-router-dom";
import "./CategoryProduct.scss";

const CategoryProduct = ({ id, name, price, seller }) => {
  return (
    <li className="cat product">
      <Link to={`/products/${id}`} className="link">
        <img className="img" src={placeholder} alt="placeholder image" />
        <h3 className="name">{name}</h3>
        <p className="price">{price}</p>
        <p className="seller">{seller}</p>
      </Link>
    </li>
  );
};

export default CategoryProduct;
