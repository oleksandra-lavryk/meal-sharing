import React from "react";
import { useState, useContext } from "react";
import { MealsContext } from "../MealsContextProvider";
import { FiPlusSquare } from "react-icons/fi";

export function AddReview(props) {
  const { getTodayDate } = useContext(MealsContext);
  const [fetchError, setFetchError] = useState("");
  const [isActive, setIsActive] = useState(false);

  function toggleAddForm() {
    setIsActive(!isActive);
  }
  function addReview(e) {
    e.preventDefault();
    fetch("api/reviews", {
      method: "POST",
      body: JSON.stringify({
        title: e.target.name.value,
        description: e.target.description.value,
        created_date: getTodayDate(),
        stars: e.target.stars.value,
        meal_id: props.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      if (result.ok) {
        setIsActive(false);
        alert("Review successfully reserved");
        props.refreshReviews();
      } else {
        setFetchError("Something went wrong. Try again later.");
      }
    });
  }
  return (
    <>
      <div className="add-review-container" onClick={toggleAddForm}>
        <FiPlusSquare />
        <p>Add review</p>
      </div>
      {isActive ? (
        <>
          <p>{fetchError}</p>

          <form className="" onSubmit={addReview}>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <select name="stars" required>
              <option value="5">5 stars</option>
              <option value="4">4 stars</option>
              <option value="3">3 stars</option>
              <option value="2">2 stars</option>
              <option value="1">1 star</option>
            </select>
            <textarea
              name="description"
              rows="5"
              placeholder="Enter review"
              required
            ></textarea>
            <button type="submit">Add review</button>
          </form>
        </>
      ) : (
        ""
      )}
    </>
  );
}
