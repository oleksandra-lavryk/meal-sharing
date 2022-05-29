import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MealsPage } from "./components/MealsPage";
import { MealsList } from "./components/MealsList";
import { Meal } from "./components/Meal";
import { MealsProvider } from "./components/MealsProvider";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <MealsProvider>
          <Route exact path="/">
            <MealsList />
          </Route>
          <Route exact path="/meals">
            <MealsPage />
          </Route>
        </MealsProvider>
        <Route exact path="/meals/:id">
          <Meal />
        </Route>

        <Route path="*" element={<p>Not found</p>} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
