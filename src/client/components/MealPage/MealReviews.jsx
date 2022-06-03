import React from "react";
import { useState, useEffect } from "react";
import { ReviewStar } from "./ReviewStar";
import { AddReview } from "./AddReview";

export function MealReviews(props) {
  const [error, setError] = useState("");
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  async function fetchReviews() {
    setIsLoading(true);
    fetch("http://localhost:5000/api/reviews")
      .then((resonse) => {
        if (resonse.ok) {
          return resonse.json();
        } else {
          throw Error("An error has occurred.");
        }
      })
      .then((result) => {
        setReviews(result.filter((item) => item.meal_id === props.id));
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  function sliceDate(date) {
    return date.split("T")[0];
  }

  function printStars(amount) {
    let starArray = [];
    for (let i = 0; i < amount; i++) {
      starArray.push(<ReviewStar key={i} />);
    }
    return starArray;
  }

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {reviews.length > 0 ? <h3 className="reviews-title">Reviews</h3> : ""}
          <ul className="reviews-list">
            {reviews.map((review) => (
              <li className="review-item" key={review.id}>
                <div className="review-title">
                  <span className="review-author">{review.title}</span>
                  <span className="review-date">
                    {sliceDate(review.created_date)}
                  </span>
                </div>
                <div className="review-stars">{printStars(review.stars)}</div>
                <div className="review-text">{review.description}</div>
              </li>
            ))}
          </ul>
          <AddReview id={props.id} refreshReviews={fetchReviews} />
        </>
      )}

      <div>{error}</div>
    </>
  );
}
