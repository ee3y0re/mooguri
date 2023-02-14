import { connect } from "react-redux";
import { listCategoryProducts } from "../../actions/category_actions";
import Category from "./Category";

const mSTP = (state, wePassProps) => {
  console.log(state, wePassProps);
};

const mDTP = (dispatch) => {
  return {
    listCategoryProducts: (categoryId) =>
      dispatch(listCategoryProducts(categoryId)),
  };
};

export default connect(mSTP, mDTP)(Category);
