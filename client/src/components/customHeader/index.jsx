import React from 'react'
import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/solid'

const customHeader = ({ chat }) => {
  return (
    <div className='chat-header'>
        <div className='flexbetween'>
            <ChatBubbleLeftRightIcon className='icon-chat'/>
            <h3 className='header-text'>{chat.title}</h3>
        </div>
        <div className='flexbetween'>
            <PhoneIcon className='icon-phone'/>
            {chat.description !== "⬅️ ⬅️ ⬅️" ? (<p className='header-text'>{chat.description}</p>) : (<div className='header-text'>no chat selected</div>)}
        </div>
    </div>
  )
}

export default customHeader