import React from 'react'
import { Box, Divider, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme';


function MapHeader() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <Typography variant="h1" sx={{ marginBottom: "5px" }}><span style={{ color: colors.grey[500] }}>Newsletter:</span> Roadmap</Typography>
            <Divider />
            <Typography variant="h5" marginTop="15px" marginBottom="20px">
                A step-by-step roadmap to building your own newsletter, with 
                a comprehensive guide for each step in the form of an article. Click 
                and move around each step if you would like to try something else!
            </Typography>  
        </Box>
    )
}

export default MapHeader