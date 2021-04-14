// src/components/todo/todo.js
import React from 'react';
import { connect } from 'react-redux';
import './todo.css';
import {AddCompletedItemAction} from '../../store/actions/index'

class ToDoList extends React.Component{
    onSelectedItem=(e)=>{
        this.props.AddCompletedItemAction(e.target.value);
    };
    render(){
        const list = this.props.todoListItems;
        const listItems = list.map((item, index)=>
            <li key={index}>
                <label>
                <input type='checkbox'  onChange={(e)=>  this.onSelectedItem(e)}  value={item.value}></input>
                {item.value}
                </label>
                
                </li>
        );
        const completedItems = this.props.completedItems.map((item,index) => 
            <li key={index}>{item.value}</li>
        );

        return(
        <div>
            <ul className='no-bullets'>
                {listItems}   
            </ul>

            <label>completedItems</label>
            <ul className='no-bullets'>{completedItems}</ul>
        </div>
        )
    }
        
}
const mapStateToProps = (state)=>{
    console.log('beofre', state);
    const todoListItems = state.todo;
    const completedItems = state.completedTodos;
    return {todoListItems, completedItems};
}


export default connect(mapStateToProps,{AddCompletedItemAction})(ToDoList)