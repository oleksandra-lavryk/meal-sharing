import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../../assets/images/logo.svg";

export function Header() {
  return (
    <header className="header">
      <div>
        <Link to="/">
          <img className="logo-icon" src={LogoIcon} alt="logo" />
        </Link>
        <span className="logo-text">Meal sharing</span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/meals">Meals</Link>
        <Link to="/add-meal">Add Meal</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </header>
  );
}
