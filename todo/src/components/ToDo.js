import React, { useState, useReducer } from 'react';
import toDoReducer, {initialState} from "../reducers/reducer"




const ToDo = () => {

    const [state, dispatch] = useReducer(toDoReducer, initialState)

    return (
        <div>
        <h1>THIS IS TODO LIST</h1>
        {state.item}
        
        </div>
    )
}

export default ToDo