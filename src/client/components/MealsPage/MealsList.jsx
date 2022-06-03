import React from "react";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
import { GiTwoCoins } from "react-icons/gi";

export function MealsList(props) {
  return (
    <ul className="meals-cards-list">
      {props.meals.map((meal) => (
        <li className="meal-card" key={meal.id}>
          <Link to={`/meals/${meal.id}`} className="meal-card-title">
            {meal.title}
          </Link>
          <div className="meal-card-info">
            <GoLocation />
            {meal.location}
          </div>
          <div className="meal-card-info">
            <GiTwoCoins />
            <strong>{meal.price}</strong>
          </div>
          <Link to={`/meals/${meal.id}`} className="meal-card-button">
            Book
          </Link>
        </li>
      ))}
    </ul>
  );
}
