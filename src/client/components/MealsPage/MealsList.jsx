import React from "react";
import { Link } from "react-router-dom";
import PriceIcon from "../../assets/images/price.svg";
import LocationIcon from "../../assets/images/location.svg";

export function MealsList(props) {
  return (
    <ul className="meals-cards-list">
      {props.meals.map((meal) => (
        <li className="meal-card" key={meal.id}>
          <Link to={`/meals/${meal.id}`} className="meal-card-title">
            {meal.title}
          </Link>
          <div className="meal-card-info">
            <img
              className="meal-card-icon"
              src={LocationIcon}
              alt="location icon"
            />
            {meal.location}
          </div>
          <div className="meal-card-info">
            <img className="meal-card-icon" src={PriceIcon} alt="price icon" />
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
