import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ activeSection, smoothScrollToSection }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => smoothScrollToSection('about-me')}
            className={activeSection === 'about-me' ? 'active' : ''}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => smoothScrollToSection('experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => smoothScrollToSection('projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={() => smoothScrollToSection('contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
