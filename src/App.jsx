import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar.jsx'
import Create from './Components/Create.jsx'
import Read from './Components/Read.jsx'
import Update from './Components/Update.jsx'
import Home from './Components/Home.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Box sx={{ mt: '64px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/read" element={<Read />} />
            <Route path="/create" element={<Create />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  )
}

export default App
