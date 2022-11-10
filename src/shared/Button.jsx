import { Button, styled } from "@mui/material";

export const MainButton = styled(Button)(({ theme }) => ({
    display: 'block',
    width: '100%',
    background: 'black',
    color: 'white',
    "&:hover": {
        backgroundColor: '#333'
    }
}))