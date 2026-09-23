import { useState, useCallback, useRef } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { useEffect } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const[numAllowed, setnumAllowed] = useState(false)
  const[charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")
  const passRef = useRef(null)

  const copyPassToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
    },[password])
  const passworGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "1234567890"

    if (charAllowed) str += "!@#$%^&*"

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random()*str.length)
      pass += str.charAt(idx)
      
    }
    setPassword(pass)


  }, [length, numAllowed, charAllowed, setPassword])
  
  


  useEffect(()=>{passworGenerator()}, [length, numAllowed, charAllowed, passworGenerator])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-3 my-8 text-orange-600 bg-gray-800 text-center'>
      <h1 className='text-white text-center my-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
               value={password}
               className='outline-none w-full py-1 px-4'
               placeholder='Password'
               readOnly
               ref = {passRef}
        />
        <button
            onClick={copyPassToClipboard}
            className='outline-none
            bg-blue-700
            text-white px-2'>
            Copy</button>
      </div>
      <div className='flex gap-x-4 '>
        <div className='flex gap-x-2 items-center'>
          <input type="range"
                 min={8}
                 max={50}
                 value={length}
                 className='cursor-pointer'
                 onChange={(e)=>{setLength(e.target.value)}}
                  />
                  <label>Length: {length}</label>
        </div>
        <div className='flex gap-x-2 items-center'>
          <input type="checkbox"
                 value=""
                 defaultChecked={numAllowed}
                 className="w-4 h-4 border border-default-medium roounded xs " 
                 onChange={()=>{
                  setnumAllowed((prev)=>!prev)
                 }}
                 />
                 <label>Number</label>
        </div>
        <div className='flex gap-x-2 items-center'>
          <input type="checkbox"
                 defaultChecked={charAllowed}
                 className="w-4 h-4 border border-default-medium roounded xs " 
                 onChange={()=>{
                  setCharAllowed((prev)=>!prev)
                 }}
                 />
                 <label>Character</label>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
