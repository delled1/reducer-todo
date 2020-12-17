const ADD_TODO_ITEM = "ADD_TODO_ITEM"
const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"

export default { 
    addTask: (newTask) => {
        console.log("Add task action creator")
        return({type: ADD_TODO_ITEM, payload: newTask})
    }
}
