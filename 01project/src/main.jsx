import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return (<div>
    <h1>Hello</h1>
  </div>)
}
// const anotherElement = <a href='https://youtube.com' target ='_blank'>Visit Youtube</a>
const reactEl = React.createElement('a',
  {href: 'https://youtube.com' , target: '_blank'},
  'click here to visit youtube')
createRoot(document.getElementById('root')).render(
  
    reactEl
  
)
