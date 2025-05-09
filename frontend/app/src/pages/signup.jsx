import React, {useState, useEffect} from "react"

const SignUp = () => {
    const [data, setData] = useState({})

    const handleInput = (event) => {
        setData({
            ...data, 
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <input type='text' placeholder='Username' name='username' required onClick={handleInput} />
            <input type='text' placeholder='Fullname' name='fullname' required onClick={handleInput} />
            <input type='text' placeholder='Lastname' name='lastname' required onClick={handleInput} />
            <input type='text' placeholder='Email' name='email' required onClick={handleInput} />
            <input type='text' placeholder='Password' name='password' required onClick={handleInput} />
            <button type='submit'>Create Your Account</button>
        </>
    )


}

export { SignUp }