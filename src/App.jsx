import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmployeeList from './components/EmployeeList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar/>
      <EmployeeList/>
   </div>
  )
}

export default App
