import React from 'react';
import { connect } from 'react-redux';
import './addToDo.css';
import {AddToDoAction} from '../../store/actions/index'
import ToDoList from '../todo/toDo';
class AddToDo extends React.Component{
    constructor(){
        super();
        this.state={value:'', isError: false};
    }

    updateInput=(e)=>{
        e.preventDefault();
        this.setState( {value:e.target.value});
    }

    handleAddToDo=(e)=>{
        console.log('items', this.props.todoListItems, this.state.value)
        if(this.props.todoListItems.length > 0 ){
            this.props.todoListItems.forEach(item => {
                if(item.value !== this.state.value){
                    this.props.AddToDoAction(this.state.value);
                    this.setState({value: ''});
                }else{
                    this.setState({isError: true});
                }
            })
        }else{
            this.props.AddToDoAction(this.state.value);
            this.setState({value: ''});
        }
        
    }

    render(){
        let {showError}= this.state.isError;
        console.log('s', showError,this.state, this.state.isError)
        return(    
            <div className="addToDo">
                <h3>Todos</h3>
                <React.Fragment>
                <input type="text" onChange={(e)=> this.updateInput(e)} value={this.state.value}>
                </input>
                <button className='button' onClick = {(e)=>this.handleAddToDo(e)}>Add</button>
                {/* {(function(){
                    if (this.state.showErrorMsg === true) {
                        return <label className='error'>to do already exists</label>
                    }
                })} */}

                {this.state.isError && <label className="error">already exists</label>}               
                
                
                </React.Fragment>    
                
                <ToDoList></ToDoList>
            </div>
            
        )
    }
}
const mapStateToProps = (state)=>{
    console.log('beofre', state);

    const todoListItems = state.todo;
    return {todoListItems}
}
export default connect(mapStateToProps, {AddToDoAction})(AddToDo)

