import React from "react";

const ToDo = (props) => {
    console.log(props.task.item)
    return (
        <div>
            {props.task.item}
        </div>
    )
}

export default ToDo