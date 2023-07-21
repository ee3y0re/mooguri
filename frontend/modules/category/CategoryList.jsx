import React from "react";
import { Link } from "react-router-dom";
import "./CategoryList.scss";

const CategoriesList = ({ displayBanner, className }) => {
  return (
    <div className={`category-list ${className || ""}`}>
      {displayBanner && <div className="category-banner" />}
      {displayBanner && (
        <h2 className="category-heading">Check out these cow-tegories</h2>
      )}
      <ul className="category-wrap">
        <li className="category-bubble" key="1">
          <Link className="category-link" to="/categories/1">
            <img
              className="category-img"
              src="https://mooguri-dev.s3.us-west-1.amazonaws.com/cheese_1_il_794xN.3383346041_1a5j.jpeg"
              alt="category image"
            />
          </Link>
          <p className="category-name">Cheese</p>
        </li>
        <li className="category-bubble" key="2">
          <Link className="category-link" to="/categories/2">
            <img
              className="category-img"
              src="https://mooguri-dev.s3.us-west-1.amazonaws.com/milk4_il_1588xN.3766224132_ncox.jpg"
              alt="category image"
            />
          </Link>
          <p className="category-name">Milk</p>
        </li>
        <li className="category-bubble" key="3">
          <Link className="category-link" to="/categories/3">
            <img
              className="category-img"
              src="https://mooguri-dev.s3.us-west-1.amazonaws.com/lactose_free_il_794xN.3446522359_91sl.jpg"
              alt="category image"
            />
          </Link>
          <p className="category-name">Lactose-free</p>
        </li>
        <li className="category-bubble" key="4">
          <Link className="category-link" to="/categories/4">
            <img
              className="category-img"
              src="https://mooguri-dev.s3.us-west-1.amazonaws.com/pun_3_il_794xN.3121609316_7f70.jpg"
              alt="category image"
            />
          </Link>
          <p className="category-name">Puns</p>
        </li>
        <li className="category-bubble" key="5">
          <Link className="category-link" to="/categories/5">
            <img
              className="category-img"
              src="https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt_il_794xN.1966709327_46j2.jpg"
              alt="category image"
            />
          </Link>
          <p className="category-name">Yogurt</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesList;
