export const fetchReviews = () => {
  return $.ajax({
    url: "/api/reviews",
    method: "GET"
  });
}
//test api util by adding these functions to window and passing in specificed argument
export const fetchReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "GET"
  });
}
export const createReview = (review) => {
  return $.ajax({
    url: "/api/reviews",
    method: "POST",
    data: { review }
  });
}
export const updateReview = (review) => {
  return $.ajax({
    url: `/api/reviews/${review.id}`,
    method: "PATCH",
    data: { review }
  });
}

export const deleteReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE"
  });
}