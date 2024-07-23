import { useState } from "react";
import "./Task.css";
const Task = ({ taskId, onDelete, content, initState, onStateChange }) => {
  const states = ["Pending", "In-Progress", "Completed"];
  const [state, changeState] = useState(initState);
  const [isDeleting, setDelete] = useState(false);

  const changeTaskState = () => {
    changeState(states[(states.indexOf(state)+1)%3]);
    onStateChange(taskId,states[(states.indexOf(state)+1)%3])
  };

  const deleteTask = (event) => {
    event.stopPropagation();
    setDelete(true);
    setTimeout(() => {
        onDelete(taskId);
      }, 400);
  };
  return (
    <li
      className={`${state} Task`}
      style={{
        animation: isDeleting
          ? `shrink 0.5s ease-in`
          : `slideIn 0.5s ease-in`,
      }}
      onClick={changeTaskState}
    >
      <button className="RemoveTaskButton" onClick={deleteTask}>
        ✖
      </button>
      <p className="Content"> {content} </p>
    </li>
  );
};

export default Task;
