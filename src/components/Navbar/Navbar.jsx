import React from "react";
import "./styleNavbar.css";
import logo from "../../assets/images/logo.png";

import CrearReceta from "../../pages/CrearRecetas";

import { Link } from "react-router-dom";

export const Navbar = () => {
  return (

    <div className="containerNavbar">
      <div className="contentNavbar">
        <div className="containerLogoNavbar">
          <img src={logo} alt="logo" />
          <h1>El Rincón del Chef</h1>
        </div>
        <div className="containerLink">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>
          <Link to={"/favoritesRecipes"} style={{ textDecoration: "none" }}>
            <p>Recetas favoritas</p>
          </Link>
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <p>Sobre Nosotros</p>
          </Link>
        </div>
        <Link to={"/createRecipe"} style={{ textDecoration: "none" }}>
          <div className="containerCreateRecipe">
            <p>Crear Receta</p>
          </div>
        </Link>
{
  //  <div>
     // <div className="containerNavbar">
       // <img src={logo} alt="logo" />
       // <h1>Recetas</h1>
       // <Link to="/crear-receta">
       // <button className="crear-receta-btn">Crear Receta</button>
     // </Link> 

    //  </div>
 //   </div>
}
    </div>
  </div>
  );
};
