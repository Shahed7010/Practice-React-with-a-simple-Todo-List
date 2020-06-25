import React from 'react';
import { useState } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'


function Home() {
  const [todos, setTodos] = useState(
    [
      {id:1, content:'finish react'},
      {id:2, content:'get a job'}
    ]
  ) 
  const deleteTodo = (id) => {
    const ntodos = todos.filter(todo =>{
      return todo.id !== id
    })
    setTodos(ntodos)
  }
  const addTodo = (todo) =>{
    todo.id = Math.random()
    let ntodos = [...todos, todo]
    setTodos(ntodos)
  }
  return (
    <div className="col-md-6 mx-auto App">
      <h1 className="text-center">the todos</h1>
      <Todos todos={todos} deleteTodo={deleteTodo}/> 
      <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default Home;
