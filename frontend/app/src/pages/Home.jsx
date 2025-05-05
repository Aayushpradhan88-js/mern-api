import { useState, useEffect } from 'react'
import { getUsers, deleteUser, updateUser, createUser } from '../api/api'


const Home = () => {

    const [users, setUser] = useState([])
    const [form, setFormData] = useState(
        {
            username: '',
            fullname: '',
            email: '',
            password: ''
        }
    )
    const [successMessage, setSuccessMessage] = useState('')

    //fetching data 
    useEffect(() => {
        fetchUsers()
    }, [])

    //getting user data
    const fetchUsers = async () => {
        const res = await getUsers()
        setUser(res.data)
    }

    //creating user data
    const Handlesubmit = async (e) => {
        e.preventDefault() //वेब पेजलाई रिफ्रेश हुनबाट रोक्छ
        try {
            await createUser(form) //फारमको डाटा (जस्तै, नाम, इमेल) सर्भरमा पठाएर नयाँ प्रयोगकर्ता बनाउँछ
            fetchUsers() //सर्भरबाट सबै प्रयोगकर्ताहरूको लिस्ट ल्याउँछ
            setFormData(
                {
                    username: '',
                    fullname: '',
                    email: '',
                    password: ''
                }
                /*
                यो कोडले फारमलाई खाली गर्छ। setFormData ले React मा फारमको डाटा अपडेट गर्छ।
                उदाहरण: तिमीले फारम भरेर बुझाइसकेपछि, नयाँ फारम खाली कागज जस्तै बनाउन चाहन्छौ। यो कोडले त्यही गर्छ।
                */
            )
        } catch (error) {
            console.log(`Something went wrong while creating user`, error)
        }

        return (
            <div>Home</div>
        )
    }

    //update user
    const Handleupdate = async (id) => {
        try {
            await updateUser(id)
            setSuccessMessage(`Successfully updated youre details ${createUser.username}`)
            fetchUsers()
            setTimeout(() => {
                setSuccessMessage
            }, 3000)
        } catch (error) {
            console.log("Youre details is not updated!! Try again", error)
        }
    }

    //deleting user
    const Handledelete = async (id) => {
        try {
            await deleteUser(id)
            setSuccessMessage('User deleted successfully')
            fetchUsers()
            setTimeout(() => {
                setSuccessMessage
            }, 3000)

        } catch (error) {
            console.log(`User is not deleted!! Try again`, error)
        }
    }


    return (
        <div>
            username: '',
            fullname: '',
            email: '',
            password: ''
            <h2>All Users</h2>
            <form onSubmit={Handlesubmit}>
                <input
                    placeholder='username'
                    value={form.username}
                    onChange={(e) => setFormData({ ...form, username: e.target.value })}
                />
            </form>

            {users.map((user) => (
                <div key={user._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '5px' }}>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Full Name:</strong> {user.fullname}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <button onClick={() => Handledelete(user._id)}>Delete</button>
                </div>
            ))}
            {successMessage && <p>{successMessage}</p>}
            <button onClick={() => Handledelete(123)}>Delete User</button>
        </div>
    )
}

export default Home