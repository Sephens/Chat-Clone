import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Chats from './Chats'


function App() {
  const chat = Chats.map((chat)=>{
    return <Card
    chat = {chat}
    />
  })

  return (
    <div className="App">
     
    <Navbar/>
    {chat}
      </div>
  )
}

export default App
