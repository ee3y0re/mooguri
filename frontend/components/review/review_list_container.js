import { connect } from "react-redux";
import { deleteReview } from "../../actions/review_actions";
import ReviewList from "./review_list";

// if you need disparch = component container
// mstp is what you reference after running the func passed from mdtp
const mdtp = (dispatch) => {
  return {
    deleteReview: () => dispatch(deleteReview())
  }
}

export default connect(null, mdtp)(ReviewList);