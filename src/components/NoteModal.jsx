import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import {Stack, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createNote } from '../features/notes/notesSlice';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: '0.75rem'
};

const NoteModal = ({ ticketId }) => {
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [noteText, setNoteText] = useState('')

    const onNoteSubmit = (e) => {
        e.preventDefault()
        dispatch(createNote({ noteText, ticketId }))
    }

    const getNoteText = (e) => {
        setNoteText(e.target.value)
    }
    return (
        <div>
            <Button
                variant='contained'
                disableRipple
                size='medium'
                startIcon={<AddIcon />}
                onClick={handleOpen}
                sx={{
                    backgroundColor: '#333',
                    mb: '1rem',
                    '&:hover': {
                        backgroundColor: '#444'
                    }
                }}
            >
                Add Note
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box component='form' 
                    sx={{...style, width: matches? '80%': '500px'}} 
                    onSubmit={onNoteSubmit}
                    >
                        <Stack spacing={2}>
                            <Stack direction='row' justifyContent='space-between' alignItem='center'>
                                <Typography variant='h6'>Add Note</Typography>
                                <Typography
                                    variant='subtitle'
                                    onClick={handleClose}
                                    sx={{
                                        display: 'inline-block',
                                        height: '16px',
                                        width: '16px',
                                        cursor: 'pointer',
                                        color: '#333',
                                        '&:hover': {
                                            color: '#444',
                                        }
                                    }}
                                >
                                    X
                                </Typography>
                            </Stack>
                            <TextField size='small' fullWidth onChange={getNoteText} />
                            <Button
                                type='submit'
                                variant='contained'
                                size='small'
                                sx={{
                                    backgroundColor: '#333',
                                    mb: '1rem',
                                    '&:hover': {
                                        backgroundColor: '#444'
                                    }
                                }}
                            >
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};

export default NoteModal;