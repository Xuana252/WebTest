import { useState, useEffect } from "react";
import "./App.css";
import Instructions from "./components/Instructions.jsx";
import InputForm from "./components/InputForm.jsx";
import CategoriesList from "./components/CategoriesList.jsx";
import SearchBar from "./components/SearchBar.jsx"


function App() {
  const [categories, setCategories] = useState([]);
  const [lastCateId, setLastCateId] = useState(1);
  const [instructionVisibility,setInstructionVisibility] = useState(false);
  const [searchText,setSearchText] = useState('');

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("Categories"));
    const storedLastId = JSON.parse(localStorage.getItem("lastId"));
    if (storedCategories) {
      setCategories(storedCategories);
      setLastCateId(storedLastId);
    }
  }, []);

  const generateCateId = () => {
    const newCateId = lastCateId + 1;
    setLastCateId(newCateId);
    return lastCateId;
  };

  const handleTextChange = (searchText) => {
    setSearchText(searchText)
  }

  const handleTasksChange = (
    cateIdToAddTaskTo,
    changedTasks,
    lastTaskIdToSave
  ) => {
    const updateCategories = categories.map((category) => {
      if (category.categoryId === cateIdToAddTaskTo) {
        return {
          ...category,
          lastTaskId: lastTaskIdToSave,
          tasks: changedTasks,
        };
      }
      return category;
    });

    setCategories(updateCategories);
    localStorage.setItem("Categories", JSON.stringify(updateCategories));
    localStorage.setItem("lastId", JSON.stringify(lastCateId)); 
  };
  const handleDeleteCategory = (cateIdToDelete) => {
    const newCategoriesList = categories.filter(
      (category) => category.categoryId !== cateIdToDelete
    );
    setCategories(newCategoriesList);
    localStorage.setItem("Categories", JSON.stringify(newCategoriesList));
  };

  const handleAddCategory = (categoryToAdd) => {
    const isExisted = categories.some(
      (category) => category.name === categoryToAdd.name
    );
    if (!isExisted) {
      const nextCategoryId = generateCateId();

      const newCategory = {
        ...categoryToAdd,
        categoryId: nextCategoryId,
        lastTaskId: 0,
      };

      setCategories([...categories, newCategory]);
      localStorage.setItem(
        "Categories",
        JSON.stringify([...categories, newCategory])
      );
      localStorage.setItem("lastId", JSON.stringify(nextCategoryId));
    }
    else {
      alert("Tồn tại category cùng tên!!!")
    }
  };

  const saveChange = () => {
    localStorage.setItem("Categories", JSON.stringify(categories));
    localStorage.setItem("lastId", JSON.stringify(lastCateId));
    alert("Đã lưu vào localStorage không tin vào kiểm tra!");
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <div id="Floater">
        <div id="FirstRow">
          <button className="Button" onClick={saveChange}>
          Save 
          </button>
          <button className="Button" onClick={()=>setInstructionVisibility(!instructionVisibility)}>
          Instructions
          </button>
          <SearchBar onChange={handleTextChange}/>
          
        </div>
        {instructionVisibility&&<Instructions />}
      </div>
      
      
     
      <InputForm onAdd={handleAddCategory} />

      <CategoriesList
        categoriesList={categories}
        onDelete={handleDeleteCategory}
        onTasksChange={handleTasksChange}
        filterText = {searchText}
      />
    </>
  );
}

export default App;
