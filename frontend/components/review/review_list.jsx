import React from "react";

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount(){
  //   this.props.fetchReviews();
  // }

  render(){
    if (!this.props) { return null }

    const { reviews } = this.props;
    return (
      <div>
        <h1 className="review-head">{reviews?.length} reviews</h1>
        {
          this.props.currentUser ? <button onClick={() => this.props.openModal("Create Review")}>Create a review</button> : <span> Please sign in to leave a review</span>
        }

        {
          reviews?.map((review, idx) => (
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

