import React from "react";

import Header from "../header/Header";
import Card from "./Card";

import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="home">
        <div className="home__content">
          <div className="home__text">
            <div>
              <span className="animated">Hi!</span>{" "}
              <span className="animated">I'm</span>{" "}
              <span className="change-color">Marcia</span>
            </div>
            <div>
              <span className="animated">Full</span>{" "}
              <span className="animated"> stack</span>{" "}
              <span className="animated"> web</span>{" "}
              <span className="animated"> development</span>
            </div>
            <div>
              <span className="animated">Working</span>{" "}
              <span className="animated">at</span>{" "}
              <a
                className="animated"
                href="https://www.unijui.edu.br/"
                target="_blank"
                title="Unijuí"
                rel="noopener noreferrer"
              >
                {" "}
                Unijuí
              </a>
            </div>
            <div>
              <span className="animated">and</span>{" "}
              <span className="animated">web</span>{" "}
              <span className="animated">Freelancer</span>{" "}
            </div>
          </div>
          <div className="home__profile">
            <Card />
          </div>
        </div>
      </section>
      <Header />
    </main>
  );
};

export default Home;
