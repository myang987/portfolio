import React, { useEffect } from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="nav-wrapper active" id="nav-wrapper">
      <nav className="navbar" id="navbar-inner">
        <ul className="menu">
          <li className="menu-item" id="work-menu-item">
            <Link to="/about">
              <h3>About</h3>
            </Link>
          </li>
          <li className="menu-item" id="play-menu-item">
            <Link to="/projects">
              <h3>Projects</h3>
            </Link>
          </li>
          <li className="menu-item" id="about-menu-item">
            <Link to="/photography">
              <h3>Photography</h3>
            </Link>
          </li>

          <li className="menu-item">
            <Link to="/">
              <h3>Resume</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
