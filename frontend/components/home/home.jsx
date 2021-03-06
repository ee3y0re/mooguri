import React from "react";
import { Link } from "react-router-dom";
import ProductSnapshotContainer from "../product/products_snapshot_container";
import About from "../footer/about";
import ProductsSnapshot2Container from "../product/products_snapshot_2_container";

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
      <main id="front-page">
        {/* after creating a bubbles component */}
        <div id="top-banner">
          <h1 id="greeting">Check out these cow-tegories</h1>
          {/* add categories table first */}
          <div className="bubbles-container">
            <ul className="bubbles-list">
              <li className="bubbles-list-items">
                <Link to="/products/18">
                  <div className="bubble-img-container">
                    <img 
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/milk6_il_1588xN.3494226927_nq3r.jpg" 
                      alt="milk-bubble" 
                    />
                  </div>
                </Link>
                <p className="bubble-title">Milk</p>
              </li>
              <li className="bubbles-list-items">
                <Link to="/products/21">
                  <div className="bubble-img-container">
                    <img 
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/pun_3_il_794xN.3121609316_7f70.jpg" 
                      alt="cheese-bubble" 
                    />
                  </div>
                </Link>
                <p className="bubble-title">Cheese</p>
              </li>
              <li className="bubbles-list-items">
                <Link to="/products/28">
                  <div className="bubble-img-container">
                    <img 
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt4_il_1588xN.3910113357_mres.jpg" 
                      alt="yogurt-bubble" 
                    />
                  </div>
                </Link>
                <p className="bubble-title">Yogurt</p>
              </li>
              <li className="bubbles-list-items">
                <Link to="/products/8">
                  <div className="bubble-img-container">
                    <img 
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/lactose_free_2_il_794xN.3775381345_bkkr.jpg" 
                      alt="lactose-free-bubble" 
                    />
                  </div>
                </Link>
                <p className="bubble-title">Lactose-free</p>
              </li>
              <li className="bubbles-list-items">
                <Link to="/products/23">
                  <div className="bubble-img-container">
                    <img 
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/pun5_il_1588xN.2828827873_89d5.jpg" 
                      alt="pun-bubble" 
                    />
                  </div>
                </Link>
                <p className="bubble-title">Puns</p>
              </li>
            </ul>
          </div>
        </div>
        <ProductSnapshotContainer />
        <div className="top-banner">
          <div className="bubbles-container">
            <ul className="bubbles-list">
              <li className="bubbles-list-items">
                <Link to="/products/15">
                  <div className="bubble-img-container">
                    <img
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/milk6_il_1588xN.3494226927_nq3r.jpg"
                      alt="milk-bubble"
                    />
                  </div>
                </Link>
                <p className="bubble-title">Milk</p>
              </li>
              <li className="bubbles-list-items">
                <Link to="/products/21">
                  <div className="bubble-img-container">
                    <img
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/pun_3_il_794xN.3121609316_7f70.jpg"
                      alt="cheese-bubble"
                    />
                  </div>
                </Link>
                <p className="bubble-title">Cheese</p>
              </li>
              <li className="bubbles-list-items">
                <Link to="/products/28">
                  <div className="bubble-img-container">
                    <img
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/yogurt4_il_1588xN.3910113357_mres.jpg"
                      alt="yogurt-bubble"
                    />
                  </div>
                </Link>
                <p className="bubble-title">Yogurt</p>
              </li>
              <li className="bubbles-list-items">
                <Link to="/products/8">
                  <div className="bubble-img-container">
                    <img
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/lactose_free_2_il_794xN.3775381345_bkkr.jpg"
                      alt="lactose-free-bubble"
                    />
                  </div>
                </Link>
                <p className="bubble-title">Lactose-free</p>
              </li>
              <li className="bubbles-list-items">
                <Link to="/products/23">
                  <div className="bubble-img-container">
                    <img
                      src="https://mooguri-dev.s3.us-west-1.amazonaws.com/pun5_il_1588xN.2828827873_89d5.jpg"
                      alt="pun-bubble"
                    />
                  </div>
                </Link>
                <p className="bubble-title">Puns</p>
              </li>
            </ul>
          </div>
        </div>
        <ProductsSnapshot2Container />
      </main>
      {/* <About /> */}
      {/* this is the image that partially covers color to create effect */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1400 48" preserveAspectRatio="none" aria-hidden="true" focusable="false" throwIfNamespace="false">
        <path d="M1400 0l-55 12-23 10-23 4-6-1-9 1-5 2-24 8h-11l-18-5-11-1-10-1h-7l-8 3-8 1-14-4v1l-3 1-9-5-3-1-17 2-10-1-9-1-8 1-7 1-2 1h-13l-2-1-13-2h-20l-11 2-14 3h-18l-10 1-3-1-2-1-4-1h-4l-16 1h-2l-7-1h-6l-8 1-6-2-5-1-2 1-20-1-10 2h-6l-11-1-9-1h-4l-3 1-19 1h-19l-3-1-11 1h-2l-7 3h-23l-3 1h-19l-16-1-17 1h-8l-2-1-20-2-4 1-4-1h-2l-12 1-2 1h-13l-9 1h-4l-6-1-10 1-9-1h-15l-9 2-12-2-12-2-3 2-5 2-11-3-6 1h-6l-28 1-5 2h-33l-3 1-4 2h-17l-5 1-4-1-7-1h-5l-4 1-13 3-2-2-2-1h-15l-22-1h-2l-11 1h-5l-2-1h-19l-9 1-6-1h-2l-9 2-15 2h-4l-12 1h-25l-12 1-7 1h-4l-4 1h-4l-4 1h-20l-3-1h-7l-1-1v-4l-1 1h-2l-9 1-2 2-6 2-7 1-5 2h-2l-3-2-8-1h-4l-11 3h-1l-3-2-11-3-20-6-9-3h-3l-9 2h-5l-11-4-13-3-11-15-21-4L0 0h1400z"></path>
      </svg> */}
      {/* footer component */}
    </div>
  );
};

export default Home;