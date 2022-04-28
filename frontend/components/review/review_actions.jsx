import React from "react";

const ReviewActions = ({ handleEditClick }) => {
  return (
    // edit
    <div className="review-edit-delete-buttons">
      <button
        className="dark-button"
        id="submit-review"
        onClick={handleEditClick}
      >
        Edit
      </button>
      {/* delete */}
      <button
        className="dark-button"
        id="submit-review"
        onClick={() => console.log("work on delete review")}
      >
        Delete
      </button>
    </div>
  )
}

export default ReviewActions;