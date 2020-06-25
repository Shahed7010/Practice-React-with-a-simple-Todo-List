import React from 'react'

const Todos = ({todos, deleteTodo} ) =>{
    const todoList = todos.length ? (
      todos.map(todo =>{
          return(
              <ul className="list-group" key={todo.id}>
                  <li className="list-group-item">
                  {todo.content}
                  <button onClick={() => {deleteTodo(todo.id)}} className="btn btn-danger float-right">delete</button>
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

export default Todos