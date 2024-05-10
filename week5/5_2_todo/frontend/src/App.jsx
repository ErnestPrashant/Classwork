import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todo, setTodo] = useState([]);

  // fetch("http://localhost:3000/todos")
  // .then(async (res) => {
  //   const json = await res.json();
  //   setTodo(json.data);
  // })

  return (
      <div>
        <CreateTodo /> 
        <Todos todos = {todo}/>
        </div>
)
} 
export default App
