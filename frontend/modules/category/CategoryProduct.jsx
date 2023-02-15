import React from "react";
import { Link } from "react-router-dom";

const CategoryProduct = ({ id, name, price, seller }) => {
  return (
    <li>
      <Link to={`/products/${id}`}>
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
        <h3>{name}</h3>
        <p>{price}</p>
        <p>{seller}</p>
      </Link>
    </li>
  );
};

export default CategoryProduct;
