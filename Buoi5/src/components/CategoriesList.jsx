import "./CategoriesList.css";
import { useState } from "react";
import CategoryCard from "./CategoryCard";
const CategoriesList = ({categoriesList, onDelete,onTasksChange}) => {

  const handleDeleteCategory = (cateIdToDelete) => {
    onDelete(cateIdToDelete)
  };
  return (
    <ul id="CategoriesList">
      {categoriesList.map((category) => (
        <CategoryCard
          key={category.categoryId}
          categoryId={category.categoryId}
          onDelete={handleDeleteCategory}
          name={category.name}
          color={category.color}
          storedTasks ={category.tasks}
          storedLastId={category.lastTaskId}
          onTasksChange = {onTasksChange}
        />
      ))}
    </ul>
  );
};

export default CategoriesList;
