import React from "react";
import { TOGGLE_TODO_COMPLETE } from "../reducers/reducer";
import "./Todo.css";

const Todo = ({ todo, state, dispatch }) => {
  return (
    <div className={todo.completed ? "completed" : "notCompleted"}>
      <div className="todo">
        <ul>{todo.item}</ul>
        <button
          onClick={event => {
            dispatch({ type: TOGGLE_TODO_COMPLETE, payload: todo.id });
          }}
          type="submit"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default Todo;
