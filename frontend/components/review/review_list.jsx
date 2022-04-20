import React from "react";

const ReviewList = ({ reviews }) => {
  // console.log("review list passed props: ", reviews)
  // debugger
  if (!reviews) return null;
  return (
    <ul>
      {
        Object.values(reviews)?.map((rev, i) => {
          return (
            <li key={i}>
              <h1>{rev.reviewerUsername}</h1>
              <p>{rev.body}</p>
            </li>)
        })
      }
    </ul>
  )
}

export default ReviewList;
