import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="todo">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
