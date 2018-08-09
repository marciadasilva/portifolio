import React from "react";
import { Link } from "react-router-dom";

import FacebookLogo from "./images/facebook.png";
import InstagramLogo from "./images/instagram.png";
import TwitterLogo from "./images/twitter.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <Link to="/">{"<Marcia />"}</Link>
        </div>
        <ul className="header__items">
          <li className="header__item">
            <Link to="/">Home</Link>
          </li>
          <li className="header__item">
            <Link to="/recent-works">Recent Works</Link>
          </li>
          <li className="header__item">
            <Link to="/">Playground</Link>
          </li>
          <li className="header__item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="header__item">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="header__icons">
          <a
            href="https://www.facebook.com/marciah.silvah"
            className="header__icon"
          >
            <img src={FacebookLogo} alt="Facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/marcia.dasilva1410/"
            className="header__icon"
          >
            <img src={InstagramLogo} alt="Instagram logo" />
          </a>
          <a href="https://twitter.com/mds_marcia" className="header__icon">
            <img src={TwitterLogo} alt="Twitter logo" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
