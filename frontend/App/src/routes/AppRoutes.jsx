import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '../components/Home'
import { Register } from '../pages/authentication/Register'
import { Login } from '../pages/authentication/Login'
import { Content } from '../pages/authentication/Content'
import { ImageUploader } from '../components/ImageUploader'

import { Chat } from '../components/Chat'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
        <Route path= "/upload" element={<ImageUploader/>}/>  
        <Route path="/assistance-ai" element={<Chat />} />
      </Routes>
    </BrowserRouter>

  )
}