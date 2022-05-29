import React from "react";
import { createContext, useEffect, useState } from "react";

export const MealsContext = createContext([]);

async function fetchMeals() {
  const response = await fetch("http://localhost:5000/api/meals");
  const data = await response.json();
  return data;
}

export function MealsProvider({ children }) {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetchMeals()
      .then((data) => {
        setMeals(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <MealsContext.Provider value={{ meals: meals }}>
      {children}
    </MealsContext.Provider>
  );
}
