import React from 'react';
import { FaSignInAlt, FaUser, FaSignOutAlt } from 'react-icons/fa'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import {
    Toolbar,
    AppBar,
    IconButton,
    Typography,
    Button
} from '@mui/material'
import { logout, reset } from '../features/auth/authSlice';

const Header = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((store) => store.auth)
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate('/login')
    }

    const handleRegisterClick = () => {
        navigate('/register')
    }

    const handleSignout = () => {
        dispatch(logout())
        dispatch(reset())
    }
    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    color: '#333',
                    backgroundColor: 'white',
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link style={{ all: 'unset', cursor: 'pointer' }} to='/'>Support Desk</Link>
                    </Typography>
                    {
                        user ? (
                            <Button color="inherit" onClick={handleSignout}>
                                <FaSignOutAlt />
                                <Typography variant='span' component='p' sx={{ ml: '4px' }}>Signout</Typography>
                            </Button>
                        ) : (
                            <>
                                <Button color="inherit" onClick={handleLoginClick}>
                                    <FaSignInAlt />
                                    <Typography variant='span' component='p' sx={{ ml: '4px' }}>Login</Typography>
                                </Button>
                                <Button color="inherit" onClick={handleRegisterClick}>
                                    <FaUser />
                                    <Typography variant='span' component='p' sx={{ ml: '4px' }}>Register</Typography>
                                </Button>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar >
            <Toolbar />
        </>
    );
};

export default Header;