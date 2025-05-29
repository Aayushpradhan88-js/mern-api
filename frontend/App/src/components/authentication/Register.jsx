import { useState } from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'
// import {axiosInstance as axios} from '../../config/axios'
import axios from 'axios'
import Login from './Login'

export const Register = () => {

    const [username, setUsername] = useState('')
    const [firstname, setFirsName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const SubmitHandler = async (data) => {
        // e.preventDefault()

        await axios.get('http://localhost:4000/api/register', data, {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            },
            username,
            firstname,
            lastname,
            email,
            password
        }).then(res => {
            console.log(res.data)
            navigate('/')
        }).catch((err) => {
            console.log(err.response.data)

        })

    }
    return (
        < div className="min-h-screen flex items-center justify-center bg-gray-900" >
            <div className="bg-gray-800 text-white rounded-2xl p-8 w-full max-w-md shadow-lg">
                <h2 className="text-3xl font-bold text-purple-500 text-center mb-6">Register</h2>

                <form onSubmit={SubmitHandler} >
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <input
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder="Last Name"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-6 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-lg font-semibold mb-6">
                        Sign Up
                    </button>
                </form>

                <div className="flex items-center justify-between mb-6">
                    <span className="border-b border-gray-600 w-1/4"></span>
                    <span className="text-gray-400">OR</span>
                    <span className="border-b border-gray-600 w-1/4"></span>
                </div>

                <button className="w-full flex items-center justify-center bg-black border border-white p-3 rounded-lg hover:bg-white hover:text-black transition-colors mb-4">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 mr-2" />
                    Login with Google
                </button>


                <div className="text-center text-sm">
                    If you already have an account?
                    <Link to="/login" className="ml-2 text-purple-400 hover:underline font-semibold">Login</Link>
                </div>
                <button
                    className="py  mt-4 text-sm text-gray-400 hover:underline"
                >
                    <Link to="/"> ← Back</Link>

                </button>
            </div>
        </div >

    )
}