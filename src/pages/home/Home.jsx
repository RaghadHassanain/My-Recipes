import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mealType, setMealType] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // استدعاء API والوصفات حسب البحث
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        const response = await axios.get(url);
        let fetchedRecipes = response.data.meals || [];

        // تصفية حسب نوع الوجبة إذا تم اختياره
        if (mealType) {
          fetchedRecipes = fetchedRecipes.filter(
            (recipe) => recipe.strCategory === mealType
          );
        }

        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchRecipes();
  }, [searchTerm, mealType]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Food Recipes</h2>

      <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Search for a recipe..."
          className="form-control w-50"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="form-select w-auto"
          value={mealType}
          onChange={(e) => setMealType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <div className="row">
        {recipes.length ? (
          recipes.map((recipe) => (
            <div className="col-md-4 mb-4" key={recipe.idMeal}>
              <div className="card h-100 shadow">
                <img
                  src={recipe.strMealThumb}
                  className="card-img-top"
                  alt={recipe.strMeal}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{recipe.strMeal}</h5>
                  <a
                    href={recipe.strSource || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-primary btn-sm"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
