import { connect } from "react-redux";
import { fetchProducts } from "../../../actions/productActions";
import { fetchReviews } from "../../../actions/review_actions";
import ProductList from "./ProductList";

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);