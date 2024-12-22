import React from 'react';
import { Box, Typography } from '@mui/material';

const ChatHeader = () => {
  return (
    <Box sx={{
      // backgroundColor: '#4CAF50',
      color: '#00008B',
      padding: 2,
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
    }}>
      <Typography variant="h4" align="center">Support Chat</Typography>
    </Box>
  );
};

export default ChatHeader;