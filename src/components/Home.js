import React from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo'



function Home(props) {
  
  return (
    <div className="col-md-6 mx-auto App">
      <h1 className="text-center">the todos</h1>
      <Todos /> 
      <AddTodo />
    </div>
  );
}


export default Home;
