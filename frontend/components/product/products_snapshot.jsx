import React from "react";
import { Link } from "react-router-dom";


class ProductSnapshot extends React.Component {

  componentDidMount(){
    this.props.fetchProducts();
  }

  render() { 
    const arrayOfAllProducts = Object.values(this.props.products);  
    return (
      <div className="section-product-index">
        <div className="product-index-grid-container">
          <div className="product-index-row">
            <h1 className="product-index-title">See MOO-re</h1>
            <ul className="ul-product-index-row-list">
              {
                // arrayOfAllProducts?.slice(0, 10).map((product) => {
                arrayOfAllProducts?.map((product) => {
                  return (
                    <div className="product-index-row-list-items-container" key={product.id.toString()}>
                      <li className="product-index-row-list-items">
                        <Link to={`/products/${product.id}`}><img src={product.photoUrl} alt={`${product.name}`} className="product-index-thumbnail" /></Link>
                      </li>
                    </div>
                  )
                })
              }
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

