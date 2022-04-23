//TODO: decided if this is needed
import { connect } from "react-redux";
import { fetchReviews } from "../../actions/review_actions";
import ReviewList from "./review_list";

const mstp = (state) => {
  return {
    // reviews: state.entities.reviews

  }
}


// if you need disparch = component container
// mstp is what you reference after running the func passed from mdtp
const mdtp = (dispatch) => {
  return {
    fetchReviews: () => dispatch(fetchReviews())
  }
}

export default connect(mstp, mdtp)(ReviewList);