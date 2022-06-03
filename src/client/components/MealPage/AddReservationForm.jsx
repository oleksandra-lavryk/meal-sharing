import React from "react";
import { useState, useContext } from "react";
import { MealsContext } from "../MealsContextProvider";

export function AddReservationForm(props) {
  const [reserved, setReserved] = useState(false);
  const [fetchError, setFetchError] = useState("");
  const { getTodayDate } = useContext(MealsContext);

  function makeReservation(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/reservations", {
      method: "POST",
      body: JSON.stringify({
        number_of_guests: e.target.number_of_guests.value,
        created_date: getTodayDate(),
        contact_phonenumber: e.target.phonenumber.value,
        contact_name: e.target.name.value,
        contact_email: e.target.email.value,
        meal_id: e.target.meal_id.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      if (result.ok) {
        setReserved(true);
        alert("Meal successfully reserved");
        props.refreshMeal();
      } else {
        setFetchError("Something went wrong. Try again later.");
      }
    });
  }
  return reserved ? (
    <>
      <p>Successfully reserved &#9989; </p>
      <p>{fetchError}</p>
    </>
  ) : (
    <form className="reservation-form" onSubmit={makeReservation}>
      <input
        name="number_of_guests"
        type="number"
        placeholder="Enter number og guests"
        min="1"
        max={props.meal.available_reservation}
        required
      />
      <input type="text" placeholder="Enter name" name="name" required />
      <input
        type="text"
        placeholder="Enter phonenumber"
        name="phonenumber"
        required
      />
      <input type="text" placeholder="Enter email" name="email" required />
      <input type="hidden" name="meal_id" value={props.meal.id} />
      <button type="submit">Reserve</button>
    </form>
  );
}
