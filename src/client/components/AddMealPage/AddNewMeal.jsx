import React from "react";
import { useContext, useState } from "react";
import { MealsContext } from "../MealsContextProvider";

export function AddNewMeal() {
  const { getTodayDate } = useContext(MealsContext);
  const [fetchError, setFetchError] = useState("");
  const [whenDate, setWhenDate] = useState(getTodayDate());

  function addNewMeal(e) {
    e.preventDefault();
    fetch("api/meals", {
      method: "POST",
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
        location: e.target.location.value,
        when_time: whenDate,
        max_reservations: e.target.max_resrvations.value,
        price: e.target.price.value,
        created_date: getTodayDate(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.ok
        ? alert("Meal added!")
        : setFetchError("Something went wrong. Try again later.");
    });
  }
  function whenDateHandler(e) {
    setWhenDate(e.target.value);
  }
  return (
    <>
      <h2>Add new Meal</h2>
      <form className="add-new-meal" onSubmit={addNewMeal}>
        <input
          type="text"
          name="title"
          required
          placeholder="Enter meal title"
        />
        <input
          type="text"
          name="location"
          required
          placeholder="Enter meal location"
        />
        <input
          type="date"
          min={getTodayDate()}
          name="when_time"
          value={whenDate}
          onChange={whenDateHandler}
          required
        />
        <input
          type="number"
          name="max_resrvations"
          min="1"
          required
          placeholder="Enter max reservation amount"
        />
        <input
          type="number"
          name="price"
          min="0.00"
          step="0.01"
          required
          placeholder="Enter price"
        />
        <textarea
          rows={3}
          name="description"
          placeholder="Enter meal description"
        />
        <button type="submit">Save</button>
      </form>
      <div>{fetchError}</div>
    </>
  );
}
