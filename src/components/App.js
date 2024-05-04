import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    // Filter tasks based on the selected category
    const filteredTasks = category === "All" ? TASKS : TASKS.filter(task => task.category === category);
    setTasks(filteredTasks);
  };

  const handleTaskFormSubmit = (task) => {
    // Add the new task to the list
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index) => {
    // Remove the task at the specified index from the list
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;