import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      body: "",
      // TODO: delete this line because you need to fix opening the modal to log in when trying to write a comment
      reviewer_id: 1,
      // reviewer_id: this.props.linkedReviewer,
      product_id: this.props.linkedProductId
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // TODO: do we really need to name it handleSubmit?
  handleSubmit(e){
    // debugger
    e.preventDefault()
    this.props.submitAction(this.state)
  }

  updateField(field){
    return (e) => { this.setState( {[ field]: e.target.value } )}
  }

  render() {

    return (
      <div>
        {/*  
        -we want to map all current reviews into a list
        -one day, get username from reviewer_id
        */}
        <ul>
          {
            this.props.currentReviews.map((reviewObj, i) => {
              return (
                <li key={i}>
                  <h2></h2>
                  <p>{reviewObj.reviewerId} says, "{reviewObj.body}"</p>
                </li>                
              )
            })
          }
        </ul>

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