import React from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss"

const ProductItem = ({ id, imgSrc, name, price, seller }) => {
  return (
    <li className="product-item">
      <Link to={`/products/${id}`} className="link">
        <img className="img" src={imgSrc} alt={`${name} image`} />
        <p className="name">{name}</p>
        <p className="price">{price}</p>
        <p className="seller">Seller #{seller}</p>
      </Link>
    </li>
  );
};

export default ProductItem;
