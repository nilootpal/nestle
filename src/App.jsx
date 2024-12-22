import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Home from './components/Home'
import ChatFull from './components/ChatFull'
import './App.css'
import './external.css'

function App() {
  return (
    <>
      {/* <Home/> */}
      {/* <ChatFull/> */}
      <Router>
        <CssBaseline />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            
            <Route path="/chat" element={<ChatFull/>} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
