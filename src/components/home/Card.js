import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = () => (
  <div className="card">
    <div className="card-items">
      <div className="circle-1" />
      <div className="circle-2" />
      <div className="image" />
      <h2 className="name">Marcia da Silva</h2>
      <p className="role">Software Developer</p>
      <p className="role">Toronto, Canada</p>
      <Link className="card-contact" to="/contact">
        CONTACT ME
      </Link>
    </div>
  </div>
);

export default Card;
