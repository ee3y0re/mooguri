import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProducts } from "../../actions/product_actions";
import SearchBar from "./search_bar";

// const mstp = (state) => {
//   return {};
// }

const mdtp = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts)
  }
}

export default withRouter(connect(null, mdtp)(SearchBar));