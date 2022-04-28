import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container";
import ReviewListItem from "./review_list_item"

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // flag for showing review edit
      editDisplay : false
    }
    //binding function toggling flag for review edit
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  //function toggling flag for review edit
  handleEditClick(e){
    e.preventDefault;
    const newStatus = !this.state.editDisplay
    this.setState({ editDisplay : newStatus });
    // on handle submit edit, need to set edit display as false
  }

  //function for formatting createdAt attribute of review
  dateFormatter(dateNum) {
    const monthsAbbrev = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthsAbbrev[new Date(dateNum).getMonth()];
    const date = new Date(dateNum).getDate();
    const year = new Date(dateNum).getFullYear();
    // const minutes = new Date(dateNum).getMinutes();
    return month + " " + date + " " + year
  }

  render(){
    if (!this.props) { return null }
    const { reviews, product, currentUser, deleteReview } = this.props;
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
            reviews?.map((review) => {
                return (
                  <ReviewListItem
                    key={review.id}
                    review={review}
                    dateFormatter={this.dateFormatter}
                    currentUser={currentUser}
                    editDisplay={this.state.editDisplay}
                    handleEditClick={this.handleEditClick}
                    handleDeleteClick={deleteReview}
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