// PRODUCT SHOW CONTAINER
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import { createReview } from "../../actions/review_actions";
import { addProductToCart } from "../../actions/cart_actions";
import ProductSingular from "./product_singular";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    product: state.entities.products[ownProps.match.params.productId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    createReview: (pleaseWorkThingy) => dispatch(createReview(pleaseWorkThingy)),
    addProductToCart: (cart) => dispatch(addProductToCart(cart))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductSingular);