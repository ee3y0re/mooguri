// main library imports
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// action imports
import { listAllCategories } from "../../actions/category_actions";

const CategoriesList = () => {
  const dispatch = useDispatch();
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    dispatch(listAllCategories()).then((result) => {
      setAllCategories(result.categories);
    });
  }, []);
  return (
    <div id="top-banner">
      <h1 id="greeting">Check out these cow-tegories</h1>
      <div className="bubbles-container">
        <ul className="bubbles-list">
          {allCategories?.map((category) => (
            <li key={category.id}>
              <Link to={`/categories/${category.id}`}>
                <img
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
    </div>
  );
};

export default CategoriesList;
