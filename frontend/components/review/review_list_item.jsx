import React from "react";
import ReviewActions from "./review_actions";
import EditReviewFormContainer from "./edit_review_form_container";

class ReviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // flag for showing review edit
      editDisplay: false
    }
    //binding function toggling flag for review edit
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  //function toggling flag for review edit
  handleEditClick(e) {
    e.preventDefault();
    const newStatus = !this.state.editDisplay;
    this.setState({ editDisplay: newStatus });
    // on handle submit edit, need to set edit display as false
  }

  render(){
    const { 
      review, dateFormatter, currentUser, product, refreshList, deleteReview 
    } = this.props;

    return (
      <div className="review-row">
        <h2 className="review-author">{review.username}</h2>
        <br />
        <h3>{dateFormatter(review.createdAt)} </h3>
        <br />
        {
          this.state.editDisplay ?
            <EditReviewFormContainer 
              review={review} 
              product={product} 
              refreshList={refreshList}
              handleEditClick={this.handleEditClick}
            /> :
            <p className="review-body">{review.body}</p>
        }
        <br />
        {
          currentUser?.id === review.reviewerId ?
            <ReviewActions
              review={review}
              refreshList={refreshList}
              editDisplay={this.state.editDisplay} 
              handleEditClick={this.handleEditClick} 
              handleDelete={deleteReview}
            /> :
            <></>
        }
        <br />
        <br />
      </div>
    )
  }
};

export default ReviewListItem;