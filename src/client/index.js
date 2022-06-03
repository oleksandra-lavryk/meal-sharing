import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/Header/headerStyle.css";
import "./components/Footer/footerStyle.css";
import "./components/MainPage/mainPageStyle.css";
import "./components/MealsPage/mealsPageStyle.css";
import "./components/MealPage/mealPageStyle.css";
import "./components/PageNotFound/pageNotFoudStyle.css";
import "./components/AddMealPage/addMealStyle.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
