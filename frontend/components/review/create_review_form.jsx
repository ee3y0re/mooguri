// REVIEW FORM
import React from "react";

class CreateReviewForm extends React.Component {
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
    this.setState({ body : "" });
    this.props.createReview(newReview).then(this.props.refreshList);
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
            <label className="product-info-head">Help others by sharing your feedback</label>
            <br />
            <p className="review-suggestions">What do you like about this? Did it ship on time? Describe your experience with this shop</p>
            <textarea 
              className="review-textarea"
              type="text" 
              value={this.state.body}
              onChange={this.updateField("body")}
            />

            {this.renderErrors()}

            <div>
              <input 
                type="submit" 
                className="dark-button" 
                id="create-review" 
                value="Post Your Review"
              />
            </div>
            <br />
          </form>       
      </div>
    )
  }
}

export default CreateReviewForm;
