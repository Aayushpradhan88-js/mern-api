/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { EmployeeData } from "./employee";

function EmployeeFrom() {
    const [data, setData] = useState([])
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState(0)
    const [id, setId] = useState(0)
    const [isUpdate, setIsUpdate] = useState(0)

    useEffect(() => {
        setData(EmployeeData)
    }, [])

    //edit
    const Handleedit = (id) => {
        const userData = data.filter(item => item.id === id)
        if (userData !== 'undefined') {
            setIsUpdate(true)
            setId(id)
            setFirstname(0)
            setLastname(0)
            setAge(0)
        }
    }

    //delete
    const Handledelete = (id) => {
        if (id > 0) {
            if (window.confirm("Are you sure do you want to delete!!")) {
                const userData = data.filter(item => item.id !== id)
                setData(userData)
            }
        }
    }

    const Handlesave = (e) => {
        let error = ''

        if (firstname === '')
            error += 'firstname is required'

        if (firstname === '')
            error += 'lastname is required'

        if (age <= 0)
            error += 'Age is required'

        if (error !== '') {
            e.preventDefault()

            const userData = [...data]
            const newObject = {
                id: EmployeeData.length + 1,
                first_name: firstname,
                last_name: lastname,
                age: age,
            }
            userData.push(newObject)
            setData(userData)
        } else {
            alert(error)
        }
    }

    const Handleupdate = () => {
        const index = data.map((item) => {
            return item.id
        }).indexOf(id)

        const userData = [...data] //copy the original data and save the old data and save it protectvely
        userData[index].firstname = firstname
        userData[index].lastname = lastname
        userData[index].age = age

        setData(userData)
        Handleclear()
    }

    const Handleclear = () => {
        setId(id)
        setFirstname('')
        setLastname('')
        setAge('')
        setIsUpdate(false)
    }

    return (
        <div className="App">
            <div>
                <div>
                    <label>First Name:
                        <input type="text" placeholder="Enter you're firstname" onChange={(e) => setFirstname(e.target.value)} value={firstname} />
                    </label>
                </div>
                <div>
                    <label>Last Name:
                        <input type="text" placeholder="Enter you're lastname" onChange={(e) => setLastname(e.target.value)} value={lastname} />
                    </label>
                </div>
                <div>
                    <label>Age:
                        <input type="text" placeholder="Enter you're age" onChange={(e) => setAge(e.target.value)} value={age} />
                    </label>
                </div>

                <div>
                    {
                        !isUpdate ?
                            <button onClick={(e) => Handlesave(e)}>Save</button>
                            :
                            <button onClick={() => Handleupdate()}>Update</button>

                    }
                    <button onClick={() => Handleclear()}>Clear</button>
                </div>

            </div>

            <table>
                <thead>
                    <tr>
                        <td>Sr.</td>
                        <td>id</td>
                        <td>firstname</td>
                        <td>lastname</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{index.id}</td>
                                    <td>{index.firstname}</td>
                                    <td>{index.lastname}</td>
                                    <td>{index.age}</td>
                                    <td>
                                        <button onClick={Handleedit(item.id)}>Edit</button>
                                        <button onClick={Handledelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export { EmployeeFrom }