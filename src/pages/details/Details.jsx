import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const Details = () => {
  const { state } = useLocation();
  const recipe = state?.recipe;

  if (!recipe) {
    return <div className="container mt-5">No recipe data found.</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ maxWidth: "700px" }}>
        <img
          src={recipe.image}
          alt={recipe.label}
          className="card-img-top"
        />
        <div className="card-body">
          <h3 className="card-title">{recipe.label}</h3>
          <p className="card-text">
            <strong>Source:</strong> {recipe.source}
          </p>
          <h5>Ingredients:</h5>
          <ul>
            {recipe.ingredientLines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <a
            href={recipe.url}
            className="btn btn-success mt-3"
            target="_blank"
            rel="noreferrer"
          >
            View Full Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
