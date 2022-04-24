//PRODUCT SHOW PT 1
import React from "react";
import ReviewListContainer from "../review/review_list_container";

class ProductSingular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formProcessed: false
    }
  }

  handleNewReview(){
    this.setState({
      formProcessed: !this.state.formProcessed
    })
  }

  componentDidMount(){
    // grabbing from url 
    // own props object has a match key that has a params key that has a productId key
    this.props.fetchProduct(this.props.match.params.productId)
    // this.props.receiveReviews();
  }

  render(){
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
            <div className="show-image-minis">Minis WIP</div>
            <div className="show-image-big">
              <img className="main-product-img" src={product.photoUrl} alt="" />
            </div>
          </div>
          <div className="show-buy-quick">
            <div className="show-seller">
              <h3 className="product-info-subtitle1">Seller Id: {product.sellerId}</h3>
              {/* <h4 className="product-info-subtitle2">1 sale, ??? stars</h4>               */}
            </div>
            <div id="no-extra-space">
              <div className="show-buy-title-lines">
                <h1>{product.productName}</h1>
              </div>
              <div className="show-price-avail">
                <div className="show-price">${product.price}</div>
                <div className="show-avail">In Stock</div>
              </div>              
            </div>

{/* PRODUCT SHOW PT 2 */}

            <button className="dark-button">Add to Cart WIP</button>
            <ul className="shop-item-trends">
              <li className="stock-sell-stats">Other people want this. OR Selling fast! <span className="stock-sell-details">Over # people have this in their carts right now. OR Only 1 left.</span></li>
              <li className="seller-trend">Star Seller (Sometimes)</li>
              <li className="ship-date">Arrives by Due Date of This Project</li>              
            </ul>
            <div className="highlights">
              <h2 className="product-info-head">Highlights</h2>
              <ul className="product-info-details">  
                           {/* need to add additional features to schema */}
                <li>Handmade</li>
                <li>Height: </li>
                <li>Width: </li>
                <li>Depth: </li>
                <li>OR</li>
                <li>Materials: </li>
                <li>Capacity: </li>
              </ul>              
            </div>
          </div>


          <div className="show-buy-info-full">
            <div className="description-container">
              <h2 className="product-info-head">Description</h2>
              <p className="product-info-details">{product.description}</p>
            </div>
            <div className="eta">
              <div className="eta-1">
                <h2 className="product-info-head">Shipping and Return Policies</h2>
                <h3 className="product-info-subtitle1">Estimated Arrival</h3>                  
                <span className="custom-small-title">April 1-5</span>
              </div>
              <div className="eta-2">
                <h2 className="product-info-subtitle1">Returns</h2>
                <span className="custom-small-title">Accepted</span>       
              </div>
            </div>
            <div ></div>
          </div>            
          <div className="show-reviews">
            {/* product id will be going to review form */}
            <ReviewListContainer reviews={product.reviews} formProcessed={this.state.formProcessed} onChange={() => this.handleNewReview()}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSingular;