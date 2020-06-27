const initState = {
    todos: [
        {id:1, content:'finish react'},
        {id:2, content:'get a job'}
      ]
}

const rootReducer = (state=initState, action) =>{
   if(action.type === 'DELETE_TODO'){
        let ntodos=state.todos.filter(todo =>{
           return todo.id !==action.id
       }) 
       return {
           ...state,
           todos : ntodos
       }
   }
   if(action.type === 'ADD_TODO'){
       let todo = action.todo
       todo.id = Math.random();
       console.log(todo)
       let ntodo = [...state.todos,todo]
       return {
        ...state,
        todos : ntodo
    }
}
    return state;
}
export default rootReducer