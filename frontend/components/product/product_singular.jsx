import React from "react";
import ReviewForm from "../review/review_form";
import ReviewList from "../review/review_list"

class ProductSingular extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
  }

  render() {
    /* 
    createReview
    fetchProduct
    fetchReviews
    history
    location
    math
    product
      availability
      category
      description
      id
      photoUrl
      price
      productName
      review
        (all review objects regardless o if they are associated with reviews)
    staticContext
    */

    //because constructor and render hits first before component did mount
    //so we need the conditional so that render returns null then component loads and triggers rerender
    if (!this.props.product) {
      return null;
    }

    console.log("props from product show", this.props)

    const { product } = this.props;
    // const reviewsArray = Object.values(product.reviews)
    // const selectedRev = reviewsArray?.filter(review => review.productId === product.id)

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
            <h2>Reviews</h2>
            {/* TODO: remember you need protected routes set up then you should be able to access user in the index */}
            {
              this.props.currentUser ? <ReviewForm currentUser={this.props.currentUser} product={product} /> : <p>Please log in to leave a review</p>
            }
            <br />
            <h2>Reviews for this item</h2>
            <ReviewList reviews={product.reviews} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductSingular;