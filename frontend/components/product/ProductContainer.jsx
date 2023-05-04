// PRODUCT SHOW CONTAINER
import { connect } from "react-redux";
import { fetchProduct } from "../../actions/productActions";
import { createReview } from "../../actions/reviewActions";
import {
  fetchUserCartProducts,
  addProductToCart,
  updateProductInCart,
} from "../../actions/cartActions";
import Product from "./Product";

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
    fetchUserCartProducts: () => dispatch(fetchUserCartProducts),
    updateProductInCart: (cart) => dispatch(updateProductInCart(cart)),
    addProductToCart: (cart) => dispatch(addProductToCart(cart))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);