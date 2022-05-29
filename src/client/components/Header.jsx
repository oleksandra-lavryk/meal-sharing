import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/images/logo.svg";

export function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo-icon" src={LogoIcon} alt="logo" />
        <h1>Meal sharing App</h1>
      </Link>
    </header>
  );
}
