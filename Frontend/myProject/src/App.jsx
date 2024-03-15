import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login'
import Signup from './Component/Signup'
import Home from './Component/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <Home/>
    </div></>
      
  )
}

export default App
