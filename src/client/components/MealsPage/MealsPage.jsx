import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { SearchMeals } from "./SearchMeals";
import { MealsList } from "./MealsList";
import { MealsContext } from "../MealsContextProvider";

export function MealsPage() {
  const { meals } = useContext(MealsContext);
  const [error, setError] = useState("");
  const [searchedMeals, setSearchedMeals] = useState([]);
  const [mealTitle, setMealTitle] = useState("");

  useEffect(() => {
    setError("");
    fetch(`http://localhost:5000/api/meals?title=${mealTitle}`)
      .then((resonse) => {
        if (resonse.ok) {
          return resonse.json();
        } else if (resonse.status === 404) {
          setError("No meals found...");
        } else {
          throw Error("An error has occurred.");
        }
      })
      .then((result) => setSearchedMeals(result))
      .catch((error) => {
        setSearchedMeals([]);
        setError(error.message);
      });
  }, [mealTitle]);

  function handleSearchOnChange(e) {
    setMealTitle(e.target.value);
  }
  return (
    <>
      <SearchMeals handleSearchOnChange={handleSearchOnChange} />

      {error ? (
        <div>{error}</div>
      ) : searchedMeals ? (
        <MealsList meals={searchedMeals} />
      ) : (
        <MealsList meals={meals} />
      )}
    </>
  );
}
