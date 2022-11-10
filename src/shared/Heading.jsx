import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeadingPrimary = styled(Typography)(({theme})=>({
    fontWeight: '600'
}))

export const HeadingSecondary = styled(Typography)(({theme})=>({
    fontWeight: '600',
    color: '#666'
}))