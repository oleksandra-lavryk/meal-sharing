import React from "react";

export function SearchMeals(props) {
  return (
    <>
      <input
        className="search-input"
        type="text"
        placeholder="Search meal"
        onChange={props.handleSearchOnChange}
      />
    </>
  );
}
