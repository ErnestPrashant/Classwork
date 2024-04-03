import React, { useState } from "react"


function App() {
  return (
    <>
      <Header title="prashant dubey"></Header><br />
      <HeaderWithButton></HeaderWithButton>
    </>
  )
}

function HeaderWithButton() {
  const [title, setTitle] = useState("Prashant dubey")
  function updateTitle() {
    setTitle("my name is " + Math.random());
  }
  return <div>
    <Header title={title}></Header><br />
    <button onClick={updateTitle}>Update the title </button>
  </div>
}

function Header(props) {
  return <div>
    {props.title}
  </div>
}

// const Header = React.memo(function Header({title}){
//   return <div>
//     {title}
//   </div>
// })

export default App
