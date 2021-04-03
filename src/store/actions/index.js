// src/store/actions/index.js

import { ADD_TODO } from "../../constants/action-types"

let id = 0;
// addToDo Action Creator
export const AddToDoAction = (payLoad) => ({
     
        type: ADD_TODO,
        payLoad:{
            id: id++,
            value: payLoad
        },

}); 
