import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const ChatInput = ({ message, setMessage, sendMessage }) => {
  return (
    <Box sx={{
      display: 'flex',
      padding: 2,
      borderTop: '1px solid #ddd',
    }}>
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        sx={{ marginRight: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendMessage}
        sx={{ height: '100%' }}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;