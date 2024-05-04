import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleClick = (category) => {
    setSelectedCategory(category); // Update selected category state
    onCategoryChange(category); // Call onCategoryChange function with selected category
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* Render buttons for each category */}
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;