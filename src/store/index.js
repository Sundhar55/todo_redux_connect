import { createStore } from "redux";
import ToDoReducer from './reducers/index';
// import  { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(ToDoReducer,
    // composeWithDevTools(),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;