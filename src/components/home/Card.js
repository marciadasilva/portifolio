import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-items">
          <div className="circle-1" />
          <div className="circle-2" />
          <div className="image" />
          <h2 className="name">Marcia da Silva</h2>
          <p className="role">Web Developer</p>
          <p className="role">Ijuí, Brazil</p>
          <Link className="card-contact" to="/contact">
            CONTACT ME
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
