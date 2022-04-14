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

      <div id="ribbon"></div>
      <main id="frontpage">
        {/* after creating a bubbles component */}
        <div id="top-banner">
          <h1 id="greeting">Check out these cow-tegories</h1>
          {/* add categories table first */}
          <div className="bubbles-container">
            <ul className="bubbles-list">
              <li className="bubbles-list-items">
                {/* <a href=""> */}
                  <div className="bubble-img-container"><img src="" alt="" /></div>
                {/* </a> */}
                <p className="bubble-title">Milk</p>
              </li>
              <li className="bubbles-list-items">
                {/* <a href=""> */}
                <div className="bubble-img-container"><img src="" alt="" /></div>
                {/* </a> */}
                <p className="bubble-title">Cheese</p>
              </li>
              <li className="bubbles-list-items">
                {/* <a href=""> */}
                <div className="bubble-img-container"><img src="" alt="" /></div>
                {/* </a> */}
                <p className="bubble-title">Yogurt</p>
              </li>
              <li className="bubbles-list-items">
                {/* <a href=""> */}
                <div className="bubble-img-container"><img src="" alt="" /></div>
                {/* </a> */}
                <p className="bubble-title">Lactose-free</p>
              </li>
              <li className="bubbles-list-items">
                {/* <a href=""> */}
                <div className="bubble-img-container"><img src="" alt="" /></div>
                {/* </a> */}
                <p className="bubble-title">Puns</p>
              </li>
            </ul>
          </div>
        </div>
        <ProductSnapshotContainer />
      </main>
      <div id="about">
        <p id="overview"></p>
        {/* help link */}
      </div>
      {/* footer component */}
    </div>
  )
}

export default Home;