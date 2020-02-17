import React, { useReducer } from "react";
import {
  reducer,
  initialState,
  INPUT_CHANGE,
  SUBMIT_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from "../reducers/reducer";

const TodoForm = props => {


  return (
    <div>
      <div>
        <form >
          <input
            name="item"
            type="text"
            placeholder="Add todo"
                   />
          <button type="submit">Submit Todo</button>
        </form>
      </div>
      <button>Clear completed</button>
    </div>
  );
};
export default TodoForm;

