import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              HOME
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">Mike Yang © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link linkedin"
              to=""
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              class="social-icon-link github"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
