import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container";
import ReviewListItem from "./review_list_item"

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editDisplay : false
    }

    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick(e){
    // console.log("in handle edit")
    e.preventDefault;
    const newStatus = !this.state.editDisplay
    this.setState({ editDisplay : newStatus });
    // on handle submit edit, need to set edit display as false
  }

  dateFormatter(dateNum) {
    const monthsAbbrev = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthsAbbrev[new Date(dateNum).getMonth()];
    const date = new Date(dateNum).getDate();
    const year = new Date(dateNum).getFullYear();
    // const minutes = new Date(dateNum).getMinutes();

    return month + " " + date + " " + year //+ " Time: " + minutes;
  }

  render(){
    if (!this.props) { return null }
    const { reviews, product, currentUser } = this.props;
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