import React from "react";
import notFound from "../assets/images/404.jpg";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <Link to="/"><img src={notFound} alt="404" /></Link>
    </div>
  );
};
