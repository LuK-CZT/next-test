import { useEffect, useState } from 'react'
import io from 'socket.io-client'
const socket = io();



const Chat = () => {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });


    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return (
    <div>
      <h1 className='text'>Chat</h1>
      <p> Connected: {isConnected ? 'Yes' : 'No'} </p>
    </div>
  )
}

export default Chat;