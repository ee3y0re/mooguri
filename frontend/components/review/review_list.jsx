import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container";
import EditReviewForm from "./edit_review_form"

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDisplay : false
    }

    this.handleEditClick = this.handleEditClick.bind(this)
  }

  handleEditClick(e){
    // console.log("in handle edit")
    e.preventDefault;
    const newStatus = !this.state.editDisplay
    this.setState({ editDisplay : newStatus });
    // on handle submit edit, need to set edit display as false
  }

  render(){
    if (!this.props) { return null }
    const { reviews, product } = this.props;
    const monthsAbbrev = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
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
                  {/* reviewer */}
                  <h2 className="review-author">{review.username}</h2>
                  <br />
                  {/* review date creation */}
                  <h3>
                    {
                      monthsAbbrev[new Date(review.createdAt).getMonth()] +
                      " " + new Date(review.createdAt).getDate() + 
                      " " + new Date(review.createdAt).getFullYear()
                    }
                  </h3>
                  <br />
                  {/* either showing an edit review menu or the review's body */}
                  {
                    this.state.editDisplay ?
                      <EditReviewForm review={review} /> :
                      <p className="review-body">{review.body}</p>
                  }
                  <br />
                  {/*
                  toggle showing edit or delete review depending on if logged in
                  and also the original creater of the review
                   */}
                  {
                    this.props.currentUser?.id === review.reviewerId ?
                    <div className="review-edit-delete-buttons">
                      <button 
                        className="dark-button" 
                        id="submit-review" 
                        onClick={this.handleEditClick}
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
                  <br />
                  <br />
                </div>
                <br />
              </div>
              // reversing the review order from most recent to oldest
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

