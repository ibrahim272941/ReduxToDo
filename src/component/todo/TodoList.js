import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { clearAllTodo } from "../../redux/actions/todoActions";

const TodoList = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearAllTodo());
  };
  console.log(list);
  return (
    <div>
      <div>
        {list.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClear} className="clear-button">
          All To Do Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
