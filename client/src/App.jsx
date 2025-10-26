import React, { useState } from 'react'
import Login from './pages/login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Dasboard from './pages/Dasboard'


const App = () => {
  // const [token,  ] = useState()
  return (
    <>
      <Routes>
        <Route path="/" element={<Dasboard/>}/> 
      </Routes>
    </>
  )
}

export default App