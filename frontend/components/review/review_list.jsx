import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container";
import EditReviewForm from "./edit_review_form";
import ReviewActions from "./review_actions";

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
            reviews?.map((review, idx) => {
                return (
                  <div key={idx}>
                  {/* <div className="review-row">
                    <h2 className="review-author">{review.username}</h2>
                    <br />
                    <h3>{this.dateFormatter(review.createdAt)} </h3>
                    <br />
                    {
                      this.state.editDisplay ?
                        <EditReviewForm review={review} /> :
                        <p className="review-body">{review.body}</p>
                    }
                    <br />
                    {
                      this.props.currentUser?.id === review.reviewerId ?
                      <ReviewActions edit={this.handleEditClick} /> :
                      <></>
                    }
                    <br />
                    <br />
                  </div>
                  <br /> */}
                  </div>
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

