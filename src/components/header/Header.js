import React from "react";
import { Link } from "react-router-dom";

import FacebookLogo from "./images/facebook.png";
import InstagramLogo from "./images/instagram.png";
import TwitterLogo from "./images/twitter.png";
import CodepenLogo from "./images/codepen.png";
import GithubLogo from "./images/github.png";
import LinkedinLogo from "./images/linkedin.png";

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
            <Link to="/playground">Playground</Link>
          </li>
          <li className="header__item">
            <Link to="/">Contact</Link>
          </li>
          <li className="header__item">
            <Link to="/">About</Link>
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
          <a href="https://codepen.io/marciadasilva/" className="header__icon">
            <img src={CodepenLogo} alt="Codepen logo" />
          </a>
          <a href="https://github.com/marciadasilva" className="header__icon">
            <img src={GithubLogo} alt="Github logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/marcia-silva-068b4666/"
            className="header__icon"
          >
            <img src={LinkedinLogo} alt="Linkedin logo" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
