import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import Icon from './Icon';
// import { Icon } from 'react-icons/fa';  // Importing an icon for the user

const Message = ({ text, sender }) => {
  const isUser = sender === 'User';

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignItems: 'center',
      marginBottom: 2,
    }}>
      <Avatar
        sx={{
          bgcolor: isUser ? 'green' : 'blue',
          width: 24,
          height: 24,
          marginLeft: isUser ? 1 : 0,
          marginRight: isUser ? 0 : 1,
        }}
      >
        {isUser ? <Icon /> : <Icon />}
      </Avatar>
      <Box
        sx={{
          backgroundColor: isUser ? '#d1f8d1' : '#e1f5fe',
          padding: 1.5,
          borderRadius: 2,
          maxWidth: '70%',
          wordBreak: 'break-word',
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default Message;