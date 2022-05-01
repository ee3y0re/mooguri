import React from "react";
import CreateReviewFormContainer from  "./create_review_form_container";
import ReviewListItemContainer from "./review_list_item_container"

class ReviewList extends React.Component {
  //function for formatting createdAt attribute of review
  
  dateFormatter(dateNum) {
    const monthsAbbrev = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthsAbbrev[new Date(dateNum).getMonth()];
    const date = new Date(dateNum).getDate();
    const year = new Date(dateNum).getFullYear();
    return month + " " + date + " " + year;
  }

  // dateSort(){
  //   const compareIdx = (a, b) => {
  //     if (a.dataset.date < b.dataset.date) {
  //       return -1;
  //     } else if (a.dataset.date > b.dataset.date) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   }
  //   let dates = document.querySelectorAll("[data-date]");
  //   let datesArr = Array.from(dates);
  //   let descendDates = datesArr.sort(compareIdx).reverse();
  //   descendDates.forEach((date) => {
  //     document.querySelector("#products-dot-reviews").appendChild(date);
  //   })
  // }

  // componentDidMount(){
  //   this.dateSort();
  // }

  render(){
    if (!this.props) { return null };
    const { 
      reviews, product, currentUser, refreshList
    } = this.props;

    return (
      <div className="review-list-box">
        <br />
        <div id="review-form-action">
          {
            this.props.currentUser ? 
              <CreateReviewFormContainer 
                product={product}
                refreshList={refreshList}
              /> :
              <span id="review-not-logged-in">
                Please sign in to leave a review.
              </span>
          }
        </div>
        <div className="review-row-box">
          <ul 
            id="products-dot-reviews"
            >
            {
              reviews?.map((review, idx) => {
                return (
                  <li 
                      className=
                        {
                          idx % 2 === 0 ? "review-row-box-gray" : "review-row-box-transparent"
                        }
                      key={review.id + ` - ${review.body} - ` + `${review.updatedAt}`}
                      data-date={review.createdAt}
                    >
                      <ReviewListItemContainer
                        // key={review.id + `${review.body}` + `${review.updatedAt}`}
                        review={review}
                        product={product}
                        dateFormatter={this.dateFormatter}
                        currentUser={currentUser}
                        refreshList={refreshList}
                      /> 
                    </li>
                )
              }).reverse()
            }
          </ul>
          <br />
        </div>
        <br />
      </div>
    )
  }
}

export default ReviewList;