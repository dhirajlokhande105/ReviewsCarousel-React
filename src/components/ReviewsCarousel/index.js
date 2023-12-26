// Write your code here

import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewId: 0}

  previous = () => {
    const {reviewId} = this.state

    if (reviewId > 0) {
      this.setState(prevState => ({
        reviewId: prevState.reviewId - 1,
      }))
    }
  }

  next = () => {
    const {reviewId} = this.state
    const {reviewsList} = this.props
    if (reviewId < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewId: prevState.reviewId + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewId} = this.state
    const filteredReview = reviewsList[reviewId]
    const {imgUrl, username, companyName, description} = filteredReview

    return (
      <div className="main-container">
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <div className="reviews">
            <button
              type="button"
              onClick={this.previous}
              data-testid="leftArrow"
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <div className="each-review">
              <img src={imgUrl} alt={username} />
              <p className="name">{username}</p>
              <p className="description">{companyName}</p>
              <p className="description">{description}</p>
            </div>
            <button
              type="button"
              onClick={this.next}
              data-testid="rightArrow"
              className="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
