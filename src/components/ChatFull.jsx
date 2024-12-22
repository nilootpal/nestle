import React from 'react'
import ChatWindow from './ChatWindow'
import Header from './Header'
import { CssBaseline,Container } from '@mui/material'

function ChatFull() {
  return (
    <>
        <Header/>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
            <ChatWindow />
        </Container>
    </>
  )
}

export default ChatFull