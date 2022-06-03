import React from "react";
import useSWR from "swr";
import { createContext } from "react";

export const MealsContext = createContext([]);

const fetcher = (url) => fetch(url).then((result) => result.json());

const getTodayDate = () => {
  let today = new Date();
  today = today.toISOString();
  today = today.split("T")[0];
  return today;
};

export function MealsContextProvider({ children }) {
  const { data, error } = useSWR("/api/meals", fetcher);
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  return (
    <MealsContext.Provider value={{ meals: data, getTodayDate: getTodayDate }}>
      {children}
    </MealsContext.Provider>
  );
}
