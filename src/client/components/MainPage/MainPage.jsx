import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { MealsContext } from "../MealsContextProvider";
import bannerImg1 from "../../assets/images/main1.png";
import bannerImg2 from "../../assets/images/main2.png";
import bannerImg3 from "../../assets/images/main3.png";
import bannerIco1 from "../../assets/images/main-fork.png";
import bannerIco2 from "../../assets/images/apple.png";
import bannerIco3 from "../../assets/images/drinks.png";

export function MainPage() {
  const { meals } = useContext(MealsContext);
  return (
    <>
      <div className="main-page-banner">
        <div className="banner-item-with-img">
          <img src={bannerImg1} alt="salmon dish image" />
        </div>
        <div className="banner-item">
          <img src={bannerIco1} alt="fork icon" />
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
          <img src={bannerImg2} alt="tartilia image" />
        </div>
        <div className="banner-item">
          <img src={bannerIco2} alt="apple icon" />
          <span className="banner-icon-text">fresh</span>
        </div>
        <div className="banner-item-with-img">
          <img src={bannerImg3} alt="green salad image" />
        </div>
        <div className="banner-item">
          <img src={bannerIco3} alt="drinks icon" />
          <span className="banner-icon-text">tasty</span>
        </div>
      </div>
    </>
  );
}
