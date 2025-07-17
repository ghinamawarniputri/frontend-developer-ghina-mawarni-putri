import React from 'react'
import { Routes, Route } from 'react-router-dom'
import IdeasPage from './components/IdeasPage'
import Navbar from './components/Navbar'
// Import halaman lain kalau ada, misalnya About, Home, dll

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </>
  )
}

export default App
