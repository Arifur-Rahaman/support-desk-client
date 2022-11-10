import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TicketItem from "../components/TicketItem";
import { CircularProgress, Grid, Paper, Stack, Typography } from "@mui/material";
import { reset, getTickets } from '../features/tickets/ticketSlice'
import { Container } from "@mui/system";
const Tickets = () => {
    const dispatch = useDispatch()
    const { tickets, isSuccess, isLoading } = useSelector(state => state.tickets)

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [isSuccess, dispatch])

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])

    if (isLoading) {
        return (
            <Stack justifyContent='center' alignItems='center'>
                <CircularProgress />
            </Stack>
        )
    }
    return (
        <Container>
            <Stack rowGap='10px'>
                <Paper sx={{ p: '0.5rem', backgroundColor: '#eee' }} elevation={0}>
                    <Grid container columnSpacing='0.5rem'>
                        <Grid item xs={3}>
                            <Typography variant='subtitle' sx={{ fontWeight: '600' }} component='p'>Date</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='subtitle' sx={{ fontWeight: '600' }} component='p'>Product</Typography>
                        </Grid>
                        <Grid item xs={2} alignItems='center'>
                            <Typography variant='subtitle' sx={{ fontWeight: '600' }} component='p'>Status</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                {
                    tickets.map(ticket => <TicketItem key={ticket._id} ticket={ticket} />)
                }
            </Stack>
        </Container>
    );
};

export default Tickets;