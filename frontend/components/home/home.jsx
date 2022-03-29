import React from "react";
import ProductSnapshotContainer from "../product/products_snapshot_container"

const Home = () => {
  /* 
  nav bar component
  category bar component
  main page
    bubbles of categories
    product snapshot
  about and help
  footer component
    other directory links
  */
  return (
    <div id="home-container">
      {/* after creating a general nav component */}
      {/* after creating a category nav component */}
      <main id="frontpage">
        {/* after creating a bubbles component */}
        <div id="top-banner">
          <h1 id="greeting">Cope with March Madness</h1>
          <div id="bubble-color-ribbon"></div>
          <div className="bubbles-container">
            <ul>
              <li>
                <a href="">
                  <p></p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* product snapshot */}
        <ProductSnapshotContainer />
      </main>
      <div id="about">
        <p id="overview"></p>
        {/* help link */}
      </div>
      <footer id="footer-dir"></footer>
    </div>
  )
}

export default Home;