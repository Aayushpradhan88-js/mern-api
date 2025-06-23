import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '../components/Home'
import { Register } from '../pages/authentication/Register';
import { Login } from '../pages/authentication/Login'
import { Content } from '../pages/Content'
import { Upload } from '../components/upload/Upload'
import { GetContentDetails } from '../components/channel/ContentDetails'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
        <Route path="/upload" element={<Upload />} />
        
        <Route path="/watch" element={<GetContentDetails/>} />
        <Route path="/image" element={<GetContentDetails/>} />
        <Route path="/file" element={<GetContentDetails/>} />
      </Routes>
    </BrowserRouter>

  )
}