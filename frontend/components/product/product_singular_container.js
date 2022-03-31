import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import { createReview } from "../../actions/review_actions"
// import { productSpecificReviews } from "../../reducers/selectors";
import ProductSingular from "./product_singular";

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.id;
  const allUsers = state.entities.users;
  return {
    reviewerId: allUsers[currentUserId],
    product: state.entities.products[ownProps.match.params.productId]
    // errors: state.errors.review
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