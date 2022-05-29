import React from "react";
import { useState } from "react";

export function AddReservationForm(props) {
  const [reserved, setReserved] = useState(false);
  const [fetchError, setFetchError] = useState("");
  function makeReservation(e) {
    e.preventDefault();
    fetch("http://localhost:5000/api/reservations", {
      method: "POST",
      body: JSON.stringify({
        number_of_guests: e.target.number_of_guests.value,
        created_date: "2022-05-29 ",
        contact_phonenumber: e.target.phonenumber.value,
        contact_name: e.target.name.value,
        contact_email: e.target.email.value,
        meal_id: e.target.meal_id.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.ok
        ? setReserved(true)
        : setFetchError("Something went wrong. Try again later.");
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
      <button type="submit">Make resrvation</button>
    </form>
  );
}
