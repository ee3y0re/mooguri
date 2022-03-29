import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import ProductSnapshot from "./products_snapshot";

const mapStateToProps = (state) => {
  return {
    products: state.entities.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSnapshot);