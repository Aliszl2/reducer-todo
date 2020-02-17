import React, { useReducer } from "react";
import {
  reducer,
  initialState,
  INPUT_CHANGE,
  SUBMIT_TODO,
} from "../reducers/reducer";

const TodoForm = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = event => {
    const todoItem = event.target.name
    const todoValue = event.target.value
    dispatch({
      type: INPUT_CHANGE,
      payload: { todoItem , todoValue }
    });
  };

  return (
    <div>
      <div>
        <form >
          <input
            name="item"
            type="text"
            placeholder="Add todo"
            onChange={onChange}
            value={state.item}
                   />
          <button type="submit">Submit Todo</button>
        </form>
      </div>
      <button>Clear completed</button>
    </div>
  );
};
export default TodoForm;

