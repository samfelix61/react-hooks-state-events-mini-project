// Task.js

import React from 'react';

function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete(); // Call the onDelete function when the delete button is clicked
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      {/* Add onClick event handler for the delete button */}
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;