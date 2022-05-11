//PRODUCT SHOW PT 1
import React from "react";
import ReviewList from "../review/review_list";

class ProductSingular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formProcessed: false
    }

    this.refreshList = this.refreshList.bind(this);
  }

  componentDidMount(){
    // grabbing from url 
    // own props object has match key that has params key that has productId key
    this.props.fetchProduct(this.props.match.params.productId)
  }

  refreshList() {
    const newState = !this.state.formProcessed;
    this.setState({
      formProcessed: newState,
    });
    this.componentDidMount();
  }

  handleAddToCartClick = (e) => {
    e.preventDefault();
    // const newCart = {buyerId:"", cartItemId:""};
    // newCart[buyerId] = this.props.currentUser.id;
    // newCart[cartItemId] = this.props.product.id;
    const newCart = Object.assign({}, {
      buyer_id: this.props.currentUser.id,
      cart_item_id: this.props.product.id
    })
    this.props.addItemToCart(newCart);
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
            {/* <div className="show-image-minis">Minis WIP</div> */}
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
            <button 
              id="auth-submit-button"
              className="dark-button"
              onClick={this.handleAddToCartClick}
            >Add to Cart</button>
            <div className="description-container">
              <h2 className="product-info-head">Description</h2>
              <p className="product-info-details">{product.description}</p>
            </div>
            <div className="eta">
              <div className="eta-1">
                <h2 className="product-info-head">
                  Shipping and Return Policies
                </h2>
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
            <h1 className="review-head">{product.reviews?.length} reviews</h1>
            <ReviewList
              currentUser={this.props.currentUser} 
              product={product} 
              reviews={product.reviews} 
              refreshList={this.refreshList}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSingular;