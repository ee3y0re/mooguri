import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container"

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
        <div id="review-form-action">
          {
            this.props.currentUser ? 
              <CreateReviewFormContainer 
                product={product}
                refreshList={this.props.refreshList}
              /> :
              <span id="review-not-logged-in">
                Please sign in to leave a review.
              </span>
          }
        </div>
        <div className="review-row-box">
          {
            reviews?.map((review, idx) => (
              <div key={idx}>
                <div className="review-row">
                  <h2 className="review-author">{review.username}</h2>
                  <p className="review-body">{review.body}</p>
                  {
                    this.props.currentUser?.id === review.reviewerId ?
                      <div className="review-edit-delete-buttons">
                        <button 
                          className="dark-button" 
                          id="submit-review" 
                          onClick={() => console.log("work on delete review")}
                          // link to edit review form component
                        >
                          Edit
                        </button>
                        <button 
                          className="dark-button" 
                          id="submit-review" 
                          onClick={() => console.log("work on edit review")}
                        >
                          Delete
                        </button>
                      </div> :
                      <></>
                  }
                  <br />
                  <br />
                </div>
                <br />
              </div>
            )).reverse()
          }
          <br />
        </div>
        <br />
      </div>
    )
  }
}

export default ReviewList;

