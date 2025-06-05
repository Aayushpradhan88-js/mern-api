import { Routes, Route, BrowserRouter } from 'react-router-dom'

import {Home } from '../components/Home'
import { Content } from '../components/authentication/Content'
import { Register } from '../components/authentication/Register'
import { Login } from '../components/authentication/Login'
import {Chat} from '../components/chat/Chat'
// import { Upload } from '../components/upload/upload'

export const AppRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/content" element={<Content />} />
        <Route path= "/assistance-ai" element= {<Chat/>}/>
        {/* <Route path= "/upload" element={<Upload/>}></Route> */}
      </Routes>
    </BrowserRouter>

  )
}