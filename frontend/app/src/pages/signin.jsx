import React from 'react'
import { useState, useEffect } from 'react'
import { toast } from 'react-tostify'


const UserSignin = () => {
    // const backend_URL = TODO: 
    const [data, setData] = useState([])
    const [theme, setTheme] = useState(() => {
        const saveTheme = localStorage.getItem("Dark")
        return saveTheme ? JSON.parse(saveTheme) : false
    })

    const handleInput = (event) => {
        setData(
            ...data,
            [event.target.data] = event.target.value
        )
    }

    //Login success Falsh Message
    const LoginNotify = () =>
        toast.success("Login Successfull", {
            position: "top-right",
            autoclose: 1200,
            hideProgressBar: false,//false छ भने देखिन्छ, true छ भने लुक्छ
            closeOnClick: true,//Toast मा क्लिक गरेपछि बन्द हुन्छ
            pauseOnHover: true,//
            draggable: true,
            progress: undefined,
            theme: theme ? "Dark" : "Light"
        })

        //Invalid error
    const InvalidError = () =>
        toast.error("Invalid Credentials !", {
            position: "top-center",
            draggable: true,
            hideProgressBars: true,
            autoclose: 1200,
            closeOnClick: true,
            pauseOnHover: true
        })

        const SubmitData = async (eventBtn) => {
            eventBtn.preventDefault() //page reload stop



        }

        return (
            <>
            <input type='text' placeholder='Email'    name='email'    required onClick={handleInput}/>
            <input type='text' placeholder='Password' name='password' required onClick={handleInput}/>
            <button type='submit' onClick={SubmitData}>Login Account</button>
            </>
        )
}
export { UserSignin } 
