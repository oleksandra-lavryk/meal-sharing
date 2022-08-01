import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { MealsPage } from "./components/MealsPage/MealsPage";
import { MainPage } from "./components/MainPage/MainPage";
import { Meal } from "./components/MealPage/Meal";
import { AddNewMeal } from "./components/AddMealPage/AddNewMeal";
import { MealsContextProvider } from "./components/MealsContextProvider";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { AboutPage } from "./components/About/AboutPage";
import { ContactsPage } from "./components/ContactsPage/ContactsPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <MealsContextProvider>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/meals">
              <MealsPage />
            </Route>
            <Route exact path="/meals/:id">
              <Meal />
            </Route>
            <Route exact path="/add-meal">
              <AddNewMeal />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/contacts">
              <ContactsPage />
            </Route>
            <Route component={PageNotFound} />
          </Switch>
        </MealsContextProvider>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
