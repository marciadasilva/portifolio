import React from "react";

import Header from "../header/Header";
import TiagoImage from "./images/tiago.png";
import TiagoImageMob from "./images/tiagomob.png";
import Delicada from "./images/delicada.png";
import DelicadaMob from "./images/delicadamob.png";

import "./Works.css";

const Works = () => (
  <main>
    <Header />
    <section className="work">
      <h1 className="work__title">Recent Works</h1>
      <div className="work__showcase">
        <img className="work__showcase-img" alt="desktop" src={TiagoImage} />
        <img
          className="work__showcase-imgmob"
          alt="mobile"
          src={TiagoImageMob}
        />
        <div className="work__showcase-text">
          <h2>Tiago Pimentel</h2>
          <p>
            Website developed to show the work of the coach Tiago Pimentel. He
            teaches martial arts such as Muai thay/ Boxing and Brazilian
            Jiu-Jitsu.
          </p>
          <p>
            This work was developed using the follow technologies: Javascript,
            css3, sass, React, Redux, webpack, firebase
          </p>
          <a
            rel="noopener noreferrer"
            className="work__showcase-btn"
            href="http://tiago-pimentel.firebaseapp.com"
            target="_blank"
            title="visite website"
          >
            Visite website
          </a>
        </div>
      </div>

      <div className="work__showcase">
        <img className="work__showcase-img" alt="desktop" src={Delicada} />
        <img className="work__showcase-imgmob" alt="mobile" src={DelicadaMob} />
        <div className="work__showcase-text">
          <h2>Delicada Mulher Moda Feminina</h2>
          <p>Website developed to expose the shops vestuary.</p>
          <p>
            This work was developed using the follow technologies: Javascript,
            css3, sass, React, Redux, webpack, firebase
          </p>
          <a
            rel="noopener noreferrer"
            className="work__showcase-btn"
            href="https://delicada-mulher.firebaseapp.com/"
            target="_blank"
            title="visite website"
          >
            Visite website
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Works;
