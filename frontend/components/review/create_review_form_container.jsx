import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const napstablook = (state) => {
  return {
    review: {
      body: ""
    }
  };
};

const blookstanap = (dispatch) => {
  // debugger
  return {
    submitAction: (reviewMagic) => dispatch(createReview(reviewMagic))
  }
}

export default connect(napstablook,blookstanap)(ReviewForm);