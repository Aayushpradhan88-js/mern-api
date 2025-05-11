import { useState } from 'react'

const Register = () => {
    // const [data, setData] = useState([])
    const [username, setUsername] = useState('')
    const [fullname, setFullname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const api = await
    //Submit logic
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:5000/api/v2/users/register-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    fullname,
                    lastname,
                    email,
                    password
                })
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.message)
            alert("You're Successfully registered")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center">
            {/* <!--Register container--> */}
            <div className="bg-[#7ad3f62a] flex rounded-2xl shadow-lg max-w-3xl p-9">
                {/* <!--Form--> */}
                <div className="sm:w-1/2 px-1">
                    <h2 className="font-bold text-2xl text-[#4527a5] text-center">Register </h2>
                    {/* <!--Data entry group--> */}
                    <form className="flex flex-col gap-4" action="" onSubmit={handleSubmit}>
                        {/* <!-- <h1 className="p-4 mt-7 font-bold">Username</h1> --> */}
                        <input className="p-2 mt-13 rounded-xl border" type="text" name="username" placeholder="create username" onChange={(e) => setUsername(e.target.value)} />
                        {/* <!-- <h1 className="p-4  font-bold">Username</h1> --> */}
                        <input className="p-2 mt-3 rounded-xl border" type="text" name="fullname" placeholder="create fullname" onChange={(e) => setFullname(e.target.value)} />
                        <input className="p-2 mt-3 rounded-xl border" type="text" name="lastname" placeholder="create lastname" onChange={(e) => setLastname(e.target.value)} />
                        <input className="p-2 mt-3 rounded-xl border" type="text" name="email" placeholder="create email" onChange={(e) => setEmail(e.target.value)} />
                        <div className="relative">
                            <input className="p-2 mt-3 rounded-xl border w-full" type="password" name="password"
                                placeholder="create password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    <button className="Login-button rounded-xl text-white py-2 cursor-pointer" type='Submit'>SignUp</button>
                    </form>

                    {/* <form /> */}

                    <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center text-sm">
                        <img className="w-6 mr-3 mt-1 cursor-pointer"
                            src="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
                            alt="" />
                        Login with Google
                    </button>


                    <div className="mt-3 text-xs flex justify-between items-cente cursor-pointer">
                        <p>
                            <a href="#">If you have an account?</a>
                        </p>
                        <button className="py-2 px-5 bg-white border rounded-xl">Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register