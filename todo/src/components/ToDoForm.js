import React, { useState } from 'react';


const ToDoForm = (props) => {
// console.log(props.addTask)


    const handleChanges = (e) => {
        console.log(e.target.value)

    }

    const [values, setValues] = useState("")
    return (
        <form 
        onSubmit={(e) => {
            console.log(e)
            e.preventDefault();
            props.addTask(values)
            setValues("")
        }}
        >
            <input
            value={values}
            placeholder="Add Tasks Here" 
            type="text"
            name="task"
            onChange={(event) => {
                setValues(event.target.value)
            }}
            />
            <button
            type="submit">
                Add ToDo Task</button>
        </form>
    )
}
export default ToDoForm