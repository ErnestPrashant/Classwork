import { memo, useState, useEffect, useMemo, useCallback } from 'react'

//USEEFFECT
// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     fetch('https://sum-server.100xdevs.com/todos')
//     .then(async (data) => {
//       let todo = await data.json();
//       setTodos(todo.todos)
//     })
//   }, [])

//   return <RenderTodo todos = {todos}/>
// }

// function RenderTodo({ todos }) {
//   return <div>
//     {
//       todos.map((todo) => {
//         return <div>
//           <h2>{todo.title}</h2>
//           <h5>{todo.description}</h5>
//         </div>
//       })
//     }
//   </div>
// }

//Assignment : given an id , render its todo
//on button click it should re render

// function App(){

//  const [todoId, setTodoId] = useState(1) 
//   return <div >
//     <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => setTodoId(1)}>1</button>
//     <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => setTodoId(2)}>2</button>
//     <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => setTodoId(3)}>3</button>
//     <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => setTodoId(4)}>4</button>
//     <Todo id={todoId} />
//   </div>
// }

// function Todo({id}){
//   const [todo, setTodo] = useState({})
//   useEffect(() => {
//     async function render(){
//       const data = await fetch("https://sum-server.100xdevs.com/todo?id="+id)
//       const data2 = await data.json()
//       const todo = data2.todo
//       setTodo(todo)
//     }
//     render()
//   }, [id])

//   return(
//     <div className='mt-56 ml-96 place-items-center grid block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
//       <h1>{todo.title}</h1>
//       <h3>{todo.description}</h3>
//     </div>
//   )
// }

//USEMEMO

// function App(){
//   const [counter, setCounter] = useState(0)
//   const [sum, setSum] = useState(0)

//   const finalsum = useMemo( () => {
//     console.log("memo got called ")
//     let sumi=0;
//     for(let i=0; i<=sum; i++){
//       sumi +=i
//     }
//     return sumi
//   }, [sum]);

// return (
//   <>
//   <input className='text-black' onChange={(e) => setSum(e.target.value)} type="text" name="" id="" /> <br /><br />
//   <button className='text-white bg-blue-700 ' onClick={() => setCounter(counter+1)}>counter: {counter}</button>
//   <p>sum is {finalsum}</p>
//   </>
// )
// }

//MEMO NOT (USEMEMO)
// function App() {
//   const [count, setCount] = useState(0)

//   const onClick = useCallback(() => {
//     console.log("child clicked")
//   },[])
//   // function onClick() {
//   //   console.log("child clicked")
//   // }

//   return <div>
//     <Child onClick={onClick} />
//     <button onClick={() => {
//       setCount(count + 1);
//     }}>Click me {count}</button>
//   </div>
// }

// const Child = memo(({onClick}) => {
//   console.log("child render")
//   return <div>
//     <button onClick={onClick}>Button clicked</button>
//   </div>
// })

//CUSTOM HOOKS

function App() {

  function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos);
        })
    }, [])
    return todos;
  }
  const todos = useTodos();
  return <div>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo({ title, description }) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}


export default App

