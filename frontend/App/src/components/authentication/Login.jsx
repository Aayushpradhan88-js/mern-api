import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {axiosInstance} from '../../config/axios'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')

    const navigate = useNavigate()

    function submitHandler(e) {

        e.preventDefault()

        axiosInstance.post('/api/v2/user/login', {
            email,
            password
        }).then(res => {
            console.log(res.data)
            navigate('/') //navigate: homepage
        }).catch(err => {
            console.log(err.res.data)
        })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 text-white rounded-2xl p-8 w-full max-w-md shadow-lg">
                <h2 className="text-3xl font-bold text-purple-500 text-center mb-2">Login</h2>
                <p className="text-center text-purple-300 mb-6">If you already a member, easily log in</p>
                <form onSubmit={submitHandler}>
                    <input
                        onClick={(e) => setEmail(e.preventDefault)}

                        type="email"
                        placeholder="Your email"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <input
                        onClick={(e) => setEmail(e.preventDefault)}

                        type="password"
                        placeholder="Your password"
                        className="w-full p-3 mb-2 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    <div className="text-right text-sm text-purple-300 mb-6">
                        <a href="#" className="hover:underline">Forgot your password?</a>
                    </div>

                    <button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-lg font-semibold mb-6">
                        Login
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
                    <span>If you don't have an account?</span>
                    <a href="#" className="ml-2 text-purple-400 hover:underline font-semibold">Register</a>
                </div>
            </div>
        </div>

    )
}

export default Login