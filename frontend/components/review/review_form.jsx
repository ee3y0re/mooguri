import React from "react";
import { closeModal } from "../../actions/modal_actions";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewer_id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      product_id: this.props.product.id,
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    const newReview = Object.assign({}, this.state);
    this.props.submitAction(newReview).then(this.props.closeModal);
  }

  updateField(field){
    return (e) => { this.setState( { [field]: e.target.value } )}
  }

  renderErrors() {
    return (
      <ul className="errors">
        {
          this.props.errors?.map((error, idx) => {
            return (<li className="errors-li" key={`error-${idx}`}>{error}</li>)
          })
        }
      </ul>
    )
  }

  render() {
    if (!this.props) return null;
    return (
      <div className="review-container">
          <form className="review-box" onSubmit={this.handleSubmit}>
            <label id="review-body">Help others by sharing your feedback</label>
            <p>What do you like about this? Did it ship on time? Describe your experience with this shop</p>
            <textarea 
              id="review-body" 
              type="text" 
              value={this.state.body}
              onChange={this.updateField("body")}/>

              {this.renderErrors()}

            <input type="submit" value="Post Your Review"/>
          </form>       
      </div>
    )
  }
}

export default ReviewForm;
