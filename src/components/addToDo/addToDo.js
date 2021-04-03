import React from 'react';
import { connect } from 'react-redux';
import './addToDo.css';
import {AddToDoAction} from '../../store/actions/index'

class AddToDo extends React.Component{
    constructor(){
        super();
        this.state={value:''};
    }

    updateInput=(e)=>{
        e.preventDefault();
        console.log('e ui', this.state);
        this.setState( {value:e.target.value});
    }

    handleAddToDo=(e)=>{
        this.props.AddToDoAction(this.state.value);
        console.log('e', this.state);
        this.setState({value: ''});
        console.log('e after', this.state);
    }

    render(){
        return(    
            <div className="addToDo">
                <h3>Todos</h3>
                <React.Fragment>
                <input onChange={(e)=> this.updateInput(e)}></input>
                <button className='button' onClick = {(e)=>this.handleAddToDo(e)}>Add</button>
                </React.Fragment>    
            </div>
            
        )
    }
}

export default connect(null, {AddToDoAction})(AddToDo)

