import React from "react";

class ReviewList extends React.Component {

  render(){
    // console.log(this.props)
    return (
      <ul>
        {
          this.props.listReviews?.map((reviewObj, i) => {
            return (
              <li key={i}>
                <h2></h2>
                <p>{reviewObj.reviewerId} says, "{reviewObj.body}"</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default ReviewList;