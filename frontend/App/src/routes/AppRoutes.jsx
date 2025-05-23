import { Routes, Route } from 'react-router-dom'
import { Home } from '../components/authentication/Home'
import { Register } from '../components/authentication/Register'
import { Login } from '../components/authentication/Login'

const AppRoutes = () => {
  return (
    <div>
      <Routes path="/" element={<Home />}></Routes>
      <Routes path="/register-form" element={<Register />}></Routes>
      <Routes path="/login-form" element={<Login />}></Routes>x
    </div>
  )
}

export default AppRoutes
