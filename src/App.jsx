import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import EmployeeList from './components/EmployeeList'
import AddEmployee from './components/AddEmployee'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <Navbar/>
      <AddEmployee/>
   </div>
  )
}

export default App
