import React from 'react'
import '../styles/mine.css'
import profile1 from '../assets/prof1.png'

function Card(props) {
  return (
    <div className='container'>

        <div className='profile-img'>
            <img src={props.chat.prof_img} id='profile-pic'/>
        </div>

        <div className="content">
            <div className="top-content">
                <h4 id='chat-name'>{props.chat.chat_name}</h4>
                <h6 id='last-seen'>{props.chat.chat_time}</h6>

            </div>
            <div className="bottom-content">
                <p id='chat-content'>{props.chat.chat_content}</p>
                <h6 id='chat-number'>{props.chat.chat_number}</h6>

            </div>
        </div>
      
    </div>
  )
}

export default Card
