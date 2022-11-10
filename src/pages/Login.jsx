import { Container } from '@mui/material';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

import AuthForm from '../components/AuthForm'
import { HeadingPrimary, HeadingSecondary } from '../shared/Heading';
import { reset } from '../features/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {message, isError, isSuccess, user, isLoading} = useSelector(store=>store.auth)
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
                <FaSignInAlt style={{ marginRight: '8px' }} />
                Login
            </HeadingPrimary>
            <HeadingSecondary variant='h5' component='h2' align='center'>
                Please log in to get support
            </HeadingSecondary>
            <AuthForm state={'login'} />


        </Container>
    );
};

export default Login;