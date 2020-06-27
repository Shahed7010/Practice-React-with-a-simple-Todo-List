import React, { Component } from 'react';
import { connect } from 'react-redux' 
import {addTodo} from '../actions/todoactions'

class AddTodo extends Component{
    state = {
        content: ''
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            content: ''
        })
        this.props.addTodo(this.state)
    }
    changeState = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group my-1">
                        <input onChange={this.changeState} value={this.state.content} className="form-control" type="text" placeholder="enter your next todo"/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDoispatchToProps = (dispatch) => {
    return {
        addTodo : (todo) => {dispatch (addTodo(todo))}
    }
}
export default connect(null, mapDoispatchToProps)(AddTodo)