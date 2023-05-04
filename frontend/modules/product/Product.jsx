//PRODUCT SHOW PT 1
import React from "react";
import ReviewList from "../review/review_list";
import Container from "../../components/container/Container";
import Button from "../../components/buttons/Button";
import "./Product.scss";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formProcessed: false,
      qty: 1,
    };
    this.handleUpdateQty = this.handleUpdateQty.bind(this);
    this.refreshList = this.refreshList.bind(this);
  }

  componentDidMount() {
    // grabbing from url
    // own props object has match key that has params key that has productId key
    this.props.fetchProduct(this.props.match.params.productId);
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
    this.setState({ qty: e.target.value });
  }

  handleAddToCartClick = (e) => {
    e.preventDefault();
    const newCart = Object.assign(
      {},
      {
        buyer_id: this.props.currentUser.id,
        cart_item_id: this.props.product.id,
        qty: this.state.qty,
      }
    );
    this.props.addProductToCart(newCart);
  };

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

  render() {
    // console.log(Number(this.state.qty))
    //because constructor and render hits first before component did mount
    //so we need the conditional so that render returns null then component
    //  loads and triggers rerender
    if (!this.props.product) {
      return null;
    }

    const {
      product: {
        availability,
        description,
        id,
        photoUrl,
        price,
        productName,
        reviews,
        sellerId,
      },
      currentUser,
    } = this.props;
    let dropDownArr = [];
    for (let i = 1; i <= availability; i++) {
      dropDownArr.push(i);
    }

    return (
      <Container className="product-container">
        <div className="product-wrapper intro">
          <img className="product-img" src={photoUrl} alt={productName} />
          <div className="product-wrapper main">
            <h2 className="product-name">{productName}</h2>
            <p className="product-seller">Seller ID: {sellerId}</p>
            <h3 className="product-price">${this.priceFormatter(price)}</h3>
            <div className="product-qty">
              <label htmlFor="qty">
                <p className="product-qty-num">Quantity</p>
              </label>
              <select
                name="qty"
                className="product-dropdown"
                onChange={this.handleUpdateQty}
              >
                {dropDownArr.map((choice, i) => {
                  return (
                    <option className="product-option" value={choice} key={i}>
                      {choice}
                    </option>
                  );
                })}
              </select>
            </div>
            {!currentUser ? (
              <p>Please log in to add to cart</p>
            ) : (
              <Button
                styleKey="filled"
                className="product-button"
                onClick={this.handleAddToCartClick}
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
        <div className="product-wrapper specs">
          <div className="product-wrapper info">
            <p className="product-description-title">Description</p>
            <h3 className="product-description-details">{description}</h3>
            <p className="product-eta-title">Shipping and Return Policies</p>
            <h3 className="product-eta-subtitle">Estimated Arrival</h3>
            <h2 className="custom-eta-date">April 1-5</h2>
          </div>
          <div className="product-wrapper reviews">
            <p className="product-reviews-title">{reviews?.length} reviews</p>
            <ReviewList
              currentUser={this.props.currentUser}
              product={this.props.product}
              reviews={reviews}
              refreshList={this.refreshList}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Product;
