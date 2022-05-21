import React from "react";
import { Link } from "react-router-dom";

class ProductSnapshot2 extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchProducts;
  }
  render(){
    if (!this.props.products) return null;
    const products = Object.values(this.props.products);
    let selectedProducts = [];
    for (let i = 3; i < products.length; i += 6) {
      if (i < 16) {
        selectedProducts.push(products[i]);
        selectedProducts.push(products[i + 1]);
      } else {
        selectedProducts.push(products[i]);
      }
    };

    return(
      <div></div>
    )
  }
}

export default ProductSnapshot2;