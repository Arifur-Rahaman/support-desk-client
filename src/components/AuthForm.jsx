import React from 'react';
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {
    Grid,
    TextField,
    Box,
} from '@mui/material';
import { toast } from 'react-toastify';
import {MainButton} from '../shared/Button'
import { register, signin } from '../features/auth/authSlice';


const AuthForm = ({ state }) => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const { name, email, password, password2 } = formData

    const handleInputChange = (e) => {
        setFormData((previousState) => ({
            ...previousState,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if(state==='registration'){
            handleRegistration()
        }else{
            handleSignin()
        }

    }

    const handleRegistration = ()=>{
        if (password !== password2) {
            toast.error('Passwords do not match')
        }else{
            const userData = {
                name,
                email,
                password
            }
            dispatch(register(userData))
        }

    }

    const handleSignin = ()=>{
        const userData = {
            email,
            password
        }
        dispatch(signin(userData))
    }
    return (
        <Box component='form' onSubmit={handleFormSubmit}>
            <Grid container rowSpacing={2}>
                {
                    state === 'registration' && (<Grid item xs={12}>
                        <TextField
                            fullWidth
                            size='small'
                            type='text'
                            required
                            placeholder='Enter your name:'
                            name='name'
                            value={name}
                            onChange={handleInputChange}
                        />
                    </Grid>)
                }
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        size='small'
                        type='email'
                        required
                        placeholder='Enter your email:'
                        name='email'
                        value={email}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        size='small'
                        type='password'
                        required
                        placeholder='Enter password'
                        name='password'
                        value={password}
                        onChange={handleInputChange}
                    />
                </Grid>
                {

                    state==='registration'&&(<Grid item xs={12}>
                        <TextField
                            fullWidth
                            size='small'
                            type='password'
                            required
                            placeholder='Cofirm password'
                            name='password2'
                            value={password2}
                            onChange={handleInputChange}
                        />
                    </Grid>)
                }
                <Grid item xs={12}>
                    <MainButton
                        variant='contained'
                        disableElevation
                        type='submit'
                    >
                        Submit
                    </MainButton>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AuthForm;