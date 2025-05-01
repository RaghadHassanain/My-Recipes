import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600 mb-3">{recipe.strCategory}</p>
        <Link
          to={`/details/${recipe.idMeal}`}
          className="inline-block bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
