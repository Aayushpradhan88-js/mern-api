import axios from 'axios'

const API = axios.create(
    {
        baseURL: 'http://localhost:5000/api/v2/users',
    }
)

export const getUsers = () => API.get('/details')
export const getUserById = (id) => API.get(`/${id}`)
export const createUser = (data) => API.post('/register-user', data)
export const updateUser = (id, data) => API.put(`/${id}`, data)
export const deleteUser = (id) => API.delete(`/${id}`)