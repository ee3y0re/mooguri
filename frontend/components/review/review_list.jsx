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

    const { reviews } = this.props;

    return (
      <div>
        <h1>{reviews.length} reviews</h1>
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

