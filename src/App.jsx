import { useEffect, useState } from "react";
import TodoForm from "./Components/TodoForm";
import { TodoProvider } from "./Context"
import Todoitems from "./Components/Todoitems";


function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevtodo) => prevtodo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? { ...prevtodo, complete: !prevtodo.complete } : prevtodo)))
  }

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todos = JSON.parse(storedTodos);
      console.log(todos);
      setTodos(todos);
    }
  }, []);
  
  useEffect(() => {
    console.log(todos)
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-black h-screen flex flex-col justify-around items-center">
        <div >
          <TodoForm />
        </div>
        <div className="bg-white">
          {todos.map((todo) => (
            <div key={todo.id}><Todoitems todo={todo} /></div>
          ))}
        </div>

      </div>


    </TodoProvider>
  )
}

export default App
