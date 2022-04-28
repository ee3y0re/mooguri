import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container";
import EditReviewForm from "./edit_review_form"

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDisplay : false
    }
  }

  handleEditClick(){
    this.setState({ editDisplay : !this.state.editDisplay });
    // on handle submit edit, need to set edit display as false
  }

  render(){
    if (!this.props) { return null }
    const { reviews, product } = this.props;
    const monthsAbbrev = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const test = reviews[reviews.length - 1].createdAt;
    const testNum = new Date(test);
    console.log(testNum.getMonth())
    const index = testNum.getMonth();
    console.log(monthsAbbrev[index] + " " + testNum.getDate() + " " + testNum.getFullYear())

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
                  <br />
                  <h3>
                    {
                      monthsAbbrev[new Date(review.createdAt).getMonth()] +
                      " " + new Date(review.createdAt).getDate() + " " + 
                      new Date(review.createdAt).getFullYear()
                    }
                  </h3>
                  <br />
                  <p className="review-body">{review.body}</p>
                  {
                    this.props.currentUser?.id === review.reviewerId ?
                    <div className="review-edit-delete-buttons">
                      <button 
                        className="dark-button" 
                        id="submit-review" 
                        onClick={() => console.log("work on edit")}
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

