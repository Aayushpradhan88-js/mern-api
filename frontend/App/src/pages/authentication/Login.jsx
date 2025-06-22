import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChangeValue = (e) => 
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value
            }
        )
    

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            //FETCHING DATA
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/login`,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form)
                }
            )

            const data = await res.json()

            //Storing data in LOCALSTORAGE
            if (res.ok) {
                localStorage.setItem("token", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                navigate("/content");
            } else {
                alert(data.message || "signup failed")
            }
        } catch (err) {
            console.log("Registration error:", err.response ? err.response.data : err.message)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 text-white rounded-2xl p-8 w-full max-w-md shadow-lg">
                <h2 className="text-3xl font-bold text-purple-500 text-center mb-2">Login</h2>
                <p className="text-center text-purple-300 mb-6">If you already a member, easily log in</p>

                <form onSubmit={handleLogin}>
                    {/* USER EMAIL */}
                    <input
                        onChange={handleChangeValue}
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 mb-4 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        name='email'
                        value={form.email}
                    />
                    {/* USER PASSWORD */}
                    <input
                        onChange={handleChangeValue}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-6 rounded-lg bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        name='password'
                        value={form.password}
                    />

                    {/* SUBMIT BUTTON */}
                    <button
                        type='submit'
                        className="w-full bg-purple-600 hover:bg-purple-700 transition-colors p-3 rounded-lg font-semibold mb-6"
                        disabled={loading}>
                        Login
                    </button>
                </form>

                <div className="flex items-center justify-between mb-6">
                    <span className="border-b border-gray-600 w-1/4"></span>
                    <span className="text-gray-400">OR</span>
                    <span className="border-b border-gray-600 w-1/4"></span>
                </div>

                {/* GOOGLE LOGIN */}
                <button className="w-full flex items-center justify-center bg-black border border-white p-3 rounded-lg hover:bg-white hover:text-black transition-colors mb-4">
                    <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 mr-2" />
                    Login with Google
                </button>
                
                {/* REGISTER */}
                <div className="text-center text-sm">
                    If you don't have an account? <Link to="/register" className="ml-2 text-purple-400 hover:underline font-semibold">Register</Link>
                </div>

                <button
                    className="py  mt-4 text-sm text-gray-400 hover:underline"
                >
                    <Link to="/"> ← Back</Link>

                </button>
            </div>
        </div>

    )
}