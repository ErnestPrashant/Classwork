import React, { useEffect, useState } from 'react'
import styles from './App.module.css'
/*KEYS
let counter = 4;
export default function App() {
  const [todos,setTodos] = useState([
    {id:1, 
    title: "gym",
    description: "go to gym "},
    {id:2, 
    title: "sleep",
    description: "sleep at 10pm"},
    {id:3, 
    title: "wakeup ",
    description: "wakeup at 10am"}])

  function addTodo(){
    setTodos([...todos, {
      id:counter++, 
      title: Math.random(),
      description: Math.random()*100
    }])
  }
  return (
    <>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map( (todo) =>( 
       <Todo
        title = {todo.title}
        description = {todo.description}
        key={todo.id}
        />
))}
    </>
  )
}

function Todo({title, description,}){
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}
*/

//WRAPPER COMPONENT
// export default function App() {
//   return <div>
//   <CardWrapper innerComponent={<TextComponent />} />  
//   </div>
// }

// function TextComponent(){
//   return <div>
//     hi there 
//   </div>
// }

// function CardWrapper({innerComponent}){
//   return <div style={{border: "2px solid black"}}>
//     {innerComponent}
//   </div>
// }

//ANOTHER SYNTAX FOR WRAPPER COMPONENT (MORE CLEANER)
//Anything written inside CardWrapper will be passed in "children" prop
// export default function App() {
//   return <div>
//   <CardWrapper >
//     <div>
//       hi there 
//     </div>
//     </CardWrapper>  
//   <CardWrapper>
//     <TextComponent/>
//     </CardWrapper>  
//   </div>
// }

// function CardWrapper({children}){
//   return <div style={{border: "2px solid black", padding: "20px"}}>
//     {children}
//   </div>
// }

// function TextComponent(){

//   return <div className={styles.container}>
//     hi there from wrapper component
//   </div>
// }

//ASSIGNMENT
export default function App() {
const[todos, setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch('https://sum-server.100xdevs.com/todos')
    .then(async (data) => {
      let todo = await data.json();
      setTodos(todo.todos)
    })
    }, 5*1000)
  }, [])

  return <RenderTodo todos = {todos}/>
}

function RenderTodo({ todos }) {
  return <div>
    {
      todos.map((todo) => {
        return <div>
          <h2>{todo.title}</h2>
          <h5>{todo.description}</h5>
        </div>
      })
    }
  </div>
}