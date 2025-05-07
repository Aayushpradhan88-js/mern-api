import React from 'react'
import { useState, useEffect } from 'react'
import { tostify } from 'react-tostify'

const UserSignin = () => {
   const [username, setUsername] = useState('')
   const[fullname, setFullname] = useState('')
   const[email, setEmail] = useState('')
   const[password, setPassword] = useState('')

   const LoginNotify = () => 
    tostify.success("Login Successfull", {

        position: "top-right",
        autoclose: 1200,
        hideProgressBar: false,//false छ भने देखिन्छ, true छ भने लुक्छ
        closeOnClick: true,//Toast मा क्लिक गरेपछि बन्द हुन्छ
        pauseOnHover: true,//
        draggable: true,
        progress: undefined,
        theme: theme ? "Dark" : "Light"
    })




    

}

export { UserSignin }