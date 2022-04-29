import React from "react";

const ReviewButtons = ({ 
  review, refreshList, editDisplay, handleEditClick, handleDelete
}) => {
  const reviewId = review.id;
  return (
    // edit
    <div className="review-submit-buttons">
      <div className="review-edit-delete-flexbox">
        <button
          id="review-edit-button"
          onClick={handleEditClick}
        >
          {
            editDisplay ? "Cancel" : "Edit"
          }
        </button>
        {/* delete */}
        <button
          id="review-delete-button"
          onClick={()=> handleDelete(reviewId).then(refreshList)}
        >
          Delete
        </button>
      </div>
        
    </div>
  )
}

export default ReviewButtons;