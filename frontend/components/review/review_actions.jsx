import React from "react";

const ReviewActions = ({ 
  review, refreshList, editDisplay, handleEditClick, handleDelete
}) => {
  const reviewId = review.id;
  return (
    // edit
    <div className="review-edit-delete-buttons">
      <button
        className="dark-button"
        id="submit-review"
        onClick={handleEditClick}
      >
        {
          editDisplay ? "Cancel" : "Edit"
        }
      </button>
      {/* delete */}
      <button
        className="dark-button"
        id="submit-review"
        onClick={()=> handleDelete(reviewId).then(refreshList)}
      >
        Delete
      </button>
    </div>
  )
}

export default ReviewActions;