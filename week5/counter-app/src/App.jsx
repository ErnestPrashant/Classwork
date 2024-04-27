import {useState} from 'react';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//     <CustomButton count={count} setCount= {setCount}></CustomButton> 
//     </div>
//   )
// }

// //component
// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count+1)
//   }
//   return <button onClick={onClickHandler}>
//     Counter {props.count}
//   </button>
// }

// export default App


//------------------------------------------------------------

// function App() {
//   const [count, setCount] = useState(0)
//   function onClickHandler(){
//     setCount(count+1)
//   }

//   return (
//     <div>
//     <button onClick={onClickHandler}>Counter {count}</button> 
//     </div>
//   )
// }
// export default App

// --------------------------------
// import {useState} from "react";

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym",
    description: "Go to gym from 7-9",
    completed: false
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-10",
    completed: true
  }, {
    title: "Study DSA",
    description: "Study DSA form 9-10",
    completed: true
  }, ]); 

  function addTodo() {
    setTodos([...todos, {
      title: "new Todo",
      description: "desc of new todo"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description} />
      })}

    </div>
  )
}

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
