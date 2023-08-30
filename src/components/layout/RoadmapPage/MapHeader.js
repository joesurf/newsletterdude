import React from 'react'
import { Box, Divider, Typography } from '@mui/material'


function MapHeader() {
    return (
        <Box>
            <Typography variant="h1" sx={{ marginBottom: "5px", fontWeight: "bold" }} className="gradient__word">Roadmap</Typography>
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