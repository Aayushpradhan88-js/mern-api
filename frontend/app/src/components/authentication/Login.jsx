import { useState } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/v2/users/login-user", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json()
        if (!response.ok) throw new Error(data.message)
        alert("You're are logged in")
    }


    return (
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            {/* <!--Login container--> */}
            <div className="bg-[#7ad3f62a] flex rounded-2xl shadow-lg max-w-3xl p-4">
                {/* <!--Form--> */}
                <div className="sm:w-1/2 px-1">
                    <h2 className="font-bold text-2xl text-[#4527a5] text-center">Login</h2>
                    <p className="text-sm mt-7 text-[#6c57b1] text-opacity-70 text-center">If you already a member, easily log
                        in</p>
                    {/* <!--Data entry group--> */}
                    <form className="flex flex-col gap-4" action="" onSubmit={handleSubmit}>
                        <input className="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Your email" onChange={(e) => setEmail(e.target.value)} />
                        <div className="relative">
                            <input className="p-2 mt-8 rounded-xl border w-full" type="password" name="password"
                                placeholder="Your password" onChange={(e) => setPassword(e.target.value)} />
                            <p className="mt-5 text-xs border-b border-gray-400 py-4">
                                <a href="">Forgot Your password?</a>
                            </p>
                        </div>

                        <button className="Login-button rounded-xl text-white py-2">Login</button>
                    </form>

                    <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center text-sm">
                        <img className="w-6 mr-3 mt-1"
                            src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
                            alt="" />
                        Login width Google
                    </button>


                    <div className="mt-3 text-xs flex justify-between items-cente">
                        <p>
                            <a href="#">If you dont't have an account?</a>
                        </p>
                        <button className="py-2 px-5 bg-white border rounded-xl">Register</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login