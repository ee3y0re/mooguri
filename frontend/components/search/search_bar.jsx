import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";

const SearchBar = () => {
  //set state for the input into the search bar
  //initialize and declare variables for using location and history to render
  //  results component
  const [wish, setWish] = useState("");
  console.log(whereYouveBeen, youAreHere)
  // debugger;
  const whereYouveBeen = useNavigate();
  // debugger;
  const youAreHere = useLocation();

  //create variables to key into and change the search query
  //TEST WITHOUT THE FOLLOWING LINE
  const spokenWish = new URLSearchParams(youAreHere.search);
  spokenWish.set("theUltimateSmoothieButReallyAKeyForObj", wish);
  let spokenWishSearchVal = spokenWish.toString();

  //create a function to handle search submission and search result render
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    whereYouveBeen.push(`/search?${spokenWishSearchVal}`);
    //reset search bar state back to default blank for new searches
    setWish("")
  }

  const updateSearchInput = (e) => {
    setWish(e.currentTarget.value);
  }

  return (
    // return the search form
    <div>Starting search bar component</div>
  )
}

export default SearchBar;