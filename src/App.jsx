import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Card
      prof_img = 'src\assets\prof1.png'
      chat_name = "Jane"
      chat_time = "2:00"
      chat_content= 'Hello'
      chat_number= '20'
      />

<Card
      prof_img = 'src\assets\prof2.png'
      chat_name = "Steve"
      chat_time = "3:00"
      chat_content= 'How are you'
      chat_number= '3'
      />
     
      </div>
  )
}

export default App
