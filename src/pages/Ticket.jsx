import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { closeTicket, getTicket } from '../features/tickets/ticketSlice';
import { toast } from 'react-toastify'
import { Button, CircularProgress, Paper, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system';
import {getNotes, reset as noteReset} from '../features/notes/notesSlice'
import NoteItem from '../components/NoteItem';
import NoteModal from '../components/NoteModal';

const Ticket = () => {
    const { ticketId } = useParams()
    const { isError, isLoading, message, ticket } = useSelector(state => state.tickets)
    const {isLoading: isNotesLoading, notes } = useSelector(state => state.notes)

    const ticket1 = {...useSelector(state => state.tickets.ticket)}
    ticket1.xyz = 'xyz'
    console.log(ticket1)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onTicketClose =()=>{
        dispatch(closeTicket(ticketId))
        toast.success('Ticket Closed')

        navigate('/tickets')
    }
    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        dispatch(getTicket(ticketId))
        dispatch(getNotes(ticketId))
    }, [isError, dispatch, message, ticketId])


    if (isLoading || isNotesLoading) {
        return (
            <Stack justifyContent='center' alignItems='center'>
                <CircularProgress />
            </Stack>
        )
    }
    return (
        <Container maxWidth='lg'>
            <Stack direction='column' sx={{ borderBottom: '2px solid #ccc', pb: '4px', mb: '0.75rem' }}>
                <Stack
                    direction='row'
                    alignItems='center'
                    columnGap='0.25rem'
                    justifyContent='space-between'
                >
                    <Typography variant='h6' component='p' sx={{ fontWeight: 600, color: '#333' }}>
                        Ticket ID: {ticket._id}
                    </Typography>
                    <Typography
                        variant='subtitle'
                        component='p'
                        sx={{
                            backgroundColor: (ticket.status === 'closed' && '#b71c1c') || 'green',
                            borderRadius: '100px',
                            p: '1px 16px',
                            color: '#ddd'
                        }}
                    >
                        {ticket.status}
                    </Typography>


                </Stack>
                <Stack rowGap='0.125rem'>
                    <Typography variant='subtitle' sx={{ fontWeight: 600, color: '#333' }} component='p'>
                        Date Submitted: {new Date(ticket.createdAt).toLocaleString()}
                    </Typography>
                    <Typography variant='subtitle' sx={{ fontWeight: 600, color: '#333' }} component='p'>
                        Product: {ticket.product}
                    </Typography>
                </Stack>
            </Stack>
            <Paper sx={{ backgroundColor: '#eee', p: '0.5rem', mb: '0.5rem' }} elevation={0} variant='outlined'>
                <Typography variant='subtitle2' component='p' sx={{ fontSize: '1.125rem', fontWeight: '600' }}>
                    Description of Issue
                </Typography>
                <Typography variant='body1' component='p' sx={{ fontSize: '1rem', fontWeight: '500' }}>
                    {ticket.description}
                </Typography>
            </Paper>
            <Typography variant='h6' sx={{ fontWeight: '600', mb: '0.25rem' }}>Notes</Typography>
            {ticket.status !== 'closed' &&<NoteModal ticketId={ticketId}/>}
            
            {
                notes.map((note)=>(
                    <NoteItem key={note._id} note={note} />
                ))
            }
            {
                ticket.status !== 'closed' && (
                    <Button
                        onClick={onTicketClose}
                        variant='contained'
                        disableRipple fullWidth
                        sx={{
                            backgroundColor: '#b71c1c',
                            '&:hover': {
                                background: "#c62828",
                             },

                        }}
                    >
                        Close ticket
                    </Button>
                )
            }
        </Container>
    );
};


export default Ticket;