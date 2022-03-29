import { connect } from "react-redux";
import { fetchProduct } from "../../actions/product_actions";
import ProductSingular from "./product_singular";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    product: state.entities.products[ownProps.match.params.productId]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: productId => dispatch(fetchProduct(productId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductSingular);