import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const Chat = () => {
  const [messages, setMessages] = useState(["Hello"]);
  const [message, setMessage] = useState('');

  // Handle sending a new message
  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'User' }]);
      setMessage('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 400,
        height: 600,
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: 3,
        backgroundColor: '#fff',
      }}
    >
      {/* Chat Header */}
      <Box sx={{ backgroundColor: '#4CAF50', color: '#fff', padding: 2 }}>
        <Typography variant="h6" align="center">Chat</Typography>
      </Box>

      {/* Chat Messages Area */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          overflowY: 'auto',
          backgroundColor: '#f9f9f9',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {messages.map((msg, index) => (
          <Paper key={index} sx={{ padding: 1, backgroundColor: msg.sender === 'User' ? '#d1f8d1' : '#f1f1f1' }}>
            <Typography variant="body1">{msg.text}</Typography>
          </Paper>
        ))}
      </Box>

      {/* Chat Input */}
      <Box sx={{ display: 'flex', padding: 2, gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;