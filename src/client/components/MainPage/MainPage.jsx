import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MealsContext } from "../MealsContextProvider";

export function MainPage() {
  const { meals } = useContext(MealsContext);
  return (
    <>
      <div className="main-page-banner">
        <div className="banner-item-with-img">
          <img
            src="src/client/assets/images/main1.png"
            alt="salmon dish image"
          />
        </div>
        <div className="banner-item">
          <img src="src/client/assets/images/main-fork.png" alt="fork icon" />
          <ul className="main-page-meals-list">
            {meals.slice(0, 5).map((meal) => (
              <li key={meal.id}>
                <Link to={`meals/${meal.id}`}> {meal.title}</Link>
              </li>
            ))}
          </ul>
          <Link className="see-more-link" to="/meals">
            More
          </Link>
        </div>
        <div className="banner-item-with-img">
          <img src="src/client/assets/images/main2.jpg" alt="tartilia image" />
        </div>
        <div className="banner-item">
          <img src="src/client/assets/images/apple.png" alt="apple icon" />
          <span className="banner-icon-text">fresh</span>
        </div>
        <div className="banner-item-with-img">
          <img
            src="src/client/assets/images/main3.png"
            alt="green salad image"
          />
        </div>
        <div className="banner-item">
          <img src="src/client/assets/images/drinks.png" alt="drinks icon" />
          <span className="banner-icon-text">tasty</span>
        </div>
      </div>
    </>
  );
}
