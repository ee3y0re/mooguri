import React from "react";

const ReviewButtons = ({ 
  review, refreshList, editDisplay, handleEditClick, handleDelete
}) => {
  const reviewId = review.id;
  return (
    // edit
    <div className="review-edit-delete-buttons">
      <button
        className="review-edit-button"
        id="submit-review"
        onClick={handleEditClick}
      >
        {
          editDisplay ? "Cancel" : "Edit"
        }
      </button>
      {/* delete */}
      <button
        className="dreview-delete-button"
        id="submit-review"
        onClick={()=> handleDelete(reviewId).then(refreshList)}
      >
        Delete
      </button>
    </div>
  )
}

export default ReviewButtons;