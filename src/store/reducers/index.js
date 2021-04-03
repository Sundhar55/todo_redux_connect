import { ADD_TODO } from "../../constants/action-types";

const initialState = {
    todo: []
}
const addToDoReducer = ( state=initialState, action) => {

 if(action.type === ADD_TODO){
    // state.todo = [{...state.todo, ...action.payLoad}]
     state.todo = state.todo.concat(action.payLoad);
     return state;
 } else {
    return state;
 }
}

export default addToDoReducer;