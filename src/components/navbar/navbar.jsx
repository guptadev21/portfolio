// NavBar.js
import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const NavBar = (props) => {
  const { active } = props;

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="nav-background">
          <ul className="nav-list">
            <li
              className={
                active === "experience" ? "nav-item active" : "nav-item"
              }
            >
              <Link to="/experience">Experience</Link>
            </li>
            <li
              className={active === "projects" ? "nav-item active" : "nav-item"}
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li
              className={active === "contact" ? "nav-item active" : "nav-item"}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
