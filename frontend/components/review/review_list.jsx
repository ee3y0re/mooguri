import React from "react";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (!this.props) { return null }

    const { reviews } = this.props;
    return (
      <div>
        <h1 className="review-head">{reviews?.length} reviews</h1>
        <div id="review-action">
          {
            this.props.currentUser ? <button onClick={
              () => this.props.openModal("Create Review")
            } className="dark-button" id="create-review">
              Create a review</button> : <span id="review-not-logged-in">
                Please sign in to leave a review
              </span>
          }
        </div>
        <br />

        {
          reviews?.map((review, idx) => (
            <div key={idx}>
              <div className="review-row">
                <h2 className="review-author">{review.username}</h2>
                <p className="review-body">{review.body}</p>
              </div>
              <br />
            </div>
          ))
        }
      </div>
    )
  }
}

export default ReviewList;

