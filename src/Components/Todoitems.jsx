import React, { useState } from 'react'
import { useTodo } from '../Context';

function Todoitems({todo}) {
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const[isEditable,setIsEditable] = useState(false);
    const {updateTodo,deleteTodo,toggleComplete} = useTodo();

    const updatedTodo = (todo)=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})
    }
    const toggleCompleted= (todo)=>{
        toggleComplete(todo.id);

    }
    const deletedTodo = (todo)=>{
        deleteTodo(todo.id);
    }
    
  return (
    <div>
        <input 
        type="checkbox"
        checked={todo.complete}
        onChange={toggleCompleted}
         />
        <input 
        type="text"
        value={todoMsg} 
        readOnly/>
        <button>{isEditable?"save":"edit"}</button>
        <button>Delete</button>
    </div>
  )
}

export default Todoitems