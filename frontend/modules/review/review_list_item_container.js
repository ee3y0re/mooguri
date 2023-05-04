import { connect } from "react-redux";
import { deleteReview } from "../../actions/reviewActions";
import ReviewListItem from "./review_list_item";

const mdtp = (dispatch) => {
  return {
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
  }
}

export default connect(null, mdtp)(ReviewListItem);