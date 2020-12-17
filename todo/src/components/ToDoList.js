import React, { useState, useReducer } from 'react';
import toDoReducer, {initialState} from "../reducers/reducer"
import actions from "../actions/toDoActions"
import ToDo from "../components/ToDo"


const ToDoList = () => {

    const [state, dispatch] = useReducer(toDoReducer, initialState)
    
    return (
        <div>

        {state.task.map((task) => (
            <ToDo
            key={task.id}
            task={task}
            />
        ))}
        
        </div>
    )
}

export default ToDoList