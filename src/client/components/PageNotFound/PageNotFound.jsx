import React from "react";
import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="page-not-found">
      <h2>Page Not Found</h2>
      <Link to="/">Back to the main page</Link>
    </div>
  );
}
