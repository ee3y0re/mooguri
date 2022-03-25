import React from "react";

class ProductSingular extends React.Component {
  componentDidMount(){
    debugger
    // grabbing from url 
    this.props.fetchProduct(this.props.match.params.productId)
  }

  

  render(){
    // debugger;
    //because constructor and render hits first before component did mount
    //so we need the conditional so that render returns null then component loads and triggers rerender
    if (!this.props.product) {
      return null;
    }

    const { product } = this.props;
    
    return (
      <div>
        <img src={product.photoUrl} alt="" />
        <h1>{product.productName}</h1>

        <h2>${product.price}</h2>
        {/* Work in logic for availability */}
        <h3>In Stock</h3>
        <button>Add to Cart</button>
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>
    )
  }
}

export default ProductSingular;