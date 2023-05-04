// REVIEW FORM CONTAINER
import { connect } from "react-redux";
import { createReview } from "../../actions/reviewActions";
import CreateReviewForm from "./create_review_form";

const mstp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.review
  };
};

const mdtp = (dispatch) => {
  return {
    createReview: (reviewMagic) => dispatch(createReview(reviewMagic)),
  }
}

export default connect(mstp,mdtp)(CreateReviewForm);
