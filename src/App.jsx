import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestFunction from './Test2.jsx'
import List from './list.jsx'
let Animals = ["Dog","Cat","Sheep"];


function Button({text, color})
{
  const buttonStyle = {
    color: color,
  }
  return( 
    <button style={buttonStyle}>{text}</button>
  )
}



export default function App()
{
return (
<div>
<Button text="Click here" color="black"/>
</div>

);
}
