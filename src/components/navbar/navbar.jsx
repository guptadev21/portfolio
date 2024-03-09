import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <NavLink
          to="/about-me"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <li>About Me</li>
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <li>Experience</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <li>Projects</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "activeLink" : "")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
