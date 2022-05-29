import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MealsContext } from "./MealsProvider";

export function MealsList() {
  const { meals } = useContext(MealsContext);
  return (
    <>
      <ul className="main-page-meals-list">
        {meals.map((meal) => (
          <li key={meal.id}>
            <span>{meal.title}</span>
          </li>
        ))}
      </ul>
      <Link className="see-more-link" to="/meals">
        Read more
      </Link>
    </>
  );
}
