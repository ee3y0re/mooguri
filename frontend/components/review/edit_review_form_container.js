// REVIEW FORM CONTAINER
import { connect } from "react-redux";
import { updateReview } from "../../actions/review_actions";
import EditReviewForm from "./edit_review_form";

const mstp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.review
  };
};

const mdtp = (dispatch) => {
  return {
    updateReview: (reviewMagic) => dispatch(updateReview(reviewMagic))
  }
}

export default connect(mstp, mdtp)(EditReviewForm);