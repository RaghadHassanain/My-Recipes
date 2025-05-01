// src/components/header/Form.jsx
import React, { useState } from "react";

const Form = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Breakfast");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, category);
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row gap-3 my-4 justify-content-center align-items-center">
      <input
        type="text"
        placeholder="Search recipe..."
        className="form-control w-50"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <select
        className="form-select w-25"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Dessert">Dessert</option>
        <option value="Chicken">Chicken</option>
        <option value="Beef">Beef</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Seafood">Seafood</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default Form;
