import React, { useState } from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import editLogo from "../../assets/edit.png";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  toggleTodo,
  editTodo,
} from "../../redux/actions/todoActions";

const TodoItem = ({ completed, text, id }) => {
  const [edit, setEdit] = useState(text);
  const [editText, setEditText] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    dispatch(deleteTodo(id));
  };
  const handleEditTask = (e) => {
    e.preventDefault();
    dispatch(editTodo());
    console.log(e.target);
    setEditText(false);
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
        {editText ? (
          <form style={{ width: "100%" }} onSubmit={handleEditTask}>
            <input
              style={{
                width: "80%",
                height: "2rem",
                background: "orange",
                fontSize: "1rem",
                border: "none",
              }}
              value={edit}
              onChange={(e) => setEdit(e.target.value)}
              type="text"
            />
            <button type="submit">SAVE</button>
          </form>
        ) : (
          <h3 className="todoText">{edit}</h3>
        )}

        <div className="todo-logo">
          <span>
            <img
              onClick={handleToggle}
              src={okLogo}
              className="logo"
              alt="ok logo"
            />
          </span>
          <span>
            <img
              onClick={handleDeleteTask}
              src={deleteLogo}
              className="logo"
              alt="delete logo"
            />
          </span>
          <span>
            <img
              onClick={() => setEditText(true)}
              src={editLogo}
              className="logo"
              alt="delete logo"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
