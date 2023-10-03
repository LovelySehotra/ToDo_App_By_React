import React, { useState } from 'react'
import { useTodo } from '../Context';

function TodoForm() {
    const { addTodo } = useTodo();
    const [todo, setTodo] = useState("");
    const add = (e) => {
        e.preventDefault();
        if(!todo) return
        
        addTodo({ todo: todo, complete: false })
        setTodo("");

    }
    return (
        <form onSubmit={add} className=' flex justify-center items-center' >
            <div className='flex  gap-3 justify-center items-center mt-2 '>
                <input
                    type="text"
                    placeholder='Write your next Task'
                    className=' rounded-xl p-2 border border-gray-400 bg-transparent'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type='submit' className='bg-red-400 w-10 h-8 rounded-xl'>➕</button>
            </div>

        </form>
    )
}

export default TodoForm