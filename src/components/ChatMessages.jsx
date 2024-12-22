import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import Message from './Message';

const ChatMessages = ({ messages }) => {
  const endOfMessagesRef = useRef(null);
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({
        behavior: 'smooth', 
        block: 'end',       
      });
    }
  }, [messages]);
  return (
    <Box sx={{
      flexGrow: 1,
      padding: 2,
      overflowY: 'auto',
      backgroundColor: '#f9f9f9',
    }}>
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
      <div ref={endOfMessagesRef} />
    </Box>
  );
};

export default ChatMessages;