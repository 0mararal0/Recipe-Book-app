import React from "react";
import "./styleAbout.css";

export const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Sobre nosotros</h1>
      </header>
      <section className="about-content">
        <h2>Nuestra Historia</h2>
        <p>
          Bienvenido a <strong>(nombre que pongamos)</strong>, tu página favorita para recetas caseras. Desde nuestro inicio en 2024, nos hemos dedicado a compartir la pasión por la buena comida.
        </p>
        <p>
          Fundada por tres entusiastas de la cocina tradicional, nuestro objetivo es no solo ofrecer recetas espectaculares, sino también hacerlo en un formato visualmente atractivo. Creemos que cocinar debe ser una experiencia divertida, y qué es más divertido que diseñar tu propia página de recetas.
        </p>
        <h2>¿Quiénes somos?</h2>
        <ul>
          <li><strong>Sofía:</strong> Experta en diseño de usuario, puedes encontrar su trabajo <a href="https://github.com/somorales/">aquí</a></li>
          <li><strong>Alberto:</strong> Experto en JavaScript y desarrollo web, si quieres ver su trabajo pulsa <a href="https://github.com/0mararal0">aquí</a></li>
          <li><strong>Emma:</strong> Entusiasta de la comida, repositorio git: <a href="https://github.com/emxgrz">pincha aquí</a></li>
        </ul>
        
      </section>
      <footer className="about-footer">
        <p>&copy; 2024 (Recetas). Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
