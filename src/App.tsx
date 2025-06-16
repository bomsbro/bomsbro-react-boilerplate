import './App.css'
import Component00 from './Component00'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component00 />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
