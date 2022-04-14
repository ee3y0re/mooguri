import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import { fetchReviews } from "../../actions/review_actions";
import ProductSnapshot from "./products_snapshot";

const mapStateToProps = (state) => {
  return {
    products: state.entities.products,
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    fetchReviews: () => dispatch(fetchReviews())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSnapshot);