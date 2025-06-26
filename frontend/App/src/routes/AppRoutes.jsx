import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '../components/Home'
import { Register } from '../pages/authentication/Register';
import { Login } from '../pages/authentication/Login'
import { Content } from '../pages/Content'
import { Upload } from '../components/upload/Upload'
import { GetContentDetails as ContentDetailPage } from '../components/channel/ContentDetails'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
        <Route path="/upload" element={<Upload />} />
        
        <Route path="/watch" element={<ContentDetailPage/>} />
        <Route path="/image" element={<ContentDetailPage/>} />
        <Route path="/file" element={<ContentDetailPage/>} />
      </Routes>
    </BrowserRouter>

  )
}