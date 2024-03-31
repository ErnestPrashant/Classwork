import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { renderTodo } from './components/Todos'

function App() {
  const [todo, setTodo] = useState([]);

  fetch("http://localhost:3000/todos")
  .then(async (res) => {
    const json = await res.json();
    setTodo(json.todos);
  })
  
  return (
      <div>
        <CreateTodo /> 
        <renderTodo todos = {todos}/>
        </div>
)
} 
export default App
