import React, { useState } from "react";

import "./card.styles.scss";

export const Card = ({ movie, onDelete }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url('${movie.image}')`,
        backgroundPosition: "bottom center",
        backgroundSize: "cover",
      }}
    >
      <div className="card__content">
        <h2 className="card__subtitle subtitle">
          {" "}
          {movie.name.length > 18
            ? `${movie.name.slice(0, 18)}...`
            : movie.name}
        </h2>
        <p className="card__descr descr">
          {movie.description.length > 120
            ? `${movie.description.slice(0, 120)}...`
            : movie.description}
        </p>
        <div className="card__btns">
          <button
            className={`card__btn ${movie.id}`}
            style={{ transition: "all 350ms ease-out" }}
            onClick={(e) => onDelete(movie)}
          >
            Delete
          </button>
          <p className="card__date">{movie.date}</p>
        </div>
      </div>
    </div>
  );
};
