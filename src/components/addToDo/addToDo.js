import React from 'react';
import { connect } from 'react-redux';
import './addToDo.css';
import {AddToDoAction} from '../../store/actions/index'
import ToDoList from '../todo/toDo';
class AddToDo extends React.Component{
    constructor(){
        super();
        this.state={value:''};
    }

    updateInput=(e)=>{
        e.preventDefault();
        this.setState( {value:e.target.value});
    }

    handleAddToDo=(e)=>{
        this.props.AddToDoAction(this.state.value);
        this.setState({value: ''});
    }

    render(){
        return(    
            <div className="addToDo">
                <h3>Todos</h3>
                <React.Fragment>
                <input onChange={(e)=> this.updateInput(e)}></input>
                <button className='button' onClick = {(e)=>this.handleAddToDo(e)}>Add</button>
                </React.Fragment>    
                <ToDoList></ToDoList>
            </div>
            
        )
    }
}

export default connect(null, {AddToDoAction})(AddToDo)

