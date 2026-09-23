import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username : "oendrilaaa",
    age : 22
  }
  let newArr = [1,2,3,4]

  return (
    <>
      <h2 className = 'bg-blue-700 text-black p-10 ' >Tailwind-CSS</h2>
      <Card description={"Intern"}/>
      <Card username={"jhilik"} description={"intern's nickname"}/>
    </>
  )
}

export default App
