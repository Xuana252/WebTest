import "./CategoryCard.css";
import { useState, useRef, useEffect } from "react";
import Task from "./Task";
const CategoryCard = ({ categoryId, onDelete, name, color, storedTasks, onTasksChange, storedLastId }) => {
  const [isAdding, setAddState] = useState(false);
  const [isDeleting, setDelete] = useState(false);
  const [isDetailVisible, setDetailVisibility] = useState(false);
  const [tasks, setTasks] = useState(storedTasks);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isAdding && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAdding]);


  const deleteCategory = (event) => {
    event.stopPropagation();
    setDelete(true);
    setTimeout(() => {
      onDelete(categoryId);
    }, 400); //
  };
  const handleStateChange = (taskIdToChange, stateToChangeTo) => {
    const updatedTasks = tasks.map((task) => {
      if(task.taskId==taskIdToChange)
        return {...task, state:stateToChangeTo}
      return task
    }
    );
    setTasks(updatedTasks);
    onTasksChange(categoryId,updatedTasks,storedLastId)
  }
  const handleAddTask = () => {
    if (inputRef.current.value.trim() !== "") {
      const newId = ++storedLastId;
      const newTasks = {
        taskId: newId,
        content: inputRef.current.value.trim(),
        state: "Pending",
      };
      setTasks([...tasks, newTasks]);
      onTasksChange(categoryId,[...tasks, newTasks],newId)
      setAddState(false);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };
  const handleDeleteTask = (taskIdToDelete) => {
    const updatedTasks = tasks.filter(
      (tasks) => tasks.taskId !== taskIdToDelete
    );
    setTasks(updatedTasks);
    onTasksChange(categoryId,updatedTasks,storedLastId)
  };

  return (
    <li
      className="Category"
      style={{
        backgroundColor: color,
        animation: isDeleting
          ? "slideOut 0.5s ease-in-out"
          : "slideUp 0.5s ease-in-out",
      }}
    >
      <div className="CategoriesName">
        <p className="Name">{name}</p>
        <div className="ButtonContainer">
          <button className="ExpandButton" onClick={() => setDetailVisibility(!isDetailVisible)}>
          {isDetailVisible?'▲':'▼'}
          </button>
          <button className="AddButton" onClick={() => setAddState(isDetailVisible&&!isAdding)}>
            ✎
          </button>
          <button className="RemoveButton" onClick={deleteCategory}>
            🗑️
          </button>
        </div>
      </div>
      {isDetailVisible && isAdding && (
        <input
          id="TaskInput"
          type="text"
          placeholder="Add task here"
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
      )}
      {isDetailVisible && (
        <div className="TasksListContainer">
          <ul className="TasksList">
            {tasks.map((task) => (
              <Task
                key={task.taskId}
                taskId={task.taskId}
                onDelete={handleDeleteTask}
                content={task.content}
                initState={task.state}
                onStateChange={handleStateChange}
              />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default CategoryCard;
