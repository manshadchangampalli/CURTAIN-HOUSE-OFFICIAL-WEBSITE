import React, {useEffect, useState} from 'react'
import './ChatBot.scss'
import chatIcon from '../../Images/livechaticon.svg'

function ChatBot() {
    
    return (
        <div  className="chat-Bot"> 
            <img src={chatIcon} alt="chatbot" />
            
        </div>
    )
}

export default ChatBot
