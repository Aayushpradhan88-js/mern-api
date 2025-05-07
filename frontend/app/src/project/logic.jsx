/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { EmployeeData } from "./employee"

function EmployeeFrom() {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(EmployeeData)
    }, [])

    const Handleedit = (id) => {
        const userData = data.find((user) => user.id === id)
    }

    return (
        <div className="App">
            <div>
                {/* <div>
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
                </div> */}

                {/* <div>
                    {
                        !isUpdate ?
                            <button onClick={(e) => Handlesave(e)}>Save</button>
                            :
                            <button onClick={() => Handleupdate()}>Update</button>

                    }
                    <button onClick={() => Handleclear()}>Clear</button>
                </div> */}

            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>Sr.</td>
                        <td>id</td>
                        <td>firstname</td>
                        <td>lastname</td>
                        <td>age</td>
                        <td>action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return ( //tr = table row, td = table data
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                        <button className="btn btn-danger">Delete</button>
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