import React from "react";
import ReviewList from "./review_list";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      body: "",
      // TODO: REMOVE HARD CODE; delete these line because you need to fix opening the modal to log in when trying to write a comment
      reviewer_id: 1,
      // TODO: REMOVE HARD CODE; delete this line because it needs to be dynamic for all products
      product_id: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // TODO: do we really need to name it handleSubmit?
  handleSubmit(e){
    // debugger
    e.preventDefault();
    this.props.submitAction(this.state).then()
  }

  updateField(field){
    return (e) => { this.setState( {[ field]: e.target.value } )}
  }

  render() {

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* TODO: Review stars */}
            <label id="review-body">Help others by sharing your feedback</label>
            <p>What do you like about this? Did it ship on time? Describe your experience with this shop</p>
            <textarea 
              id="review-body" 
              type="text" 
              value={this.state.body}
              onChange={this.updateField("body")}/>

            <input type="submit" value="Post Your Review"/>
          </form>       
        </div>

      </div>


    )
  }
}

export default ReviewForm;