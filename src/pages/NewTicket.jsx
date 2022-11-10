import { Container } from '@mui/system';
import React from 'react';
import { toast } from 'react-toastify'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Box, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material'
import { useEffect } from 'react';
import { createTicket, reset } from '../features/tickets/ticketSlice';
import { useNavigate } from 'react-router-dom'
const NewTicket = () => {
    const { isError, isSuccess, isLoading, message } = useSelector(state => state.tickets)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            dispatch(reset())
            navigate('/tickets')
        }
        dispatch(reset())
    }, [dispatch, navigate, isError, isLoading, isSuccess, message])

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTicket({ product, description }))
    }
    
    if (isLoading) {
        return <h1 style={{ textAlign: 'center' }}>Loading...........</h1>
    }
    return (
        <Container>
            <Typography variant='h6' align='center' component='p' sx={{ mb: '1rem' }}>Create new ticket</Typography>
            <Box component='form' onSubmit={onSubmit}>
                <Grid container rowSpacing='1rem'>
                    <Grid item xs={12}>
                        <TextField fullWidth size='small' label='Name' value={name} disabled />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth size='small' label='Email' value={email} disabled />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="product">Product</InputLabel>
                            <Select
                                labelId="product"
                                fullWidth
                                size='small'
                                label='Product'
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                            >
                                <MenuItem value='iPhone'>iPhone</MenuItem>
                                <MenuItem value='Macbook Pro'>Mackbook Pro</MenuItem>
                                <MenuItem value='iMac'>iMack</MenuItem>
                                <MenuItem value='iPad'>iPad</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth label='Description'
                            size='small'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            fullWidth
                            type='submit'
                            size='small'
                            variant='contained'
                            disableRipple
                            sx={{
                                backgroundColor: '#333',
                                '&:hover':{
                                    backgroundColor: '#444'
                                }
                            }}
                        >
                            Create
                        </Button>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    );
};

export default NewTicket;