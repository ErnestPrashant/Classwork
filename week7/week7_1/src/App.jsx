import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Dashboard } from './components/Dashboard'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  
  return <div >
    <button onClick={() => {
      // window.location.href = "/"
      navigate("/")
    }}>Landing page</button>

    <button onClick={() => {
      // window.location.href = "/dashboard"
      navigate("/dashboard")

    }}>dashboard page</button>
  </div>
}

export default App
