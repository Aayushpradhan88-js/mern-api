import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '../components/Home'
import { Register } from '../pages/authentication/Register'
import { Login } from '../pages/authentication/Login'
import { Content } from '../pages/authentication/Content'
import { Upload } from '../components/Upload'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>

  )
}