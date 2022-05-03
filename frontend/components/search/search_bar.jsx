import React, { useState } from "react";
import { withRouter, useLocation, useHistory } from "react-router-dom";

const SearchBar = () => {
  // // set state for the input into the search bar
  // // initialize and declare variables for using location and history to render
  // //   results component
  const [actualSearchInput, setNSaveSearchToState] = useState("");
  const whereYouveBeen = useHistory();
    // // 
    console.log("whereYouveBeen", whereYouveBeen)
  const youAreHere = useLocation();
    // // 
    console.log("youAreHere", youAreHere)

  // // create variables to key into and change the search query
  // // TEST WITHOUT THE FOLLOWING LINE
  const varToProcessUrl = new URLSearchParams(youAreHere.search); 
    // // result of useLocation();
    // // 
    console.log("varToProcessUrl", varToProcessUrl) 
  varToProcessUrl.set("abbySpeak", actualSearchInput); 
    // // search?abbySpeak=actualSearchInput
    // // 
    console.log("varToProcessUrl after set", varToProcessUrl) 
  let processedUrlInStringVal = varToProcessUrl.toString();
    // // 
    console.log("processedUrlInStringVal", processedUrlInStringVal)

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
    <input type="text" readOnly="Search and Cart Under Construction" id="temp-search" className="temp"/>

  )
}

export default withRouter(SearchBar);