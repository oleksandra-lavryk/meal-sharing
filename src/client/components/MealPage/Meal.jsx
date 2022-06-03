import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AddReservationForm } from "./AddReservationForm";
import { MealReviews } from "./MealReviews";

async function fetchMeal(id) {
  const response = await fetch(`http://localhost:5000/api/meals/${id}`);
  const data = await response.json();
  return data;
}

export function Meal() {
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    setFetchedMeal();
  }, []);

  function setFetchedMeal() {
    setIsLoading(true);
    fetchMeal(params.id)
      .then((data) => {
        setMeal(data[0]);
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  }
  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="meal-container">
            <h2>{meal.title}</h2>
            <p>{meal.description}</p>
            <p>{meal.location}</p>
            <p>
              <strong>{meal.price}</strong>
            </p>
            <p>
              Available to reserve:
              <strong>{meal.available_reservation}</strong>
            </p>
          </div>

          {meal.available_reservation > 0 ? (
            <AddReservationForm meal={meal} refreshMeal={setFetchedMeal} />
          ) : (
            <p className="none-reservstion">
              Oops...all are reserved &#128546;{" "}
            </p>
          )}

          <MealReviews id={meal.id} />
        </>
      )}
    </>
  );
}
