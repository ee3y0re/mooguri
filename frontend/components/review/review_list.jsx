import React from "react";
import ReviewFormContainer from  "./review_form_container"

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (!this.props) { return null }

    const { reviews, product } = this.props;
    return (
      <div className="review-list-box">
        <br />
        <div id="review-action">
          {
            this.props.currentUser ? 
              <ReviewFormContainer 
                product={product}
                refreshList={this.props.refreshList}
              /> :
              <span id="review-not-logged-in">
                Please sign in to leave a review.
              </span>
          }
        </div>
        <br />
        <div className="review-row-box">
          {
            reviews?.map((review, idx) => (
              <div key={idx}>
                <div className="review-row">
                  <h2 className="review-author">{review.username}</h2>
                  <p className="review-body">{review.body}</p>
                  {
                    this.props.currentUser?.id === review.reviewerId ?
                      <div>
                        <button 
                          className="dark-button" 
                          id="submit-review" 
                          onClick={() => console.log("work on edit review")}
                        >
                          Edit
                        </button>
                        <button 
                          className="dark-button" 
                          id="submit-review" 
                          onClick={() => console.log("work on delete review")}
                        >
                          Delete
                        </button>
                        
                      </div> :
                      <></>

                  }
                </div>
                <br />
              </div>
            )).reverse()
          }
        </div>
      </div>
    )
  }
}

export default ReviewList;

