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
            <Typography variant="h4" marginTop="15px" marginBottom="20px">
                A step-by-step roadmap to building your own newsletter, with 
                a comprehensive guide for each step in the form of an article. 
                Drag the map around to see other steps and click on each step to 
                find out more!
            </Typography>  
        </Box>
    )
}

export default MapHeader