import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestFunction from './Test2.jsx'
import List from './list.jsx'
let Animals = ["Dog","Cat","Sheep"];




function App() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List  />
    </div>
  );
}

export default App
