import React from 'react'
import logo from '../assets/icon.png'
// importing css
import '../styles/mine.css'
import {IoIosCall} from 'react-icons/io'
import {AiOutlineGithub} from 'react-icons/ai'

function Navbar() {
  return (
    <div className='nav-bar'>
        <div className='nav-left'>
        <img src={logo} alt="" id='logo'/>
        <h1>Chat with Steve</h1>
        </div>

        <div className='nav-right'>
            <IoIosCall className='icons'/>
            <AiOutlineGithub className='icons'/>
        </div>
        
    </div>
  )
}

export default Navbar
