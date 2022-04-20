import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import { fetchReviews, createReview } from "../../actions/review_actions";
// import { createReview, receiveReviews } from "../../actions/review_actions";
import ProductSingular from "./product_singular";

const mapStateToProps = (state, ownProps) => {
  // const currentUserId = state.session.id;
  // const allUsers = state.entities.users;
  return {
    product: state.entities.products[ownProps.match.params.productId],
    // review: state.entities.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    // fetchReviews: () => dispatch(fetchReviews()),
    createReview: (pleaseWorkThingy) => dispatch(createReview(pleaseWorkThingy))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductSingular);