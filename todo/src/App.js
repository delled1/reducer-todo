import './App.css';
import React, { useReducer } from "react";
import ToDoList from "./components/ToDoList"
import ToDoForm from "./components/ToDoForm"
import {toDoReducer, initialState} from "./reducers/reducer"



function App() {

  const [state, dispatch] = useReducer(toDoReducer, initialState)
  
  const addToDoTask = (task) => { 
    const newTask = {
      item: task,
      completed: false,
      id: new Date()
    }
    dispatch({type: "ADD_TODO_TASK", payload: newTask})
  }

  const toggleCompleted = (id) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: id });
  };

  const completedClear = () => {
    dispatch({type: "CLEAR_COMPLETED_TASK"})
  }
  return (
    <div className="App">
              <h1>THIS IS TODO LIST</h1>
      <ToDoList toDoState={state} toggleCompleted={toggleCompleted}/>
      <ToDoForm addTask={addToDoTask} />
      <button 
      onClick={(e) => {
        e.preventDefault();
        completedClear();
      }}>Clear</button>
    </div>
  );
}

export default App;
