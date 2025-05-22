import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/login' element={<div>Login</div>} />
        <Route path='/register' element={<div>Register</div>} />
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes