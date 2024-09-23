import React from "react";
import "./styleFooter.css";
import redesSociales from "../../assets/images/re.png";

export const Footer = () => {
  return (
    <div className="containerFooter">
      <p>
        Aviso legal - Política de Privacidad - Política de Cookies - Terminos y
        Condiciones
      </p>
      <a href="https://github.com/0mararal0/Recipe-Book-app" target="_blank">
        👉 Nuestro repositorio 👈
      </a>
      <img src={redesSociales} alt="" />
    </div>
  );
};
