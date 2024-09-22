import React from "react";
import "./styleNavbar.css";
import logo from "../../assets/images/logo.png";
import CrearReceta from "../../pages/CrearRecetas";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="containerNavbar">
        <img src={logo} alt="logo" />
        <h1>Recetas</h1>
        <Link to="/crear-receta">
        <button className="crear-receta-btn">Crear Receta</button>
      </Link> 
      </div>
    </div>
  );
};
