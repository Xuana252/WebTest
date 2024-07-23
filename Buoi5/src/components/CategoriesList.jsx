import "./CategoriesList.css";
import { useState } from "react";
import CategoryCard from "./CategoryCard";
const CategoriesList = ({
  categoriesList,
  onDelete,
  onTasksChange,
  filterText,
}) => {
  const handleDeleteCategory = (cateIdToDelete) => {
    onDelete(cateIdToDelete);
  };
  function normalizeVietnameseChars(input) {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  return (
    <ul id="CategoriesList">
      {categoriesList.map((category) => {
        const categoryNameNormalized = normalizeVietnameseChars(
          category.name.trim()
        );
        const filterTextNormalized = normalizeVietnameseChars(
          filterText.trim()
        );
        const categoryNameLower = categoryNameNormalized.toLowerCase();
        const filterTextLower = filterTextNormalized.toLowerCase();

        if (categoryNameLower.includes(filterTextLower) || filterTextLower === "")
          return (
            <CategoryCard
              key={category.categoryId}
              categoryId={category.categoryId}
              onDelete={handleDeleteCategory}
              name={category.name}
              color={category.color}
              storedTasks={category.tasks}
              storedLastId={category.lastTaskId}
              onTasksChange={onTasksChange}
            />
          );
        return null;
      })}
    </ul>
  );
};

export default CategoriesList;
