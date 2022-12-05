import { useEffect, useState } from 'react'
import { useUsername } from '../components/usernameContext';
import io from "socket.io-client";


let socket;

type Message = {
  author: string;
  message: string;
};



const Chat = () => {

  const { username } = useUsername();

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);



  return (
    <div>
      <h1 className='text'>Chat</h1>
      <h2 className='text'> Username: {username} </h2>



      <div className="msg-container">
        {messages.map((message: Message, index) => (
          <div key={index}>
            <h3>{message.author} say : </h3>
            <p className='text'>{message.message}</p>
          </div>
        ))}

      </div>
    </div>

  )

}

export default Chat;
