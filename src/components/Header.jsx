import React, { useEffect } from "react";
import "../styles/Header.scss";

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
            <a href="" target="_blank">
              <h3>Resume</h3>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
