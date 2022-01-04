import {
  ADD_TODO,
  CLEAR_ALL_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../types/todoTypes";

const initialState = {
  counter: 0,
  list: [
    {
      id: 0,
      text: "Add To Do",
      completed: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        counter: state.counter + 1,
        list: [
          ...state.list,
          { id: state.counter + 1, text: action.payload, completed: false },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    // case EDIT_TODO:
    //   return {
    //     ...state,
    //     list: state.list.map((edit) =>
    //       edit.id === action.payload.id
    //         ? {
    //             ...edit,
    //             text: action.payload.edit,
    //           }
    //         : edit
    //     ),
    //   };
    case CLEAR_ALL_TODO:
      return initialState;
    default:
      return state;
  }
};
export default todoReducer;
