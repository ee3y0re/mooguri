# MOOguri 🐮

<kbd>![MOOguri Tour](https://github.com/ee3y0re/mooguri/blob/main/app/assets/images/mooguri_tour.gif)</kbd>

## It's like Etsy, but for cow-comrades, dairy-devotees, and everyone beyond and in-between!
Mooguri is an Etsy clone, and like Etsy, it is an ecommerce site that keeps a focus for vintage goods and crafted items, but this time cow-themed. 

## Live Link
https://mooguri.herokuapp.com/#/

## Technologies Used
+ NPM for managing dependencies, scripts, and general state of application
+ Webpack for configuring bundling of files
+ Rails for Database and Backend Route Management
+ Postman for Backend-Testing
+ React-Redux for Frontend Route and Rendering Management
+ Chrome Dev Tools for Frontend-Testing

## Adventures with Features
Dear Reader,
While class components and life-cycle methods will always have a special place in my heart❤️, I realized I am now hooked on hooks. And yet, while I have now been accustomed to practices, such as using useDispatch and direct imports of updating cart product items in my individual cart component, I keep traces of componentDidMount and classes extending React.Component throughout my app in user auth, product listings, and review CRUD features. This app is more than just a clone to me. This is a scrapbook of my React-Redux memories, through thick and thin. I am determined to learn more and create more "scrapbooks of my progress."

### Cart
#### Cart Create Backend Method
Create functionality allows users to add items to their cart. If an item already exists, user will be able to increase the quantity of their cart item with further additions.
```ruby
# carts_controller.rb
  def create
    if !Cart.find_by(cart_item_id: cart_params[:cart_item_id])
      @cart = Cart.new(cart_params)
      if @cart.save
        redirect_to action: "index"
      else
        render json: @cart.errors.full_messages, status: 422
      end
    else
      @cart = Cart.find_by(cart_item_id: cart_params[:cart_item_id])
      cart_params_copy = cart_params
      cart_params_copy["qty"] = @cart.qty + cart_params[:qty].to_i
      @cart.update(cart_params_copy)
      redirect_to action: "index"
    end
  end
```
#### Cart Update Backend and Frontend
These are the portions of code, from backend to frontend, that enable users to have the ability to edit quantity of their items in their cart while having a fast and actively updated total cost of their cart.
```ruby
# carts_controller.rb
  def update
    @cart = Cart.find_by(id: params[:id])
    if @cart.update(cart_params)
      @carts = Cart.where(buyer_id: current_user.id);
      render "/api/carts/index"
    else
      render json: @cart.errors.full_messages, status: 404
    end
  end
```
```javascript
// individual_cart_item.jsx
  const handleUpdateQty = (e) => {
    e.preventDefault();
    let updatedProduct = Object.assign({}, cartProduct);
    let newAmt = Number(e.target.value);
    updatedProduct.qty = newAmt;
    let newCartProduct = {
      id: cartId,
      buyer_id: updatedProduct.buyerId,
      cart_item_id: updatedProduct.cartItemId,
      qty : Number(updatedProduct.qty)
    };
    dispatch(updateProductInCart(newCartProduct))
      .then(setQty(newCartProduct.qty))
  }
```
```javascript
// individual_cart_item.jsx
  <div className="checkout-dropdown-container">
    <select
      name="qty"
      value={currentQty}
      className="checkout-dropdown"
      onChange={(e) => handleUpdateQty(e)}
    >
      {
        numArrCreate(cartProduct.availability).map((optionVal, i) => {
          return (
            <option
              value={optionVal}
              key={i}
            >
              {optionVal}
            </option>
          )
        })
      }
    </select>
  </div>
```

### Review
Making reviews, I learned the importance of analyzing for the parent component and ensuring that it holds most control over state for accurate rendering as opposed to its children like the review list item.
```javascript
// product_singular.jsx
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
    this.props.fetchProduct(this.props.match.params.productId)
  }

  refreshList() {
    const newState = !this.state.formProcessed;
    this.setState({
      formProcessed: newState,
    });
    this.componentDidMount();
  }
}

render(){
  const { product, currentUser } = this.props;
  return (
      <div className="show-reviews">
        <h1 className="review-head">{product.reviews?.length} reviews</h1>
        <ReviewList
          currentUser={this.props.currentUser} 
          product={product} 
          reviews={product.reviews} 
          refreshList={this.refreshList}
        />
      </div>
  )
}
```
```javascript
// review_list_item.jsx
class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // flag for showing review edit
      editDisplay: false
    }
    //binding function toggling flag for review edit
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  //function toggling flag for review edit
  handleEditClick(e) {
    e.preventDefault();
    const newStatus = !this.state.editDisplay;
    this.setState({ editDisplay: newStatus });
    // on handle submit edit, need to set edit display as false
  }

  render(){
    const { 
      review, dateFormatter, currentUser, product, refreshList, deleteReview
    } = this.props;

    return (
      <div className="review-row">
        <h2 className="review-author">{review.username}</h2>
        <br />
        <h3>{dateFormatter(review.createdAt)} </h3>
        <br />
        {
          this.state.editDisplay ?
            <EditReviewFormContainer 
              review={review} 
              product={product} 
              refreshList={refreshList}
              handleEditClick={this.handleEditClick}
            /> :
            <p className="review-body">{review.body}</p>
        }
        <br />
        {
          currentUser?.id === review.reviewerId ?
            <ReviewButtons
              review={review}
              refreshList={refreshList}
              editDisplay={this.state.editDisplay} 
              handleEditClick={this.handleEditClick} 
              handleDelete={deleteReview}
            /> :
            <></>
        }
        <br />
        <br />
      </div>
    )
  }
};
```

## Future Goals
+ Coordinating categories links and component
+ Profile pages
+ Favorites
+ Clean and touch ups ✨
