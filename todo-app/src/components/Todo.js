import React, { useReducer } from "react";
import { initialState } from "../reducers/reducer";
import "./Todo.css";

const Todo = props => {


  return (
    <div className= "notCompleted">
      <div className="todo">

      <ul>{props.todo.item}</ul>
      <button type="submit">
        Complete
      </button>
      </div>
    </div>
  );
};

export default Todo;
