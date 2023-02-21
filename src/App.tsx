import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'

import Home from './pages/Index'
import Forms from './pages/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#F7F7F9]">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/forms' element={<Forms />} />
      </Routes>
    </div>
  )
}

export default App
