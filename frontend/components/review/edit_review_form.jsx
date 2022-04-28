import React from "react";

class EditReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review : this.props.review //need review from props
    }
  }

  render(){
    return (
      <div>From the review edit</div>
    )
  }
}

export default EditReviewForm