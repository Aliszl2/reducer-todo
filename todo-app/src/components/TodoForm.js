import React, { useReducer } from "react";
import uuid from 'uuid'
import {
   INPUT_CHANGE,
  SUBMIT_TODO,
} from "../reducers/reducer";

const TodoForm = ({state, dispatch})=> {

 
  const onSubmit = event => {
    event.preventDefault()
   
 const newTodo = {
   id: uuid(),
   item: state.addTodo.item,
   completed: false 
 }
 dispatch({ type: SUBMIT_TODO, payload: newTodo})
}
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
        <form onSubmit={onSubmit}>
          <input
            name="item"
            type="text"
            placeholder="Add todo"
            onChange={onChange}
            value={state.addTodo.item}
                   />
          <button type="submit">Submit Todo</button>
        </form>
      </div>
      <button>Clear completed</button>
    </div>
  );
};
export default TodoForm;

