import { connect } from "react-redux";
import { fetchProducts } from "../../util/product_api_util";
import ProductSnapshot2 from "./products_snapshot_2";

const mapStateToProps = (state) => {
  return {
    products: state.entities.products
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts)
  }
  
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSnapshot2);