import axios from 'axios'
import * as types from './actionType'

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})
const userDeleted = () => ({
    type: types.DELETE_USERS,
})
const userAdded = () => ({
    type: types.ADD_USERS,
})
const getUser = (user) => ({
    type: types.GET_SINGLE_USERS,
    payload: user,
})
const userUpdated = () => ({
    type: types.UPDATE_USERS,
})
export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`)
            .then((res) => {
                console.log({ res });
                dispatch(getUsers(res.data))
            })
            .catch((error) => console.log(error))
    }
}
export const deleteUsers = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
            .then((res) => {
                console.log({ res });
                dispatch(userDeleted())
                dispatch(loadUsers())
            })
            .catch((error) => console.log(error))
    }
}
export const addUsers = (user) => {
    console.log("action",user);
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`, user)
            .then((res) => {
                console.log({ res });
                dispatch(userAdded())
                // dispatch(loadUsers())
            })
            .catch((error) => console.log(error))
    }
}
export const getSingleUser = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
            .then((res) => {
                console.log({ res });
                dispatch(getUser(res.data))
            })
            .catch((error) => console.log(error))
    }
}
export const updateUser = (user, id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user)
            .then((res) => {
                console.log({ res });
                dispatch(userUpdated())
            })
            .catch((error) => console.log(error))
    }
}