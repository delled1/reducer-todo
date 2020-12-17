import ADD_TODO_ITEM from "../actions/toDoActions"

export const initialState = {
    task: [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }]
}

const toDoReducer = (state, action) => {
    switch(action.type) {
        case(ADD_TODO_ITEM):
        console.log("Adding todo item in the toDoReducer");
        return {...state, editing: !state.editing};

        default: return state;
        
    }
}


export default toDoReducer
