import { Grid, Paper, Typography } from '@mui/material';
import { Link } from "react-router-dom"
import React from 'react';

const TicketItem = ({ ticket }) => {
    return (
        <Paper sx={{ p: '0.5rem', backgroundColor: '#eee' }} elevation={0}>
            <Grid container columnSpacing='0.5rem' alignItems='center '>
                <Grid item xs={3}>
                    <Typography variant='subtitle' component='p'>{new Date(ticket.createdAt).toLocaleString()}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant='subtitle' component='p'>{ticket.product}</Typography>
                </Grid>
                <Grid item container xs={2} alignItems='center'>
                    <Typography
                        variant='subtitle'
                        component='p'
                        sx={{
                            backgroundColor: (ticket.status==='closed' && '#b71c1c') || 'green',
                            borderRadius: '100px',
                            color: '#ddd',
                            p: '1px 8px'
                        }}>
                        {ticket.status}
                    </Typography>
                </Grid>
                <Grid item container justifyContent='flex-end' xs={3}>
                    <Link to={`${ticket._id}`} style={{ textDecoration: 'none', border: '1px solid black', padding: '0.125rem 1rem', borderRadius: '4px', backgroundColor: 'white', color: 'black' }}>View</Link>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default TicketItem;