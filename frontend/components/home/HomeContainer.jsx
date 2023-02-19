import { connect } from "react-redux";
import { listAllCategories } from '../../actions'
import Home from "./home";

const mSTP = (state) => {
  return {
    categories: state.entities.categories
  }
}

const mDTP = (dispatch) => {
  return {
    listAllCategories: () => dispatch(listAllCategories)
  }
}

export default connect(mSTP, mDTP)(Home)