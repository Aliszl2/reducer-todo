import React, { useReducer } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';
import { initialState, reducer } from "./reducers/reducer";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState );
  return (
    <div className="App">
 To Do List
 <TodoForm state={state} dispatch={dispatch}/>
 <TodoList state={state} />
    </div>
  );
}

export default App;
