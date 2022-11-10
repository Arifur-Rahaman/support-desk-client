import { Container} from '@mui/material';
import { useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import{useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

import AuthForm from '../components/AuthForm'
import { reset } from '../features/auth/authSlice';
import { HeadingPrimary, HeadingSecondary } from '../shared/Heading';

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoading, isError, isSuccess, user, message} = useSelector((store)=>store.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        //Redirect when login
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())

    }, [isLoading, isError, message, user, isSuccess, dispatch, navigate ])
    return (
        <Container maxWidth='xs'>
            <HeadingPrimary align='center' variant='h4' component='h1'>
                <FaUser style={{marginRight:'8px'}}/>
                Register
            </HeadingPrimary>
            <HeadingSecondary variant='h5' component='h2' align='center'>
                Please create an account
            </HeadingSecondary>
            <AuthForm state={'registration'}/>
            

        </Container>
    );
};

export default Register;