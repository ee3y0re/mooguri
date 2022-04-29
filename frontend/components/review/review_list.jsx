import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container";
import ReviewListItemContainer from "./review_list_item_container"

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
            reviews?.map((review, idx) => {
              return (
                <div className=
                  {
                  idx % 2 === 0 ? "review-row-box-gray" : "review-row-box-transparent"
                }
                >
                  <ReviewListItemContainer
                    key={review.id + `${review.body}` + review.createdAt}
                    review={review}
                    product={product}
                    dateFormatter={this.dateFormatter}
                    currentUser={currentUser}
                    refreshList={refreshList}
                  /> 
                </div>
              )
            })
          }
          <br />
        </div>
        <br />
      </div>
    )
  }
}

export default ReviewList;