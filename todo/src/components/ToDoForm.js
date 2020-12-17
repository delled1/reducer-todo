import React from 'react';


const ToDoForm = () => {


    const handleChanges = (e) => {
        console.log(e.target.value)

    }
    return (
        <form>
            <input
            value=""
            placeholder="TASK?" 
            type="text"
            name="task"
            onChange={handleChanges}
            />
            <button>Add ToDo Task</button>
        </form>
    )
}
export default ToDoForm