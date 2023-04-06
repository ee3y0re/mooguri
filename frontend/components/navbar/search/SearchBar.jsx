import React, { useState } from "react";
import { withRouter, useLocation, useHistory } from "react-router-dom";
import Button from "../../../modules/buttons/Button";
import "./SearchBar.scss";

const SearchBar = () => {
  // // set state for the input into the search bar
  // // initialize and declare variables for using location and history to render
  // //   results component
  const [actualSearchInput, setNSaveSearchToState] = useState("");
  const whereYouveBeen = useHistory();
  const youAreHere = useLocation();

  // // create variables to key into and change the search query
  // // TEST WITHOUT THE FOLLOWING LINE
  const varToProcessUrl = new URLSearchParams(youAreHere.search);
  varToProcessUrl.set("abbySpeak", actualSearchInput);
  let processedUrlInStringVal = varToProcessUrl.toString();
  // // actualSearchInput = after test search => abbySpeak=after+test+search
  // // actualSearchInput = after test search => http://localhost:3000/#/search?abbySpeak=after+test+search

  // //create a function to handle search submission and search result render
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    whereYouveBeen.push(`/search?${processedUrlInStringVal}`);
    // // reset search bar state back to default blank for new searches
    setNSaveSearchToState("");
  };

  const updateSearchInput = (e) => {
    // // setting state as search input is inputted
    setNSaveSearchToState(e.currentTarget.value);
  };

  return (
    // return the search form
    <form onSubmit={handleSearchSubmit} className="search-form">
      <input
        type="search"
        placeholder="Search for anything"
        value={actualSearchInput}
        className="search-input"
        onChange={updateSearchInput}
      />
      <Button type="submit" styleKey="clear" className="search-button">
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 64 64"
        >
          <path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"></path>
        </svg>
      </Button>
    </form>
  );
};

export default withRouter(SearchBar);
