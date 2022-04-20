import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      reviewerId: "",// currentUser.id,
      reviewerUsernane: "",// currentUser.username,
      productId: "",// product.id
    }
  }


  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    // console.log("review form props, current user", this.props.currentUser.id)
    console.log("state", this.state)
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>My review</h2>
          {/* adding name attribute to rating prevents multiple from being selected */}
          <input name="rating" type="radio" id="rating-5" value='5' onClick={this.update("rating")}/>
          <label for="rating-5">5</label>
          <input name="rating" type="radio" id="rating-4" value='4' onClick={this.update("rating")}/>
          <label for="rating-4">4</label>
          <input name="rating" type="radio" id="rating-3" value='3' onClick={this.update("rating")}/>
          <label for="rating-3">3</label>
          <input name="rating" type="radio" id="rating-2" value='2' onClick={this.update("rating")}/>
          <label for="rating-2">2</label>
          <input name="rating" type="radio" id="rating-1" value='1' onClick={this.update("rating")}/>
          <label for="rating-1">1</label>
        </form>
      </div>
    )
  }
}

export default ReviewForm;
