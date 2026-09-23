import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [colour, setColour] = useState("olive")

  return (<div className="w-full h-screen duration-200" style={{backgroundColor: colour}}>
              <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
                <div className='fixed flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl gap-3'>
                  <button 
                      onClick = {()=>{setColour("red")}} 
                      className='flex flex-wrap justify-center bg-red-600 px-2 py-1 rounded-3xl text-white'
                      style={{backgroundColor:"red-600" }}>Red</button>
                   <button 
                      onClick = {()=>{setColour("blue")}}
                      className=' flex flex-wrap justify-center bg-blue-500 px-2 py-1 rounded-3xl text-white'
                      style={{backgroundColor: "blue-500"}}>Blue</button>
                    <button 
                      onClick = {()=>{setColour("green")}}
                      className=' flex flex-wrap justify-center bg-green-700 px-2 py-1 rounded-3xl text-white'>Green</button>
                     <button 
                      onClick = {()=>{setColour("brown")}}
                      className=' flex flex-wrap justify-center bg-yellow-900 px-2 py-1 rounded-3xl text-white'>Brown</button>
                </div>
              </div>

    
          </div>)
}
export default App
