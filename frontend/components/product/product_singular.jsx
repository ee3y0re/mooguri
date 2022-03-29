import React from "react";

class ProductSingular extends React.Component {
  componentDidMount(){
    // grabbing from url 
    // own props object has a match key that has a params key that has a productId key
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
      <div className="splash">
        <div className="show-listing">
          <div className="show-image-container">
            <div className="show-image-minis"></div>
            <div className="show-image-big">
              <img src={product.photoUrl} alt="" />
            </div>
          </div>
          <div className="show-buy-quick">
            <div className="show-seller">
              <div className="show-seller-name">Abby</div>
              <div className="show-seller-info">1 sale, 5 stars</div>              
            </div>

            <div className="show-buy-title-lines">
              <h1>{product.productName}</h1>
            </div>
            <div className="show-price-avail">
              <div className="show-price">${product.price}</div>
              <div className="show-avail">In Stock</div>
            </div>
            <button className="dark-button">Add to Cart WIP</button>
            <ul className="shop-item-trends">
              <li className="stock-sell-stats">Other people want this. OR Selling fast! <span className="stock-sell-details">Over # people have this in their carts right now. OR Only 1 left.</span></li>
              <li className="seller-trend">Seller Fun Fact: The seller can eat bittermelon but cannot eat durian :c</li>
              <li className="ship-date">Arrives by Due Date of This Project</li>              
            </ul>
            <div className="highlights">
              <h2 className="highlights-head">Highlights</h2>
              <ul className="highlights-details">             
                <li>Handmade</li>
                <li>Height: It's high, trust me :p</li>
                <li>Width: Why?</li>
                <li>Depth: First Search</li>
              </ul>              
            </div>
          </div>


          <div className="show-buy-info-full"></div>            
          <div className="show-reviews">
            <h2>Reviews Under Construction</h2>
          </div>
        </div>
        
        {/* <div className="show-footer-site-directory">
          <div className="show-shop"></div>
          <div className="show-sell"></div>
          <div className="show-about"></div>
          <div className="show-help"></div>
        </div>
        <div className="show-legal-stuff">
          <div className="show-currency"></div>
          <div className="show-legality"></div>
        </div> */}
      </div>



      // // coded skeleton
      // <div className="product-show">
      //   <img src={product.photoUrl} alt="" />
      //   <h1>{product.productName}</h1>

      //   <h2>${product.price}</h2>
      //   {/* Work in logic for availability */}
      //   <h3>In Stock</h3>
      //   <button>Add to Cart</button>
      //   <h4>Description</h4>
      //   <p>{product.description}</p>
      // </div>
    )
  }
}

export default ProductSingular;