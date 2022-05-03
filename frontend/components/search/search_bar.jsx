import React, { useState } from "react";
import { withRouter, useLocation, useHistory } from "react-router-dom";

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
  }

  const updateSearchInput = (e) => {
    // // setting state as search input is inputted
    setNSaveSearchToState(e.currentTarget.value);
  }

  return (
    // return the search form
    <form onSubmit={handleSearchSubmit} id="search-comp-form">
      <input 
        type="text" 
        placeholder="Search for anything"
        passProp={actualSearchInput}
        id="temp-search" 
        className="temp"
        onChange={updateSearchInput}
      />
      <button type="submit" id="search-submit-button">
        <span id="search-submit-button-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            {/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
            <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" />
          </svg>
        </span>
      </button>
    </form>

  )
}

export default withRouter(SearchBar);