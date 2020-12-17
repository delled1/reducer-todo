import React, { useState, useReducer } from 'react';
import {toDoReducer, initialState} from "../reducers/reducer"
import ToDo from "../components/ToDo"


const ToDoList = (props) => {
    // console.log(props.toggleCompleted)
    const [state, dispatch] = useReducer(toDoReducer, initialState)

    return (
        <div>

        {props.toDoState.map((task) => (
            <ToDo
            
            key={task.id}
            task={task}
            toggleCompleted={props.toggleCompleted}
            />
        ))}
        
        </div>
    )
}

export default ToDoList