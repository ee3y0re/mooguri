import React, { useState } from "react";
import { withRouter, useLocation, useHistory } from "react-router";

const SearchBar = () => {
  // // set state for the input into the search bar
  // // initialize and declare variables for using location and history to render
  // //   results component
  const [wish, setWish] = useState("");
  const whereYouveBeen = useHistory();
  const youAreHere = useLocation();
  console.log(whereYouveBeen, youAreHere)

  //create variables to key into and change the search query
  //TEST WITHOUT THE FOLLOWING LINE
  // const spokenWish = new URLSearchParams(youAreHere.search);
  // spokenWish.set("theUltimateSmoothieButReallyAKeyForObj", wish);
  // let spokenWishSearchVal = spokenWish.toString();

  // //create a function to handle search submission and search result render
  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   whereYouveBeen.push(`/search?${spokenWishSearchVal}`);
  //   //reset search bar state back to default blank for new searches
  //   setWish("")
  // }

  // const updateSearchInput = (e) => {
  //   setWish(e.currentTarget.value);
  // }

  return (
    // return the search form
    <input type="text" readOnly="Search and Cart Under Construction" id="temp-search" className="temp"/>

  )
}

export default withRouter(SearchBar);