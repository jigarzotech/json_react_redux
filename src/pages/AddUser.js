import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addUsers } from '../Redux/actions';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const useStylesIcon = makeStyles((theme) => ({
    root: {
        marginTop: 50,
        '& > span': {
            margin: theme.spacing(2),
        },
    },
}));
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const AddUser = () => {
    const classes = useStyles();
    const classesIcon = useStylesIcon();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation();
    const [newUser, setNewUser] = useState({
        name: "",
        email: "",
        address: ""
    })
    const [error, setError] = useState('')
    const { name, email, address } = newUser
    const inputEvent = (e) => {
        let { value, name } = e.target
        setNewUser((olddata) => {
            return { ...olddata, [name]: value }
        })
    }

    const submitDataHandler = (event) => {
        event.preventDefault()
        if (!name || !email || !address) {
            setError('please input all the input field')
        }
        else {
            dispatch(addUsers(newUser))
            navigate('/')
            setError('')
        }
    }
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={submitDataHandler}>
            <ArrowBackIcon style={{ fontSize: '25px', marginTop: '15px' }} onClick={() => navigate('/')} />
            <h2 style={{ textTransform: 'capitalize' }}>add new user</h2>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <div>
                <div>
                    <TextField
                        id="standard-password-input"
                        label="Name"
                        name="name"
                        value={name}
                        type="text"
                        onChange={inputEvent}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-password-input"
                        label="Email"
                        name="email"
                        value={email}
                        type="email"
                        onChange={inputEvent}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-password-input"
                        label="Address"
                        name="address"
                        value={address}
                        type="text"
                        onChange={inputEvent}
                    />
                </div>

            </div>
            <Button variant="contained" type='submit'>submit</Button>
        </form>
    )
}

export default AddUser
