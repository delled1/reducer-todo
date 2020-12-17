import { ADD_TODO_TASK, TOGGLE_COMPLETED, CLEAR_COMPLETED_TASK } from "../actions/toDoActions"

export const initialState = [{
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      
}]

export const toDoReducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO_TASK"):
        console.log("Adding todo item in the toDoReducer");
        return [...state, action.payload];
        case("TOGGLE_COMPLETED"):
        console.log("Toggle completed");
        return state.map((item) => {
            return item.id === action.payload
              ? { ...item, completed: !item.completed }
              : item;
          });
        case("CLEAR_COMPLETED_TASK"):
        return state.filter((item) => !item.completed)

        default: return state;
        
    }
}



