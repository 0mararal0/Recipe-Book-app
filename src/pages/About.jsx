import React from "react";
import "./styleAbout.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="about-container">
      <div className="display">
      <header className="about-header">
        <h1>Sobre nosotros</h1>
      </header>
      <section className="about-content">
        <h2>Nuestra Historia</h2>
        <p>
          Bienvenido a <strong>El rincón del chef</strong>, tu página
          favorita de recetas caseras. Desde nuestro inicio en 2024, nos hemos
          dedicado a compartir la pasión por la buena comida.
        </p>
        <p>
          Fundada por tres entusiastas de la cocina tradicional, nuestro
          objetivo es no solo ofrecer recetas espectaculares, sino también
          hacerlo en un formato visualmente atractivo. Creemos que cocinar debe
          ser una experiencia divertida, y qué es más divertido que diseñar tu
          propia página de recetas.
        </p>
        <h2>¿Quiénes somos?</h2>
        <ul>
          <li>
            <strong>Sofía:</strong> Experta en diseño de usuario, puedes
            encontrar su trabajo{" "}
            <a href="https://github.com/somorales/" className="links" target="_blank">aquí</a>
          </li>
          <li>
            <strong>Alberto:</strong> Especialista en JavaScript y desarrollo web, si
            quieres ver su trabajo pulsa{" "}
            <a href="https://github.com/0mararal0" className="links" target="_blank">aquí</a>
          </li>
          <li>
            <strong>Emma:</strong> Entusiasta de la comida, repositorio git:{" "}
            <a href="https://github.com/emxgrz" className="links" target="_blank">pincha aquí</a>
          </li>
        </ul>
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 El rincón del chef. Todos los derechos reservados.</p>
      </footer>
      </div>
    </div>
  );
};
