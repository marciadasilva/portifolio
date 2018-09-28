import React from "react";

import FacebookLogo from "./images/facebook-small.png";
import GithubLogo from "./images/github.png";
import CodepenLogo from "./images/codepen.png";
import TwitterLogo from "./images/twitter-small.png";
import LinkedinLogo from "./images/linkedin-small.png";
import ContactLogo from "./images/contact.png";

import Header from "../header/Header";
import Flower from "../../common/Flower";

import "./Contact.css";

const Contact = () => {
  return (
    <main>
      <Header />
      <section className="contact">
        <div className="contact__header">
          <Flower />
          <div className="contact__info">
            <h2 className="contact__title">Marcia da Silva</h2>
          </div>
        </div>
        <div className="contact__content">
          <a
            href="mailto:marcia.dasilva1410@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            title="marcia.dasilva1410@gmail.com"
            className="contact__item"
          >
            <img
              src={ContactLogo}
              alt="Contact logo"
              className="contact__img"
            />
            <span className="contact__text">marcia.dasilva1410@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/marcia-silva-068b4666/"
            rel="noopener noreferrer"
            target="_blank"
            title="https://www.linkedin.com/in/marcia-silva-068b4666/"
            className="contact__item"
          >
            <img
              src={LinkedinLogo}
              alt="Linkedin logo"
              className="contact__img"
            />
            <span className="contact__text">
              linkedin.com/in/marcia-silva-068b4666
            </span>
          </a>

          <a
            href="https://github.com/marciadasilva"
            rel="noopener noreferrer"
            target="_blank"
            title="https://github.com/marciadasilva"
            className="contact__item"
          >
            <img src={GithubLogo} alt="Github logo" className="contact__img" />
            <span className="contact__text">github.com/marciadasilva</span>
          </a>

          <a
            href="https://codepen.io/marciadasilva/"
            rel="noopener noreferrer"
            target="_blank"
            title="https://codepen.io/marciadasilva/"
            className="contact__item"
          >
            <img
              src={CodepenLogo}
              alt="Codepen logo"
              className="contact__img"
            />
            <span className="contact__text">codepen.io/marciadasilva</span>
          </a>

          <a
            href="https://twitter.com/mds_marcia"
            rel="noopener noreferrer"
            target="_blank"
            title="https://twitter.com/mds_marcia"
            className="contact__item"
          >
            <img
              src={TwitterLogo}
              alt="Twitter logo"
              className="contact__img"
            />
            <span className="contact__text">twitter.com/mds_marcia</span>
          </a>

          <a
            href="https://www.facebook.com/marciah.silvah"
            rel="noopener noreferrer"
            target="_blank"
            title="https://www.facebook.com/marciah.silvah"
            className="contact__item"
          >
            <img
              src={FacebookLogo}
              alt="Facebook logo"
              className="contact__img"
            />
            <span className="contact__text">facebook.com/marciah.silvah</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
