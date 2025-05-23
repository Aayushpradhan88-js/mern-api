import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Home } from '../components/authentication/Home'
import { Register } from '../components/authentication/Register'
import { Login } from '../components/authentication/Login'
import {Chat} from '../components/chat/Chat'
const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-form" element={<Register />} />
        <Route path="/login-form" element={<Login />} />
        <Route path= "/assistance-ai" element= {<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
