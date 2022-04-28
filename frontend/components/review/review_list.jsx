import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container";
import ReviewListItem from "./review_list_item"

class ReviewList extends React.Component {
  //function for formatting createdAt attribute of review
  dateFormatter(dateNum) {
    const monthsAbbrev = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthsAbbrev[new Date(dateNum).getMonth()];
    const date = new Date(dateNum).getDate();
    const year = new Date(dateNum).getFullYear();
    return month + " " + date + " " + year;
  }

  render(){
    if (!this.props) { return null };
    const { 
      reviews, product, currentUser, refreshList
    } = this.props;
    return (
      <div className="review-list-box">
        <br />
        <div id="review-form-action">
          {
            this.props.currentUser ? 
              <CreateReviewFormContainer 
                product={product}
                refreshList={refreshList}
              /> :
              <span id="review-not-logged-in">
                Please sign in to leave a review.
              </span>
          }
        </div>
        <div className="review-row-box">
          {
            reviews?.map((review) => {
                return (
                  <ReviewListItem
                    key={review.body}
                    review={review}
                    product={product}
                    dateFormatter={this.dateFormatter}
                    currentUser={currentUser}
                    refreshList={refreshList}
                  />
                  )
                }
                ).reverse()
              }
          <br />
        </div>
        <br />
      </div>
    )
  }
}

export default ReviewList;