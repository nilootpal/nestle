import React, { useState } from 'react';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello!', sender: 'User' },
    { text: 'Hi there! How can I help?', sender: 'Support' },
  ]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'User' }]);
      setMessage('');
    }
  };

  return (
    <Box sx={{
      width: '100%',
      minWidth: '330px',
    //   maxWidth: '800px', 
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: 3,
      backgroundColor: '#fff',
    }}>
      <ChatHeader />
      <ChatMessages messages={messages} />
      <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </Box>
  );
};

export default ChatWindow;