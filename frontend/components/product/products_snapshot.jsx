import React from "react";
import { Link } from "react-router-dom";


class ProductSnapshot extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
    // console.log(this.props.products)
  }

  render() { 
    const arrayOfAllProducts = Object.values(this.props.products);  
    return (
      <div className="section-product-index">
        <div className="product-index-title-container">
          <h1 className="product-index-title">Stories with Treasures</h1>
        </div>
        <div className="product-index-grid-container">
          <div className="product-index-row">
            <ul className="ul-product-index-row-list">
              {
                arrayOfAllProducts?.slice(0, 10).map((product) => {
                  return (
                    <div className="product-index-row-list-items-container">
                      <li key={product.id} className="product-index-row-list-items">
                        <Link to={`/products/${product.id}`}><img src={product.photoUrl} alt={`${product.name}`} className="product-index-thumbnail" /></Link>
                      </li>
                    </div>
                  )
                })
              }
              <div id="delete" className="product-index-row-list-items-container"><li><img className="product-index-thumbnail" src={window.placeholder} alt="do you ever feel like a paper bag? squished in grocery bin, feeling weight of sin~" /></li></div>
              <div id="delete" className="product-index-row-list-items-container"><li><img className="product-index-thumbnail" src={window.placeholder} alt="do you ever feel like a paper bag? squished in grocery bin, feeling weight of sin~" /></li></div>
              <div id="delete" className="product-index-row-list-items-container"><li><img className="product-index-thumbnail" src={window.placeholder} alt="do you ever feel like a paper bag? squished in grocery bin, feeling weight of sin~" /></li></div>
              <div id="delete" className="product-index-row-list-items-container"><li><img className="product-index-thumbnail" src={window.placeholder} alt="do you ever feel like a paper bag? squished in grocery bin, feeling weight of sin~" /></li></div>
              <div id="delete" className="product-index-row-list-items-container"><li><img className="product-index-thumbnail" src={window.placeholder} alt="do you ever feel like a paper bag? squished in grocery bin, feeling weight of sin~" /></li></div>
              <div id="delete" className="product-index-row-list-items-container"><li><img className="product-index-thumbnail" src={window.placeholder} alt="do you ever feel like a paper bag? squished in grocery bin, feeling weight of sin~" /></li></div>
              <div id="delete" className="product-index-row-list-items-container"><li><img className="product-index-thumbnail" src={window.placeholder} alt="do you ever feel like a paper bag? squished in grocery bin, feeling weight of sin~" /></li></div>
              <div id="delete" className="product-index-row-list-items-container"><li><img className="product-index-thumbnail" src={window.placeholder} alt="do you ever feel like a paper bag? squished in grocery bin, feeling weight of sin~" /></li></div>


            </ul>
          </div>
        </div>
        {/* <div className="product-index-row">
        <ul className="product-index-row-list">
          <div className="product-index-row-list-items-container"><li ></li></div>
        </ul>
      </div> */}
      </div>
    );
  };
}

export default ProductSnapshot;

