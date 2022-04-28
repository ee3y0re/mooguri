import React from "react";
import ReviewActions from "./review_actions";
import EditReviewForm from "./edit_review_form";

const ReviewListItem = ({ 
  review, dateFormatter, currentUser, editDisplay, handleEditClick 
}) => {
  return (
    <div className="review-row">
      <h2 className="review-author">{review.username}</h2>
      <br />
      <h3>{dateFormatter(review.createdAt)} </h3>
      <br />
      {
        editDisplay ?
          <EditReviewForm review={review} /> :
          <p className="review-body">{review.body}</p>
      }
      <br />
      {
        currentUser?.id === review.reviewerId ?
          <ReviewActions edit={handleEditClick} /> :
          <></>
      }
      <br />
      <br />
    </div>
  )
};

export default ReviewListItem;