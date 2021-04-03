import { createStore } from "redux";
import addToDoReducer from './reducers/index';
// import  { composeWithDevTools } from 'remote-redux-devtools';

const store = createStore(addToDoReducer,
    // composeWithDevTools(),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;