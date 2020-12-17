import React from 'react';
import ToDo from "../components/ToDo"


const ToDoList = (props) => {


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