// REVIEW FORM
import React from "react";

class EditReviewFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.review.id,
      reviewer_id: this.props.currentUser.id,
      username: this.props.currentUser.username,
      product_id: this.props.product.id,
      body: this.props.review.body,
      initialReviewBody: this.props.review.body
    };
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(e) {
    e.preventDefault();
    const updatedReview = Object.assign({}, this.state);
    this.props.updateReview(updatedReview)
    .then(this.props.refreshList)
    .then(this.props.handleEditClick)
  }

  updateField(field) {
    return (e) => { this.setState({ [field]: e.target.value }) }
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
        <form className="review-box" onSubmit={this.handleUpdate}>
          {/* <label className="product-info-head">Help others by sharing your feedback</label>
          <br />
          <p className="review-suggestions">What do you like about this? Did it ship on time? Describe your experience with this shop</p> */}
          <textarea
            className="review-textarea"
            type="text"
            value={this.state.body}
            onChange={this.updateField("body")}
          />
          {this.renderErrors()}
          <br />
          <div className="review-submit-buttons">
            {
              this.state.initialReviewBody === this.state.body?
              <input
                type="submit"
                id="save-review"
                value="Save"
                disabled
              /> :
              <input 
                type="submit" 
                id="save-review"
                value="Save" 
              />
            }
          </div>
          <br />
        </form>
      </div>
    )
  }
}

export default EditReviewFormContainer;
