import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const AddValue = () =>{
    if (counter >= 20){
      console.log("Max limit reached")
    }
    else{
      counter = counter + 1
      setCounter(counter)
    }
    
  }
  const RemoveValue = () =>{

    if (counter <= 0){
      console.log("Min limit reached")
    }
    else{
      counter = counter - 1
      setCounter(counter)
    }
  
  }

return (
    <>
      <h1>Counter is {counter}</h1>
      <button onClick={AddValue}>Add Value</button>
      <button onClick={RemoveValue}>Remove Value</button>
    </>
  )
}

export default App
