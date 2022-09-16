import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, id, thumbnail }) {
  return (
    <Link to={`/${id}`} target="_blank">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          </div>
          <div className="flip-card-back">
            <h1 className="card-name">{name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
