//PRODUCT SHOW PT 1
import React from "react";
import ReviewList from "../review/review_list";

class ProductSingular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formProcessed: false,
      qty: 1
    }
    this.handleUpdateQty = this.handleUpdateQty.bind(this);
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

  handleUpdateQty(e) {
    e.preventDefault();
    this.setState({ qty : e.target.value })
  } 

  handleAddToCartClick = (e) => {
    e.preventDefault();
    const newCart = Object.assign({}, {
      buyer_id: this.props.currentUser.id,
      cart_item_id: this.props.product.id,
      qty: this.state.qty
    });
    this.props.addProductToCart(newCart);
  }

  priceFormatter(num) {
    let numWord = String(num);
    let numWordSplit = numWord.split(".");
    let afterDec = "";
    if (!numWordSplit[1]) {
      afterDec = "00";
    } else if (numWordSplit[1].length === 1) {
      afterDec = numWordSplit[1];
      afterDec += "0";
      numWordSplit.pop();
    } else {
      afterDec = numWordSplit[1];
      numWordSplit.pop();
    }
    numWordSplit.push(afterDec);
    return numWordSplit.join(".");
  }

  render(){
    // console.log(Number(this.state.qty))
    //because constructor and render hits first before component did mount
    //so we need the conditional so that render returns null then component 
    //  loads and triggers rerender
    if (!this.props.product) {
      return null;
    }

    const { product, currentUser } = this.props;
    let dropDownArr = [];
    for (let i = 1; i <= product.availability; i++) {
      dropDownArr.push(i);
    }
    
    return (
      <div className="splash">
        <div className="show-listing">
          <div className="show-image-container">
            <div className="show-image-big">
              <img className="main-product-img" src={product.photoUrl} alt="" />
            </div>
          </div>
          <div className="show-buy-quick">
            <div className="show-seller">
              <h3 className="product-info-subtitle1">
                Seller Id: {product.sellerId}
              </h3>
            </div>
            <div id="no-extra-space">
              <div className="show-buy-title-lines">
                <h1>{product.productName}</h1>
              </div>
              <div className="show-price-avail">
                <div className="show-price">
                  ${this.priceFormatter(product.price)}
                </div>
                <div className="show-avail">In Stock</div>
              </div>              
              <br />
              <br />
              <div className="show-dropdown-container">
                <label htmlFor="qty">Quantity</label>
                <br />
                <br />
                <select 
                  name="qty" 
                  id="qty" 
                  className="show-dropdown" 
                  onChange={this.handleUpdateQty}
                >
                  {
                    dropDownArr.map((choice, i) => {
                      return (
                        <option 
                          value={choice} 
                          key={i}
                        >{choice}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            {
              !currentUser ?
              <button
                id="auth-submit-button"
                className="dark-button disabled"
                disabled
              >Please log in to add to cart</button> :
              <button 
                id="auth-submit-button"
                className="dark-button"
                onClick={this.handleAddToCartClick}
              >Add to Cart</button>
            }
            
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