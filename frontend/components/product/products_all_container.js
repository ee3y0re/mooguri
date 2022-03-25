import { connect } from "react-redux";
import { fetchProducts } from "../../actions/product_actions";
import ProductsAll from "./products_all";

const mapStateToProps = (state) => {
  return {
    // // version 1
    products: state.entities.products
    // // version 2
    // products: Object.values[state.entities.products]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAll);