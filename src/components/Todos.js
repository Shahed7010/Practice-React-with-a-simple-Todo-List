import React from 'react'
import { connect } from 'react-redux' 
import {deleteTodo} from '../actions/todoactions'

const Todos = ( props ) =>{
    const handleDelete = (id) =>{
        props.deleteTodo(id)
    }
    const todoList = props.todos.length ? (
      props.todos.map(todo =>{
          return(
              <ul className="list-group" key={todo.id}>
                  <li className="list-group-item">
                  {todo.content}
                  <button onClick={ () => {handleDelete(todo.id)}} className="btn btn-danger float-right">delete</button>
                  </li>
              </ul>
          )
      })
    ) : (
        <p className="bg-success p-2">no todos to do</p>
    )
    return(
        <div className="">
           {todoList}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
      todos: state.todos
    }
  }
const mapDoispatchToProps = (dispatch) => {
    return {
        deleteTodo : (id) => {dispatch (deleteTodo(id))}
    }
}
export default connect(mapStateToProps, mapDoispatchToProps)(Todos)