import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div className="todo-form-wrapper">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add To Do"
          className="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-button">Add Task</button>
      </form>
    </div>
  );
};

export default TodoInput;
