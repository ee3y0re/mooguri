import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";
import ReviewForm from "./review_form";

const napstablook = (state) => {
  return {
    review: {
      body: ""
    },
    formType: "Post Your Review"
  };
};

const blookstanap = (dispatch) => {
  return {
    magicalStuff: (reviewMagic) => dispatch(createReview(reviewMagic))
  }
}

export default connect(napstablook, blookstanap)(ReviewForm);