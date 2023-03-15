// main library imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// action imports
import { listAllCategories } from "../../actions/category_actions";
// stylesheet imports
import "./CategoryList.scss";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    dispatch(listAllCategories()).then((result) => {
      setAllCategories(result.categories);
    });
  }, []);
  return (
    <div className="category-list">
      <div className="category-banner"/>
      <h2 className="category-heading">Check out these cow-tegories</h2>
      <ul className="category-wrap">
        {allCategories?.map((category) => (
          <li className="category-bubble" key={category.id}>
            <Link className="category-link" to={`/categories/${category.id}`}>
              <img
                className="category-img"
                src="https://mooguri-dev.s3.us-west-1.amazonaws.com/milk6_il_1588xN.3494226927_nq3r.jpg"
                alt="milk-bubble"
                style={{ maxWidth: "300px" }}
              />
            </Link>
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
