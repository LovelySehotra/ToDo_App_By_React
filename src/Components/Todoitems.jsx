import React, { useState } from 'react'
import { useTodo } from '../Context';

function Todoitems({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const [isEditable, setIsEditable] = useState(false);
    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const updatedTodo = () => {
        console.log("d")
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsEditable(false)
    }
    const toggleCompleted = () => {
        console.log(todo.id)
        toggleComplete(todo.id);

    }
    const deletedTodo = () => {
        deleteTodo(todo.id);
    }

    return (
        <div className=' bg-gray-500 border border-gray-400 gap-4 h-10 flex items-center rounded-xl p-3  '>
            <div>
                <input
                className='w-4 h-4 text-red-600 bg-gray-500 border-gray-500 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 '
                    type="checkbox"
                    checked={todo.complete}
                    onChange={toggleCompleted}
                />
           </div>
            
           <div>
                <input
                className='bg-transparent text-lg font-medium'
                    type="text"
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isEditable} />

            </div>

            <button
            
                onClick={() => {
                    if (todo.complete) return;
                    if (isEditable) {
                        updatedTodo();
                        console.log(todoMsg)
                    } else {
                        setIsEditable((prev) => !prev)
                    }
                }}
            >{isEditable ?"📁" : "✏️"}</button>
            <button
                onClick={deletedTodo}> ❌</button>
        </div>
    )
}

export default Todoitems