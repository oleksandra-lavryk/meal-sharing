import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AddReservationForm } from "./AddReservationForm";

async function fetchMeal(id) {
  const response = await fetch(`http://localhost:5000/api/meals/${id}`);
  const data = await response.json();
  return data;
}

export function Meal() {
  const [meal, setMeal] = useState({});
  const params = useParams();

  useEffect(() => {
    fetchMeal(params.id)
      .then((data) => {
        setMeal(data[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h2>{meal.title}</h2>
      <div>{meal.description}</div>
      <div>{meal.location}</div>
      <div>{meal.price}</div>
      <div> Available to reserve: {meal.available_reservation}</div>
      {meal.available_reservation > 0 ? (
        <AddReservationForm meal={meal} />
      ) : (
        <p>Oops...all are reserved &#128546; </p>
      )}
      <Link to={`/meals`}>Back</Link>
    </>
  );
}
