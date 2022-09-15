import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, id, thumbnail }) {
  return (
    <Link to={`/${id}`} target="_blank">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={thumbnail} alt="thumbnail" className="thumbnail" />
          </div>
          <div class="flip-card-back">
            <h1 className="card-name">{name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
