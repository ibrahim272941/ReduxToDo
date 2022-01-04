import {
  ADD_TODO,
  CLEAR_ALL_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../types/todoTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload: payload,
  };
};
export const clearAllTodo = () => {
  return {
    type: CLEAR_ALL_TODO,
  };
};

export const editTodo = (payload, id) => {
  return {
    type: EDIT_TODO,
    payload: payload,
    id: id,
  };
};
