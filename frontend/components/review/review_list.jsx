import React from "react";

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

    const { product, reviews } = this.props;
    const targetReviewIds = product?.selectedReviews;
    const reviewsArray = Object.values(reviews)
    const acquiredReviews = reviewsArray.filter(reviewObj => targetReviewIds?.includes(reviewObj.id));
    console.log(acquiredReviews[0])
    return (
      <div>
        <h1>Reviews</h1>
      </div>
    )
  }
}

export default ReviewList;

