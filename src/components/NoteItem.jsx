import React from 'react';
import { Box, Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
const NoteItem = ({ note }) => {
    const { user } = useSelector((state) => state.auth)

    return (
        <>
            <Stack
                direction='row'
                justifyContent='space-between'
                sx={{
                    backgroundColor: note.isStaff ? 'rgba(0, 0, 0, 0.7)' : '#fff',
                    color: note.isStaff ? '#fff' : '#000',
                    border: '1px solid #ccc',
                    p: '0.5rem',
                    mb: '1rem'
                }}
            >
                <Box component='div'>
                    <Typography variant='subtitle1' sx={{fontWeight: '600'}}>Note from {note.isStaff ? <span>Staff</span> : <span>{user?.name}</span>}</Typography>
                    <Typography variant='body1' sx={{fontWeight: '500'}}>{note.text}</Typography>
                </Box>
                <Typography>{new Date(note.createdAt).toLocaleString('en-us')}</Typography>
            </Stack>
        </>
    );
};

export default NoteItem;