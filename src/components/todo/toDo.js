// src/components/todo/todo.js
import React from 'react';
import { connect } from 'react-redux';

class ToDoList extends React.Component{
   
    render(){
        const list = this.props.todoListItems;
        const listItems = list.map((item)=>
                    <li>{item.value}</li>
                )
        return(
            <div>
                <ul>
                    {listItems}
                </ul>
            </div>
            )
    }
        
}
const mapStateToProps = (state)=>{
    console.log('beofre', state);
    const todoListItems = state.todo;
    console.log('items are ', todoListItems);
    return {todoListItems};
}
export default connect(mapStateToProps)(ToDoList)