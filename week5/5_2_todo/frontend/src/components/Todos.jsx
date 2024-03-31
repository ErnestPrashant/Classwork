export function renderTodo(todos){
    return <div>
        { 
            todos.map((todo) => {
                return <div>
                    <h1>{todos.title}</h1>
                    <h2>{todos.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                </div>
            })
        }
    </div>
}