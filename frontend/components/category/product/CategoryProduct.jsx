import React from "react";
import { Link } from "react-router-dom";
import "./CategoryProduct.scss"

const CategoryProduct = ({ id, imgSrc, name, price, seller }) => {
  return (
    <li className="category-product">
      <Link to={`/products/${id}`} className="link">
        <img className="img" src={imgSrc} alt={`${name} image`} />
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <p className="seller">Seller #{seller}</p>
      </Link>
    </li>
  );
};

export default CategoryProduct;
