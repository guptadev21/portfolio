// import React from "react";
// import "./navbar.css";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <ul>
//         <NavLink
//           to="/about-me"
//           className={({ isActive }) => (isActive ? "activeLink" : "")}
//         >
//           <li>About Me</li>
//         </NavLink>
//         <NavLink
//           to="/experience"
//           className={({ isActive }) => (isActive ? "activeLink" : "")}
//         >
//           <li>Experience</li>
//         </NavLink>
//         <NavLink
//           to="/projects"
//           className={({ isActive }) => (isActive ? "activeLink" : "")}
//         >
//           <li>Projects</li>
//         </NavLink>
//         <NavLink
//           to="/contact"
//           className={({ isActive }) => (isActive ? "activeLink" : "")}
//         >
//           <li>Contact</li>
//         </NavLink>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;


import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ activeSection }) => {
  return (
    <div className="navbar">
      <ul>
        <NavLink
          to="/about-me"
          className={activeSection === "about-me" ? "activeLink" : ""}
        >
          <li>About Me</li>
        </NavLink>
        <NavLink
          to="/experience"
          className={activeSection === "experience" ? "activeLink" : ""}
        >
          <li>Experience</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={activeSection === "projects" ? "activeLink" : ""}
        >
          <li>Projects</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={activeSection === "contact" ? "activeLink" : ""}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
