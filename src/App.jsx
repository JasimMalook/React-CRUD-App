import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from './Components/Create.jsx'
import Read from './Components/Read.jsx'
import Update from './Components/Update.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
