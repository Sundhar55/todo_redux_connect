import { ADD_TODO, COMPLETED_TODO } from "../../constants/action-types";

const initialState = {
    todo: [],
    completedTodos: []
}
const ToDoReducer = ( state=initialState, action) => {

 if(action.type === ADD_TODO){
    // state.todo = [{...state.todo, ...action.payLoad}]
    return {...state, todo:[...state.todo,action.payLoad]}
    }else if(action.type === COMPLETED_TODO){
        // state.todo = [{...state.todo, ...action.payLoad}]
        console.log('completed todos', state, action)
        const completedItem = action.payLoad;
        const indexOfCompletedItem = state.todo.findIndex(item => item.value === completedItem.value);
        state.todo.splice(indexOfCompletedItem,1);
        return {...state, completedTodos:[...state.completedTodos,action.payLoad], todo:[...state.todo]}
    } else {
        return state;
     } 
 

}



export default ToDoReducer;