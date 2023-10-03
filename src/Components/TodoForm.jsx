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
            <div className='flex  gap-3 justify-center items-center mt-2'>
                <input
                    type="text"
                    placeholder='Add todo'
                    className=' rounded-xl p-2 border border-gray-600'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button type='submit' className='bg-slate-500 w-10 h-8 rounded-xl'>Add</button>
            </div>

        </form>
    )
}

export default TodoForm