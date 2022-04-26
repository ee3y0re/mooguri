// REVIEW FORM CONTAINER
import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import { closeModal } from "../../actions/modal_actions";
import ReviewForm from "./review_form";

const mstp = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.review
  };
};

const mdtp = (dispatch) => {
  return {
    submitAction: (reviewMagic) => dispatch(createReview(reviewMagic)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mstp,mdtp)(ReviewForm);
