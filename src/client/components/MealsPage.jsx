import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PriceIcon from "../assets/images/price.svg";
import LocationIcon from "../assets/images/location.svg";

import { MealsContext } from "./MealsProvider";

export function MealsPage() {
  const { meals } = useContext(MealsContext);
  return (
    <>
      <h2>All Meals</h2>
      <ul className="meals-cards-list">
        {meals.map((meal) => (
          <li className="meal-card" key={meal.id}>
            <h3>{meal.title}</h3>
            <div className="meal-card-info">
              <img
                className="meal-card-icon"
                src={LocationIcon}
                alt="location icon"
              />
              {meal.location}
            </div>
            <div className="meal-card-info">
              <img
                className="meal-card-icon"
                src={PriceIcon}
                alt="price icon"
              />
              {meal.price}
            </div>
            <Link to={`/meals/${meal.id}`} className="meal-card-button">
              Reserve
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
