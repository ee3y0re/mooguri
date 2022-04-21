import React from "react";
import { connect } from "react-redux";
import { createReview } from "../../actions/review_actions";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      reviewerId: this.props.currentUser.id,
      reviewerUsername: this.props.currentUser.username,
      productId: this.props.product.id
    }
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(this.state)
  }



  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>My review</h2>
          {/* adding name attribute to rating prevents multiple from being selected */}
          <input name="rating" type="radio" id="rating-5" value='5' onClick={this.update("rating")}/>
          <label htmlFor="rating-5">5</label>
          <input name="rating" type="radio" id="rating-4" value='4' onClick={this.update("rating")}/>
          <label htmlFor="rating-4">4</label>
          <input name="rating" type="radio" id="rating-3" value='3' onClick={this.update("rating")}/>
          <label htmlFor="rating-3">3</label>
          <input name="rating" type="radio" id="rating-2" value='2' onClick={this.update("rating")}/>
          <label htmlFor="rating-2">2</label>
          <input name="rating" type="radio" id="rating-1" value='1' onClick={this.update("rating")}/>
          <label htmlFor="rating-1">1</label>
          <h3>Help others by sharing your feedback</h3>
          <p>What do you like about this? Did it ship on time? Describe your experience with this shop.</p>
          <textarea name="body" onChange={this.update("body")}/>
          <h3>Reviewed by {this.state.reviewerUsername}</h3>
          <p>Your review and profile information will be publicly displayed.</p>
          <button type="submit">Post Your Review</button>
        </form>
      </div>
    )
  }
}

const blookstanap = (dispatch) => {
  // debugger
  return {
    createReview: (reviewMagic) => dispatch(createReview(reviewMagic)),
    // updateAtion: () => dispatch(fetchReviews())
  }
}

export default connect(null, blookstanap)(ReviewForm);

// export default ReviewForm;
