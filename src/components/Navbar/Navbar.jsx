import React from "react";
import "./styleNavbar.css";
import logo from "../../assets/images/logo.png";

export const Navbar = () => {
  return (
    <div>
      <div className="containerNavbar">
        <img src={logo} alt="logo" />
        <h1>Recetas</h1>
      </div>
    </div>
  );
};
