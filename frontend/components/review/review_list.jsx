// import React from "react";

// class ReviewList extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);
//   }

//   componentDidMount(){
//     this.props.fetchReviews();
//   }

//   render(){
//     if (!this.props) { return null }

//     const { product, reviews } = this.props;
//     const targetReviewIds = product?.selectedReviews;
//     const reviewsArray = Object.values(reviews)
//     const acquiredReviews = reviewsArray.filter(reviewObj => targetReviewIds?.includes(reviewObj.id));
//     console.log(acquiredReviews[0])
//     return (
//       <ul>
//         {
//           acquiredReviews?.map((one_review, i) => {
//             return (
//               <li key={i}>
//                 <h1>{one_review.reviewerId}</h1>
//                 <p>{one_review.body}</p>
//                 <br />
//               </li>
//             )
//           })
//         }
//       </ul>
//     )
//   }
// }

// // export default ReviewList;

// //TODO: decided if this is needed
// import { connect } from "react-redux";
// import { fetchReviews } from "../../actions/review_actions";
// // import ReviewList from "./review_list";

// const mstp = (state) => {
//   return {
//     reviews: state.entities.reviews
//   }
// }

// const mdtp = (dispatch) => {
//   return {
//     fetchReviews: () => dispatch(fetchReviews())
//   }
// }

// export default connect(mstp, mdtp)(ReviewList);