import { useState } from "react";

export function CreateTodo() {
    // react-query
    const [title, setValue] = useState("");
    const [description, setDescription] = useState("");
    return <div >
        <input className="reqstyle" type="text" placeholder="title" onChange={function(e){
            setValue(e.target.value)
        }}/> <br />
        <input className="reqstyle" type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value)
        }}/><br />

        <button className="reqstyle" onClick={() => { 
            fetch("http://localhost:3000/todos", {
                method: "POST",
                body: JSON.stringify({
                    title: title, 
                    description: description
                }), 
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async (res) => {
                const json = await res.json();
                alert("todo created ")
            })
        }}>Add a Todo</button>
    </div>
} 