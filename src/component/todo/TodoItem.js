import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/actions/todoActions";

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTodo(id));
  };
  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };
  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: ".7rem",
  };
  return (
    <div className="todo-list-wrapper">
      <div style={styled} className="todo-list">
        <h2 className="todoText">{text}</h2>
        <div>
          <span>
            <img
              onClick={handleToggle}
              src={okLogo}
              className="ok-logo"
              alt="ok logo"
            />
          </span>
          <span>
            <img
              onClick={handleDeleteTask}
              src={deleteLogo}
              className="delete-logo"
              alt="delete logo"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
