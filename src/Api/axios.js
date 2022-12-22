import axios from 'axios'

export const getAlluser = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users', {
        headers: {
            "Content-Type": "application/json",
        },
    })
}

export const getuserById = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
}
export const updateuser = (id) => {
    return axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
}
export const deleteuser = (id) => {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    })
}
export const addNewuser = (payload) => {
    return axios.post(`https://jsonplaceholder.typicode.com/users`, payload, {
        headers: {
            "Content-Type": "application/json",
        },
    })
}