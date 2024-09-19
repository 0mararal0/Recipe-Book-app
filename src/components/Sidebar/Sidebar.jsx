import React from "react";
import "./styleSidebar.css";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="containerSidebar">
      <Link to={"/"}>
        <h3>home</h3>
      </Link>
      <Link to={"/about"}>
        <h3>about</h3>
      </Link>
    </div>
  );
};
