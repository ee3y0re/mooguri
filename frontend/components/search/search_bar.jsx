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
        value={actualSearchInput}
        id="search-box" 
        onChange={updateSearchInput}
      />
    </form>

  )
}

export default withRouter(SearchBar);