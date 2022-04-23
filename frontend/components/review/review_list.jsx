import React from "react";
import { openModal } from "../../actions/modal_actions";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
  }

  // componentDidMount(){
  //   this.props.fetchReviews();
  // }

  render(){
    if (!this.props) { return null }

    const { reviews, productId } = this.props;

    return (
      <div>
        <h1 className="review-head">{reviews.length} reviews</h1>
        <button onClick={() => openModal("Create Review", productId)}>Create a review</button>
        {
          reviews.map((review, idx) => (
            <div key={idx}>
              <h2>{review.username}</h2>
              <p>{review.body}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ReviewList;

