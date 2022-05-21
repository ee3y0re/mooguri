import React from "react";
import { Link } from "react-router-dom";

class ProductSnapshot2 extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  componentDidMount(){
    this.props.fetchProducts;
    console.log("we've hit componentdidmount")
  }
  render(){
    if (!this.props.products) return null;
    return(
      <div>second snapshot!</div>
    )
  }
}

export default ProductSnapshot2;