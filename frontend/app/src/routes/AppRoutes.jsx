import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from '../components/authentication/Login'
import { Register } from '../components/authentication/Signup'
import { Home } from '../components/authentication/Home'
import { Chat } from '../components/chat/Chat'

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/ai-assistance-chat' element={<Chat/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes