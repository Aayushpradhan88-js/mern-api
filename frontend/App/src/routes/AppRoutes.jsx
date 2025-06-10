import { Routes, Route, BrowserRouter } from 'react-router-dom'

import { Home } from '../components/Home'
import { Content } from '../pages/authentication/Content'
import { Register } from '../pages/authentication/Register'
import { Login } from '../pages/authentication/Login'
import { Chat } from '../components/chat/Chat'
import { Upload } from '../components/upload/Upload'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content" element={<Content />} 
        
        />
        <Route path= "/upload" element={<Upload/>}/>

        <Route path="/assistance-ai" element={<Chat />} />
      </Routes>
    </BrowserRouter>

  )
}