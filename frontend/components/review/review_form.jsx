import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    console.log(this.state)
    //submit needs binding
  }
  // TODO: do we really need to name it handleSubmit?
  handleMagicalStuff(){}

  updateMagic(){}

  render () {
    return (
      <div>
        <h1>Testing to see if render component connects</h1> 
        <form onSubmit={this.handleMagicalStuff}>
          {/* TODO: Review stars */}
          <h2>{this.props.formType}</h2>
          <label id="review-body">Help others by sharing your feedback</label>
          <p>What do you like about this? Did it ship on time? Describe your experience with this shop</p>
          <textarea 
            id="review-body" 
            type="text" 
            onChange={this.updateMagic("body")}/>

          <input type="submit" value={this.props.formType}/>
        </form>       
      </div>

    )
  }
}

export default ReviewForm;