import React from "react";

const ToDo = (props) => {
    console.log(props.task.completed)
    return (
        <div
        className={`task ${props.task.completed ? "completed" : ""}`}
        onClick={() => props.toggleCompleted(props.task.id)}
        >
            {props.task.item}
        </div>
    )
}

export default ToDo