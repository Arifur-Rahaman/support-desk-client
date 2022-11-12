import { Button, Container} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainButton } from '../shared/Button';
import { HeadingPrimary, HeadingSecondary } from '../shared/Heading';

const Home = () => {
    const navigate = useNavigate()
    const handleNewTicketClick = ()=>{
        navigate('new-ticket')
    }
    const viewTickets = ()=>{
        navigate('tickets')
    }
    return (
        <Container maxWidth='xs'>
            <HeadingPrimary align='center' variant='h4' component='h1'>What do you need help with?</HeadingPrimary>
            <HeadingSecondary align='center' variant='h5' component='h2'>Please choose from option below</HeadingSecondary>
            <Button
                variant="outlined"
                onClick = {handleNewTicketClick}
                sx={{
                    color: 'black',
                    width: '100%',
                    display: 'block',
                    mb: '8px'
                }}
            >
                Create Ticket
            </Button>
            <MainButton onClick={viewTickets}>View My Tickets</MainButton>
        </Container>
    );
};

export default Home;